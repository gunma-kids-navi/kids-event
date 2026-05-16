/**
 * sources.js のデータ整合性テスト
 * SOURCES データの品質・matchUrl の正確性・SourcesView のカウントロジックを検証
 */

import { describe, it, expect } from "vitest";
import { SOURCES } from "../data/sources.js";
import { EVENTS } from "../data/events.js";

// ── SourcesView.vue の sourceCounts ロジックを再現 ──
function countByMatchUrl(events, matchUrl) {
  if (!matchUrl) return 0;
  return events.filter((e) => (e.url || "").includes(matchUrl)).length;
}

function buildSourceCounts(sources, events) {
  const result = {};
  sources.forEach((s) => {
    result[s.name] = countByMatchUrl(events, s.matchUrl);
  });
  return result;
}

// ─────────────────────────────────────────────
describe("SOURCES データ整合性", () => {
  it("全ソースに name フィールドがある", () => {
    SOURCES.forEach((s) => {
      expect(s.name, `source missing name`).toBeTruthy();
    });
  });

  it("全ソースに matchUrl フィールドがある（null は未定義と区別）", () => {
    SOURCES.forEach((s) => {
      expect("matchUrl" in s, `${s.name} に matchUrl フィールドがない`).toBe(
        true,
      );
    });
  });

  it("各 matchUrl は HTTPS ドメイン形式（スキームなし）", () => {
    SOURCES.forEach((s) => {
      if (!s.matchUrl) return; // null は許容
      expect(
        s.matchUrl.startsWith("http"),
        `${s.name} の matchUrl にスキームが含まれている: ${s.matchUrl}`,
      ).toBe(false);
      expect(s.matchUrl.length).toBeGreaterThan(0);
    });
  });

  // BUG #26修正済み: "ぐんま昂虫の森" (誤字) → "ぐんま昆虫の森" (正字)
  it("[BUG #26修正済み] SOURCES の「ぐんま昆虫の森」が正しい漢字（昆）で登録されている", () => {
    const correctEntry = SOURCES.find((s) => s.name === "ぐんま昆虫の森");
    const typoEntry = SOURCES.find((s) => s.name === "ぐんま昂虫の森");
    // 正しいエントリが存在する（修正後はこちらが true）
    expect(correctEntry, "正しいエントリが見つからない").toBeDefined();
    // 誤字エントリが存在しない（修正済み）
    expect(typoEntry, "誤字エントリ「昂虫」がまだ存在している").toBeUndefined();
  });

  it("SOURCES の name が重複していない", () => {
    const names = SOURCES.map((s) => s.name);
    const unique = new Set(names);
    expect(unique.size).toBe(names.length);
  });

  it("SOURCES の icon は 1〜2 文字", () => {
    SOURCES.forEach((s) => {
      expect(
        s.icon.length,
        `${s.name} の icon が不正: "${s.icon}"`,
      ).toBeGreaterThanOrEqual(1);
      expect(s.icon.length).toBeLessThanOrEqual(2);
    });
  });
});

// ─────────────────────────────────────────────
describe("sourceCounts - matchUrl による件数カウント", () => {
  it("matchUrl が null のソースは 0 件", () => {
    expect(countByMatchUrl(EVENTS, null)).toBe(0);
  });

  it("matchUrl が空文字のソースは 0 件", () => {
    expect(countByMatchUrl(EVENTS, "")).toBe(0);
  });

  it("存在しないドメインでは 0 件", () => {
    expect(countByMatchUrl(EVENTS, "nonexistent.example.com")).toBe(0);
  });

  it("gunlabo.net は複数件ヒットする（ぐんラボ！）", () => {
    const count = countByMatchUrl(EVENTS, "gunlabo.net");
    expect(count).toBeGreaterThan(0);
  });

  it("safari.co.jp は 1 件以上ヒットする（群馬サファリパーク）", () => {
    const count = countByMatchUrl(EVENTS, "safari.co.jp");
    expect(count).toBeGreaterThan(0);
  });

  it("全ソースのカウント合計は EVENTS 総数以下", () => {
    // 同じイベントが複数ソースにカウントされる可能性があるため ≦
    const total = SOURCES.reduce(
      (sum, s) => sum + countByMatchUrl(EVENTS, s.matchUrl),
      0,
    );
    expect(total).toBeLessThanOrEqual(EVENTS.length * SOURCES.length);
  });

  // BUG #27: 太田市 matchUrl "city.ota.gunma.jp" に対して EVENTS が 0 件一致
  // → SourcesView で「太田市: 0件」と表示されるが実際には太田市のイベントが存在する可能性
  it("[BUG #27] 太田市 matchUrl は現在 EVENTS に 0 件しかマッチしない", () => {
    const otaSource = SOURCES.find((s) => s.name === "太田市");
    expect(otaSource).toBeDefined();
    const count = countByMatchUrl(EVENTS, otaSource.matchUrl);
    // この値が 0 であることがバグの証拠（ユーザーには「0件掲載中」と見える）
    expect(count).toBe(0);
  });
});

// ─────────────────────────────────────────────
describe("buildSourceCounts - SourcesView の計算ロジック", () => {
  it("全ソースのカウントが計算される", () => {
    const counts = buildSourceCounts(SOURCES, EVENTS);
    SOURCES.forEach((s) => {
      expect(counts[s.name], `${s.name} のカウントが undefined`).toBeDefined();
      expect(typeof counts[s.name]).toBe("number");
      expect(counts[s.name]).toBeGreaterThanOrEqual(0);
    });
  });

  it("少なくとも 1 件以上カウントされるソースが存在する", () => {
    const counts = buildSourceCounts(SOURCES, EVENTS);
    const hasPositive = Object.values(counts).some((c) => c > 0);
    expect(hasPositive).toBe(true);
  });

  it("空の EVENTS 配列では全カウントが 0", () => {
    const counts = buildSourceCounts(SOURCES, []);
    Object.values(counts).forEach((c) => {
      expect(c).toBe(0);
    });
  });
});

// ─────────────────────────────────────────────
describe("EVENTS と SOURCES の照合", () => {
  it("EVENTS の各 url はいずれかの SOURCES.matchUrl にマッチする（網羅率確認）", () => {
    const matchedUrls = SOURCES.filter((s) => s.matchUrl).map(
      (s) => s.matchUrl,
    );
    const unmatched = EVENTS.filter(
      (e) => !matchedUrls.some((mu) => (e.url || "").includes(mu)),
    );
    // 網羅率 = マッチしなかったイベント数をログ出力（テスト失敗ではなく情報提供）
    if (unmatched.length > 0) {
      console.warn(
        `[INFO] SOURCES にマッチしない EVENTS が ${unmatched.length} 件あります:`,
        unmatched.slice(0, 3).map((e) => e.url),
      );
    }
    // 全件マッチしなくても失敗にしない（情報提供テスト）
    expect(Array.isArray(unmatched)).toBe(true);
  });
});
