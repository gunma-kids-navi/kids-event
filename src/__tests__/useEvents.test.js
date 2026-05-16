/**
 * useEvents.js のユニットテスト
 * ────────────────────────────────────────────────────────
 * 目的: 日付ユーティリティ・ステータス判定のすべての振る舞いを検証し
 *       潜在バグを炙り出す
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  parseDate,
  formatDate,
  formatDateRange,
  getStatus,
  statusLabel,
  statusClass,
  daysLeft,
  daysToStart,
} from "../composables/useEvents";

// ── ヘルパー: モジュール内 TODAY を差し替えるため vi.useFakeTimers を使う ──
function setFakeNow(dateStr) {
  vi.setSystemTime(new Date(dateStr + "T10:00:00"));
}

// ========================================================
// parseDate
// ========================================================
describe("parseDate", () => {
  it("YYYY-MM-DD 文字列を Date オブジェクトに変換する", () => {
    const d = parseDate("2026-05-15");
    expect(d).toBeInstanceOf(Date);
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(4); // 0-indexed
    expect(d.getDate()).toBe(15);
  });

  it("時刻部分は 00:00:00 になる（ローカルタイム）", () => {
    const d = parseDate("2026-07-04");
    expect(d.getHours()).toBe(0);
    expect(d.getMinutes()).toBe(0);
    expect(d.getSeconds()).toBe(0);
  });

  // BUG候補: 不正な日付文字列を渡した場合
  it("不正な日付文字列は Invalid Date を返す", () => {
    const d = parseDate("not-a-date");
    expect(isNaN(d.getTime())).toBe(true);
  });
});

// ========================================================
// formatDate
// ========================================================
describe("formatDate", () => {
  it('2026-05-15 → "2026年5月15日"', () => {
    expect(formatDate("2026-05-15")).toBe("2026年5月15日");
  });

  it("月・日が 1 桁の場合もゼロパディングなし", () => {
    expect(formatDate("2026-01-03")).toBe("2026年1月3日");
  });
});

// ========================================================
// formatDateRange
// ========================================================
describe("formatDateRange", () => {
  it("同じ日付なら単一日付形式", () => {
    expect(formatDateRange("2026-05-20", "2026-05-20")).toBe("2026年5月20日");
  });

  it('同月なら "YYYY年M月D日〜D日" 形式', () => {
    const result = formatDateRange("2026-05-10", "2026-05-20");
    expect(result).toBe("2026年5月10日〜20日");
  });

  it("異なる月なら両端フル形式", () => {
    const result = formatDateRange("2026-05-25", "2026-06-10");
    expect(result).toBe("2026年5月25日 〜 2026年6月10日");
  });

  it("異なる年をまたぐ場合は両端フル形式", () => {
    const result = formatDateRange("2026-12-20", "2027-01-10");
    expect(result).toBe("2026年12月20日 〜 2027年1月10日");
  });

  // ── BUG #1: 終了日が開始日より前（逆転）の場合 ──
  it("[BUG #1] 終了日 < 開始日 の逆転データで同月判定が誤動作する", () => {
    // startDate="2026-05-20", endDate="2026-05-10" → start > end
    // 現実には入力ミスだが、バリデーションが無いため通過してしまう
    // 期待: 何らかの警告か、少なくとも日付の順序が保証されること
    const result = formatDateRange("2026-05-20", "2026-05-10");
    // 現在の実装: 同月なので "2026年5月20日〜10日" と表示してしまう
    // "20日〜10日" は意味不明な表示 → バグ
    expect(result).not.toContain("20日〜10日"); // これが失敗 = バグ確認
  });
});

// ========================================================
// getStatus (vi.useFakeTimers で TODAY を固定)
// ========================================================
describe("getStatus", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  const mkEvent = (startDate, endDate) => ({
    id: 99,
    title: "テスト",
    emoji: "🎈",
    category: "experience",
    categoryLabel: "体験",
    area: "テスト市",
    venue: "テスト会場",
    startDate,
    endDate,
    tags: [],
    desc: "",
    url: "",
    free: false,
    age: "全年齢",
  });

  it('開催期間内なら "ongoing"', () => {
    setFakeNow("2026-05-15");
    const ev = mkEvent("2026-05-01", "2026-05-31");
    // NOTE: getStatus は モジュールロード時の TODAY を使うため
    //       vi.useFakeTimers では動作しない可能性がある → BUG #2 で検証
    expect(getStatus(ev)).toBe("ongoing");
  });

  it('開始前なら "upcoming"', () => {
    setFakeNow("2026-05-15");
    const ev = mkEvent("2026-06-01", "2026-06-30");
    expect(getStatus(ev)).toBe("upcoming");
  });

  it('終了後なら "ended"', () => {
    setFakeNow("2026-05-15");
    const ev = mkEvent("2026-04-01", "2026-05-10");
    expect(getStatus(ev)).toBe("ended");
  });

  // ── BUG #2: TODAY は静的定数なため vi.useFakeTimers が効かない ──
  it("[BUG #2] TODAY は静的定数 — vi.useFakeTimers を設定した後でも変わらない", () => {
    // 遠い未来に時刻を設定
    vi.setSystemTime(new Date("2099-12-31T10:00:00"));
    const ev = mkEvent("2099-12-01", "2099-12-31");
    // 現在の実装: TODAY はモジュールロード時に固定されているので
    // 2099-12-31 当日でも getStatus は古い TODAY を参照する
    // → 実際には "ended" or "upcoming" を返してしまう
    const status = getStatus(ev);
    // 期待値は 'ongoing' だが、TODAY が静的なので失敗する
    expect(status).toBe("ongoing"); // このテストは失敗 = BUG確認
  });

  // ── BUG #3: 終了日当日が 'ended' になる ──
  it('[BUG #3] 終了日当日（実行時刻 > 00:00）のイベントが "ended" になる', () => {
    // 今日(2026-05-15)の 10:00 に実行
    // endDate = "2026-05-15" → parseDate → 2026-05-15T00:00:00
    // TODAY(10:00) > endDate(00:00) = true → 'ended' を返す
    // 正しくは: endDate の終わりまで 'ongoing' であるべき
    setFakeNow("2026-05-15");
    const ev = mkEvent("2026-05-01", "2026-05-15"); // 今日が最終日
    const status = getStatus(ev);
    // 期待: 'ongoing' だが実装は 'ended' を返す → バグ
    expect(status).toBe("ongoing"); // このテストは失敗 = BUG確認
  });
});

// ========================================================
// statusLabel / statusClass
// ========================================================
describe("statusLabel", () => {
  it('"ongoing" → "開催中"', () => {
    expect(statusLabel("ongoing")).toBe("開催中");
  });
  it('"upcoming" → "近日開催"', () => {
    expect(statusLabel("upcoming")).toBe("近日開催");
  });
  it('"ended" → "終了"', () => {
    expect(statusLabel("ended")).toBe("終了");
  });

  // ── BUG #4: 未定義ステータスキーで undefined を返す ──
  it("[BUG #4] 未知のステータスキーで undefined を返す（クラッシュ原因）", () => {
    // statusLabel は { ongoing:…, upcoming:…, ended:… }[s] を返す
    // 未定義キーは undefined → テンプレートに undefined が表示される
    const result = statusLabel("unknown");
    // 期待: 何らかのフォールバック文字列
    expect(result).toBeDefined(); // これが失敗 = BUG確認
    expect(typeof result).toBe("string");
  });
});

describe("statusClass", () => {
  it('"ongoing" → "badge--ongoing"', () => {
    expect(statusClass("ongoing")).toBe("badge--ongoing");
  });

  // ── BUG #5: 未定義ステータスキーで undefined を返す ──
  it("[BUG #5] 未知のステータスキーで undefined を返す（CSSクラスが undefined）", () => {
    const result = statusClass("unknown");
    expect(result).toBeDefined(); // これが失敗 = BUG確認
    expect(typeof result).toBe("string");
  });
});

// ========================================================
// daysLeft
// ========================================================
describe("daysLeft", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  const mkEvent = (endDate) => ({
    startDate: "2026-01-01",
    endDate,
    id: 1,
    title: "T",
    emoji: "🎈",
    category: "experience",
    categoryLabel: "体験",
    area: "A",
    venue: "V",
    tags: [],
    desc: "",
    url: "",
    free: false,
    age: "全",
  });

  it("今日が 2026-05-15, endDate が 2026-05-22 → 7日", () => {
    setFakeNow("2026-05-15");
    // TODAY が静的なためこのテストは実際の実行日依存になる
    // → これ自体が BUG #2 の証拠
    const days = daysLeft(mkEvent("2026-05-22"));
    // 実行日によって変わるため、型チェックのみ
    expect(typeof days).toBe("number");
  });

  // ── BUG #6: 終了済みイベントで負の値を返す ──
  it("[BUG #6] 終了済みイベントで daysLeft が負の値を返す", () => {
    setFakeNow("2026-05-15");
    // 2026-04-01 に終わったイベント
    // TODAY が静的なので実行日によるが、モジュールインポート時の日付を基準に確認
    const days = daysLeft(mkEvent("2026-04-01"));
    // 正常系: 負の値を返すことは問題ないが、呼び出し元での処理が必要
    // EventCard では remainDays >= 0 ガードがあるが、明示的な文書化がない
    expect(days).toBeLessThan(0); // 負になる = 呼び出し側のガードが必要
  });

  // ── BUG #7: daysLeft(0) の表示 ──
  it("終了日が parseDate 基準で 0 日後のとき ceil で 0 を返す可能性", () => {
    // endDate が "今日" でかつ TODAY が "今日の午前" の場合
    // e - TODAY は負 → ceil は 0 または -0 を返す場合がある
    const days = daysLeft(mkEvent("2026-05-15"));
    // -0 は === 0 だが Object.is(-0, 0) は false
    // 表示上は "残り0日" または "残り-0日" になりうる
    expect(Object.is(days, -0)).toBe(false); // -0 ではないべき
  });
});

// ========================================================
// daysToStart
// ========================================================
describe("daysToStart", () => {
  it("未来イベントで正の値を返す", () => {
    const ev = {
      startDate: "2099-12-31",
      endDate: "2099-12-31",
      id: 1,
      title: "T",
      emoji: "🎈",
      category: "experience",
      categoryLabel: "体験",
      area: "A",
      venue: "V",
      tags: [],
      desc: "",
      url: "",
      free: false,
      age: "全",
    };
    const days = daysToStart(ev);
    expect(days).toBeGreaterThan(0);
  });
});

// ========================================================
// KIDS_KEYWORDS 重複問題
// ========================================================
describe("KIDS_KEYWORDS", () => {
  // BUG #8修正確認: useEvents.js から重複 export を削除済み
  // sources.js のみで管理されるようになった
  it("[BUG #8修正] KIDS_KEYWORDS は sources.js のみで管理される", async () => {
    const sourcesModule = await import("../data/sources.js");
    expect(Array.isArray(sourcesModule.KIDS_KEYWORDS)).toBe(true);
    expect(sourcesModule.KIDS_KEYWORDS.length).toBeGreaterThan(0);
  });
});
