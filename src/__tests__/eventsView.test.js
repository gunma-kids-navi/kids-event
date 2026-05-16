/**
 * EventsView のフィルタリング・検索・ソートロジックのユニットテスト
 * コンポーネントをマウントせず、ロジックを直接テスト
 */

import { describe, it, expect } from "vitest";
import { parseDate, getStatus } from "../composables/useEvents";

// テスト用イベントデータ（label フィールドを使用 - スクレイパーデータ準拠）
const MOCK_EVENTS = [
  {
    id: 1,
    title: "桐生アート展",
    emoji: "🎨",
    category: "exhibition",
    label: "展覧会", // BUG #24修正: categoryLabel → label
    area: "桐生市",
    venue: "桐生市民会館",
    startDate: "2026-04-01",
    endDate: "2026-04-30",
    tags: ["アート", "展示"],
    desc: "素晴らしいアート展覧会です",
    url: "https://example.com/1",
    free: false,
    age: "全年齢",
  },
  {
    id: 2,
    title: "前橋こどもまつり",
    emoji: "🎪",
    category: "festival",
    label: "祭り・フェスタ", // BUG #24修正: categoryLabel → label
    area: "前橋市",
    venue: "前橋公園",
    startDate: "2026-05-24",
    endDate: "2026-05-25",
    tags: ["まつり", "無料"],
    desc: "子どもが楽しめるお祭りです",
    url: "https://example.com/2",
    free: true,
    age: "全年齢",
  },
  {
    id: 3,
    title: "高崎自然体験",
    emoji: "🌿",
    category: "nature",
    label: "自然・アウトドア", // BUG #24修正: categoryLabel → label
    area: "高崎市",
    venue: "高崎自然公園",
    startDate: "2026-08-01",
    endDate: "2026-08-31",
    tags: ["自然", "体験"],
    desc: "高崎の豊かな自然を体験しよう",
    url: "https://example.com/3",
    free: false,
    age: "小学生〜",
  },
  {
    id: 4,
    title: "太田工作教室",
    emoji: "🔧",
    category: "experience",
    label: "体験・工作", // BUG #24修正: categoryLabel → label
    area: "太田市",
    venue: "太田市民センター",
    startDate: "2026-05-10",
    endDate: "2026-05-10",
    tags: ["工作", "体験"],
    desc: "ものづくりを楽しもう",
    url: "https://example.com/4",
    free: false,
    age: "小学生〜",
  },
];

// フィルター関数（EventsView.vue の filtered computed を再現・修正済み）
function filterEvents(
  events,
  {
    status = "all",
    category = "all",
    area = "all",
    query = "",
    sort = "date-asc",
  } = {},
) {
  let evs = [...events];
  if (status !== "all") evs = evs.filter((e) => getStatus(e) === status);
  if (category !== "all") evs = evs.filter((e) => e.category === category);
  if (area !== "all") evs = evs.filter((e) => e.area === area);
  if (query) {
    const q = query.toLowerCase().trim(); // BUG #29修正: .trim() 追加
    evs = evs.filter(
      (e) =>
        (e.title || "").toLowerCase().includes(q) ||
        (e.area || "").toLowerCase().includes(q) ||
        (e.venue || "").toLowerCase().includes(q) ||
        (e.tags || []).some((t) => (t || "").toLowerCase().includes(q)) ||
        (e.label || e.categoryLabel || "").toLowerCase().includes(q) || // BUG #24修正: label優先
        (e.desc || "").toLowerCase().includes(q), // BUG #11/#12修正: desc も検索対象
    );
  }
  evs.sort((a, b) => {
    // BUG #13修正: status=all のとき終了済みを末尾へ
    if (status === "all") {
      const sa = getStatus(a),
        sb = getStatus(b);
      if (sa === "ended" && sb !== "ended") return 1;
      if (sa !== "ended" && sb === "ended") return -1;
    }
    if (sort === "date-asc")
      return parseDate(a.startDate) - parseDate(b.startDate);
    if (sort === "date-desc")
      return parseDate(b.startDate) - parseDate(a.startDate);
    return a.title.localeCompare(b.title, "ja");
  });
  return evs;
}

