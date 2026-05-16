/**
 * スクレイパー・データ整合性のユニットテスト
 * scraper/scrape.js のロジックとデータ品質を検証
 */

import { describe, it, expect } from "vitest";
import { EVENTS } from "../data/events.js";

// ── stableId 関数の再現（scraper/scrape.js から）──
import crypto from "crypto";
function stableId(title, url) {
  const hash = crypto
    .createHash("md5")
    .update(title + url)
    .digest("hex");
  return 10000 + (parseInt(hash.substring(0, 5), 16) % 89999);
}

// ========================================================
// EVENTS データ品質テスト
// ========================================================
describe("EVENTS データ整合性", () => {
  // BUG #25修正: スクレイパーデータは `label` を使用 (`categoryLabel` は存在しない)
  it("全イベントに必須フィールドが存在する", () => {
    const requiredFields = [
      "id",
      "title",
      "emoji",
      "category",
      "label", // BUG #25修正: categoryLabel → label
      "area",
      "venue",
      "startDate",
      "endDate",
      "tags",
      "desc",
      "url",
      "free",
      "age",
    ];
    EVENTS.forEach((ev) => {
      requiredFields.forEach((field) => {
        expect(ev[field], `event id:${ev.id} field:${field}`).toBeDefined();
      });
    });
  });

  // BUG #25証拠: 旧フィールド categoryLabel は存在しないことを確認
  it("[BUG #25証拠] 全イベントに categoryLabel フィールドは存在しない（label を使用）", () => {
    const withCategoryLabel = EVENTS.filter(
      (ev) => ev.categoryLabel !== undefined,
    );
    expect(withCategoryLabel.length).toBe(0);
  });

  it("全イベントの label が空でない文字列", () => {
    EVENTS.forEach((ev) => {
      expect(typeof ev.label, `event id:${ev.id} label should be string`).toBe(
        "string",
      );
      expect(
        ev.label.length,
        `event id:${ev.id} label should not be empty`,
      ).toBeGreaterThan(0);
    });
  });

  it("全イベントの ID が重複していない", () => {
    const ids = EVENTS.map((e) => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("全イベントの startDate が有効な日付", () => {
    EVENTS.forEach((ev) => {
      const d = new Date(ev.startDate);
      expect(isNaN(d.getTime()), `event id:${ev.id} startDate invalid`).toBe(
        false,
      );
    });
  });

  it("全イベントの endDate が有効な日付", () => {
    EVENTS.forEach((ev) => {
      const d = new Date(ev.endDate);
      expect(isNaN(d.getTime()), `event id:${ev.id} endDate invalid`).toBe(
        false,
      );
    });
  });

  // ── BUG #17: endDate < startDate のイベントがないか ──
  it("[BUG #17] endDate が startDate より前のイベントがないか", () => {
    const inverted = EVENTS.filter(
      (ev) => new Date(ev.endDate) < new Date(ev.startDate),
    );
    // 逆転データがあると formatDateRange が "20日〜10日" のような不正表示になる
    expect(inverted.length).toBe(0);
    if (inverted.length > 0) {
      inverted.forEach((ev) => {
        console.error(
          `[BUG] id:${ev.id} "${ev.title}" endDate(${ev.endDate}) < startDate(${ev.startDate})`,
        );
      });
    }
  });

  it("全イベントの category が有効な値", () => {
    const validCategories = [
      "experience",
      "exhibition",
      "nature",
      "culture",
      "festival",
    ];
    EVENTS.forEach((ev) => {
      expect(
        validCategories,
        `event id:${ev.id} invalid category: ${ev.category}`,
      ).toContain(ev.category);
    });
  });

  it("全イベントの tags が配列", () => {
    EVENTS.forEach((ev) => {
      expect(
        Array.isArray(ev.tags),
        `event id:${ev.id} tags is not array`,
      ).toBe(true);
    });
  });

  it("全イベントの free が boolean", () => {
    EVENTS.forEach((ev) => {
      expect(typeof ev.free, `event id:${ev.id} free is not boolean`).toBe(
        "boolean",
      );
    });
  });

  // ── BUG #18: URL の形式チェック ──
  it("[BUG #18] 全イベントの url が有効な HTTP/HTTPS URL か", () => {
    const invalidUrls = EVENTS.filter((ev) => {
      try {
        const u = new URL(ev.url);
        return !["http:", "https:"].includes(u.protocol);
      } catch {
        return true; // パース失敗 = 無効
      }
    });
    expect(invalidUrls.length).toBe(0);
    if (invalidUrls.length > 0) {
      invalidUrls.forEach((ev) => {
        console.error(`[BUG] id:${ev.id} invalid url: ${ev.url}`);
      });
    }
  });
});

// ========================================================
// stableId のハッシュ衝突テスト
// ========================================================
describe("stableId（スクレイパーのID生成）", () => {
  it("同じ入力で同じIDを返す（冪等性）", () => {
    const id1 = stableId("テストイベント", "https://example.com");
    const id2 = stableId("テストイベント", "https://example.com");
    expect(id1).toBe(id2);
  });

  it("異なる入力で異なるIDを返す（基本ケース）", () => {
    const id1 = stableId("イベントA", "https://example.com/a");
    const id2 = stableId("イベントB", "https://example.com/b");
    expect(id1).not.toBe(id2);
  });

  it("生成IDは 10000〜99999 の範囲内", () => {
    const id = stableId("テスト", "https://example.com");
    expect(id).toBeGreaterThanOrEqual(10000);
    expect(id).toBeLessThanOrEqual(99999);
  });

  // ── BUG #19: stableId のハッシュ空間が狭く衝突リスクがある ──
  it("[BUG #19] stableId の空間は 89999 通りしかなく大量イベント時に衝突する", () => {
    // 空間: 10000〜99999 = 90000 通り
    // MD5 の最初の 5 hex digits (20bits) % 89999 → 0〜89998
    // 誕生日問題: 約 400 イベントで衝突確率 > 50%
    const maxSpace = 89999;
    // 生日日問題の50%衝突に必要な数 ≈ √(2 × n × ln2) ≈ √(2 × 89999 × 0.693) ≈ 353
    const approximateCollisionThreshold = Math.sqrt(2 * maxSpace * Math.log(2));
    expect(approximateCollisionThreshold).toBeLessThan(400); // 衝突リスクが高いことの確認
    // 実際に複数IDを生成して衝突確認
    const ids = new Set();
    let collision = false;
    for (let i = 0; i < 1000; i++) {
      const id = stableId(`イベント${i}`, `https://example${i}.com`);
      if (ids.has(id)) {
        collision = true;
        break;
      }
      ids.add(id);
    }
    // 1000件で衝突が起こることを確認（バグの証拠）
    expect(collision).toBe(true); // 衝突が発生しない場合は稀だが、起こりうる
  });

  // ── BUG #20: scraper の loadManualEvents が eval() を使用している ──
  it("[BUG #20] scraper の loadManualEvents は eval() でコードを実行する（セキュリティリスク）", () => {
    // scraper/scrape.js の該当コード:
    // const events = eval(match[1]) ← 任意コード実行の脆弱性
    // events.js ファイルの内容が改ざんされた場合、eval による RCE が発生する
    // このテストは「eval を使っている事実」を文書化するためのもの

    // scrape.js のソースを読んで eval の存在を確認
    // (import できないのでテキスト確認)
    const fs = require("fs"); // CJS fallback
    const path = require("path");
    const scrapeContent = fs.readFileSync(
      path.resolve(__dirname, "../../scraper/scrape.js"),
      "utf-8",
    );
    // eval( が含まれていることを確認 → セキュリティ問題の存在証明
    expect(scrapeContent).toContain("eval("); // これが PASS = eval 使用 = BUG確認
  });
});

// ========================================================
// KIDS_KEYWORDS 検証
// ========================================================
describe("KIDS_KEYWORDS", () => {
  it("[BUG #8修正確認] KIDS_KEYWORDS は sources.js のみで管理される（useEvents.jsから別定義を削除済み）", async () => {
    const { KIDS_KEYWORDS } = await import("../data/sources.js");
    expect(Array.isArray(KIDS_KEYWORDS)).toBe(true);
    expect(KIDS_KEYWORDS.length).toBeGreaterThan(0);
    // useEvents.js には KIDS_KEYWORDS がないことを確認
    const eventsModule = await import("../composables/useEvents.js");
    expect(eventsModule.KIDS_KEYWORDS).toBeUndefined();
  });
});