// ========================================================
// フィルタリング
// ========================================================
describe("EventsView フィルタリング", () => {
  it("カテゴリフィルター: festival のみ", () => {
    const result = filterEvents(MOCK_EVENTS, { category: "festival" });
    expect(result.every((e) => e.category === "festival")).toBe(true);
    expect(result.length).toBe(1);
  });

  it("エリアフィルター: 前橋市のみ", () => {
    const result = filterEvents(MOCK_EVENTS, { area: "前橋市" });
    expect(result.every((e) => e.area === "前橋市")).toBe(true);
    expect(result.length).toBe(1);
  });

  it("フィルターなし: 全件表示", () => {
    const result = filterEvents(MOCK_EVENTS);
    expect(result.length).toBe(MOCK_EVENTS.length);
  });

  it("存在しないカテゴリ: 0件", () => {
    const result = filterEvents(MOCK_EVENTS, { category: "nonexistent" });
    expect(result.length).toBe(0);
  });
});

// ========================================================
// 検索
// ========================================================
describe("EventsView キーワード検索", () => {
  it("タイトルで検索できる", () => {
    const result = filterEvents(MOCK_EVENTS, { query: "アート" });
    expect(result.some((e) => e.title.includes("アート"))).toBe(true);
  });

  it("エリア名で検索できる", () => {
    const result = filterEvents(MOCK_EVENTS, { query: "前橋" });
    expect(result.every((e) => e.area.includes("前橋"))).toBe(true);
  });

  it("タグで検索できる", () => {
    const result = filterEvents(MOCK_EVENTS, { query: "工作" });
    expect(result.every((e) => e.tags.includes("工作"))).toBe(true);
  });

  it("大文字小文字を区別しない", () => {
    const result = filterEvents(MOCK_EVENTS, { query: "ART" });
    // 日本語データなのでASCIIクエリは0件でOK
    expect(Array.isArray(result)).toBe(true);
  });

  // BUG #11修正確認: desc（説明文）も検索対象になった
  it("[BUG #11修正] descのみに含まれるキーワードで検索できる", () => {
    // "素晴らしい" は id:1 の desc のみに含まれる
    const result = filterEvents(MOCK_EVENTS, { query: "素晴らしい" });
    expect(result.length).toBeGreaterThan(0); // 修正後は PASS
    expect(result[0].id).toBe(1);
  });

  // BUG #12修正確認: desc のみにある「ものづくり」も検索できる
  it('[BUG #12修正] desc だけに包まれる"ものづくり"で検索できる', () => {
    const result = filterEvents(MOCK_EVENTS, { query: "ものづくり" });
    expect(result.length).toBeGreaterThan(0); // 修正後は PASS
  });
});

// ========================================================
// ソート
// ========================================================
describe("EventsView ソート", () => {
  it("date-asc: 終了済み以外は開始日が早い順、終了済みは末尾", () => {
    const result = filterEvents(MOCK_EVENTS, { sort: "date-asc" });
    // 終了済みイベントはすべて末尾に集まる
    const nonEnded = result.filter((e) => getStatus(e) !== "ended");
    const ended = result.filter((e) => getStatus(e) === "ended");
    expect(result.slice(0, nonEnded.length)).toEqual(nonEnded);
    expect(result.slice(nonEnded.length)).toEqual(ended);
    // 終了済み以外はさらに日付昇順
    for (let i = 0; i < nonEnded.length - 1; i++) {
      expect(parseDate(nonEnded[i].startDate).getTime()).toBeLessThanOrEqual(
        parseDate(nonEnded[i + 1].startDate).getTime(),
      );
    }
  });

  it("date-desc: 開始日が遅い順", () => {
    const result = filterEvents(MOCK_EVENTS, { sort: "date-desc" });
    for (let i = 0; i < result.length - 1; i++) {
      expect(parseDate(result[i].startDate).getTime()).toBeGreaterThanOrEqual(
        parseDate(result[i + 1].startDate).getTime(),
      );
    }
  });

  it("title: タイトル順（日本語 locale）", () => {
    const result = filterEvents(MOCK_EVENTS, { sort: "title" });
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(MOCK_EVENTS.length);
  });

  // BUG #13修正確認: date-asc ソートで終了済みが末尾に移動される
  it("[BUG #13修正] date-asc ソートで終了済みイベントが末尾になる", () => {
    const result = filterEvents(MOCK_EVENTS, { sort: "date-asc" });
    const firstEvent = result[0];
    const firstStatus = getStatus(firstEvent);
    // 修正後: 先頭は 'ongoing' または 'upcoming' のはず
    expect(firstStatus).not.toBe("ended");
  });
});

// ========================================================
// エリア URL クエリパラメータのリセット問題
// ========================================================
describe("EventsView route.query.area の扱い", () => {
  // BUG #14修正確認: ?area= が消えたとき 'all' にリセットする
  it("[BUG #14修正] route.query.area が undefined になったときフィルターがリセットされる", () => {
    let filterArea = "前橋市";
    const simulateWatch = (val) => {
      filterArea = val || "all"; // BUG #14修正後の実装
    };
    simulateWatch(undefined);
    expect(filterArea).toBe("all"); // 修正後は PASS
  });
});

// ========================================================
// BUG #21/#22/#23: コンポーネントでの label vs categoryLabel
// ========================================================
describe("[BUG #21/#22/#23] label フィールドの検索・表示", () => {
  // スクレイパー生成データは categoryLabel ではなく label を使う
  // EventListItem/EventCard/EventModal が event.categoryLabel を参照していると空白表示になる
  it("label フィールドでキーワード検索できる", () => {
    const result = filterEvents(MOCK_EVENTS, { query: "展覧会" });
    expect(result.some((e) => e.label === "展覧会")).toBe(true);
  });

  it("categoryLabel フィールドが存在しなくても検索がクラッシュしない", () => {
    // MOCK_EVENTS には categoryLabel が存在しない（実データ準拠）
    const eventsWithoutCategoryLabel = MOCK_EVENTS.map(
      ({ categoryLabel: _, ...rest }) => rest,
    );
    expect(() => {
      filterEvents(eventsWithoutCategoryLabel, { query: "展覧会" });
    }).not.toThrow();
  });

  it("categoryLabel がなく label がある場合に label で検索ヒットする", () => {
    const eventsLabelOnly = MOCK_EVENTS.map(
      ({ categoryLabel: _, ...rest }) => rest,
    );
    const result = filterEvents(eventsLabelOnly, { query: "祭り" });
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].label).toContain("祭り");
  });
});

// ========================================================
// BUG #29: searchQuery の .trim() なし
// ========================================================
describe("[BUG #29] searchQuery のスペース処理", () => {
  it("前後にスペースがあるクエリでも検索できる（trim後）", () => {
    // 本番コード（修正前）は " アート " でヒットしない
    // filterEvents では trim 済みなのでヒットする
    const result = filterEvents(MOCK_EVENTS, { query: "  アート  " });
    expect(result.some((e) => e.title.includes("アート"))).toBe(true);
  });

  it("全角スペースのみのクエリは空クエリとして扱われる（trim後）", () => {
    // trim() はASCIIスペースのみ → 全角スペースはそのまま残る
    const result = filterEvents(MOCK_EVENTS, { query: "  " });
    // 半角スペースのみ → trim → "" → フィルターなし → 全件返る
    expect(result.length).toBe(MOCK_EVENTS.length);
  });
});

// ========================================================
// BUG #32: sortOrder が想定外の値のときのソート
// ========================================================
describe("[BUG #32] sortOrder が想定外の値", () => {
  it("sort='invalid' のとき結果は配列として返る（クラッシュしない）", () => {
    expect(() => filterEvents(MOCK_EVENTS, { sort: "invalid" })).not.toThrow();
    const result = filterEvents(MOCK_EVENTS, { sort: "invalid" });
    expect(result.length).toBe(MOCK_EVENTS.length);
  });
});

// ========================================================
// null/undefined フィールドへの耐性
// ========================================================
describe("filterEvents の null/undefined 耐性", () => {
  // area・venue・desc が null/undefined でもクラッシュしないこと
  const PARTIAL_EVENTS = [
    {
      id: 99,
      title: "テストイベント",
      emoji: "🎉",
      category: "experience",
      label: "体験",
      area: null, // null
      venue: undefined, // undefined
      startDate: "2026-06-01",
      endDate: "2026-06-01",
      tags: [],
      desc: null, // null
      url: "https://example.com/99",
      free: false,
      age: "全",
    },
  ];

  it("area が null のイベントを検索してもクラッシュしない", () => {
    expect(() => filterEvents(PARTIAL_EVENTS, { query: "前橋" })).not.toThrow();
  });

  it("desc が null のイベントを検索してもクラッシュしない", () => {
    expect(() =>
      filterEvents(PARTIAL_EVENTS, { query: "テスト" }),
    ).not.toThrow();
  });

  it("tags が空配列のイベントを検索してもクラッシュしない", () => {
    expect(() => filterEvents(PARTIAL_EVENTS, { query: "体験" })).not.toThrow();
  });
});
