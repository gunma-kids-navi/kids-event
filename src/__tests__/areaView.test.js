/**
 * AreaView のロジックテスト
 * AREA_COORDS と実データのエリア名一致・マップマーカー表示を検証
 */

import { describe, it, expect } from "vitest";
import { EVENTS } from "../data/events.js";
import { getStatus, parseDate } from "../composables/useEvents.js";

// 自治体番号順（総務省 地方公共団体コード準拠）
const MUNICIPALITY_ORDER = [
  "前橋市",
  "高崎市",
  "桐生市",
  "伊勢崎市",
  "太田市",
  "沼田市",
  "館林市",
  "渋川市",
  "藤岡市",
  "富岡市",
  "安中市",
  "みどり市",
  "榛東村",
  "吉岡町",
  "上野村",
  "神流町",
  "下仁田町",
  "南牧村",
  "甘楽町",
  "中之条町",
  "長野原町",
  "嬬恋村",
  "草津町",
  "高山村",
  "東吾妻町",
  "片品村",
  "川場村",
  "昭和村",
  "みなかみ町",
  "玉村町",
  "板倉町",
  "明和町",
  "千代田町",
  "大泉町",
  "邑楽町",
];
function sortByMunicipality(areas) {
  return [...areas].sort((a, b) => {
    const ai = MUNICIPALITY_ORDER.indexOf(a);
    const bi = MUNICIPALITY_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b, "ja");
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

// AreaView.vue の AREA_COORDS を再現
const AREA_COORDS = {
  前橋市: [36.3894, 139.0634],
  高崎市: [36.3227, 139.0032],
  桐生市: [36.4046, 139.3376],
  伊勢崎市: [36.3113, 139.1976],
  太田市: [36.2917, 139.3752],
  渋川市: [36.4894, 139.0024],
  富岡市: [36.2647, 138.8892],
  安中市: [36.3258, 138.9003],
  藤岡市: [36.2548, 139.0757],
  館林市: [36.2435, 139.54],
  玉村町: [36.2789, 139.0686],
  中之条町: [36.5877, 138.8554],
  みなかみ町: [36.6751, 138.997],
  上野村: [36.0462, 138.754],
  "群馬県（県全体）": [36.4807, 138.9878],
};

// EVENTS から実際のエリア一覧を取得（自治体コード順）
const actualAreas = sortByMunicipality([...new Set(EVENTS.map((e) => e.area))]);

// ─────────────────────────────────────────────
// BUG #44〜#47: AREA_COORDS のキーが実データのエリア名と不一致
// ─────────────────────────────────────────────
describe("[BUG #44〜#47] AreaView AREA_COORDS とイベントデータのエリア名不一致", () => {
  // BUG #44修正済み: イベントデータが「玉村町」に統一された
  it("[BUG #44修正済み] '佐波郡玉村町' のイベントが 0 件（'玉村町' に統一された）", () => {
    const countOld = EVENTS.filter((e) => e.area === "佐波郡玉村町").length;
    const countNew = EVENTS.filter((e) => e.area === "玉村町").length;
    // 旧形式（郡名付き）は 0 件になり、玉村町（郡名なし）に統一されたことを確認
    expect(countOld).toBe(0);
    expect(countNew).toBeGreaterThanOrEqual(0); // 玉村町のイベントが存在する可能性
  });

  // BUG #45: "みなかみ町" vs "利根郡みなかみ町"
  it("[BUG #45] '利根郡みなかみ町' は AREA_COORDS に存在しない", () => {
    const hasFullName = "利根郡みなかみ町" in AREA_COORDS;
    const count = EVENTS.filter((e) => e.area === "利根郡みなかみ町").length;
    expect(hasFullName).toBe(false);
    if (count > 0) {
      console.warn(
        `[BUG #45] "利根郡みなかみ町" の ${count} 件イベントに地図マーカーがない`,
      );
    }
  });

  // BUG #46: "上野村" vs "多野郡上野村"
  it("[BUG #46] '多野郡上野村' は AREA_COORDS に存在しない", () => {
    const hasFullName = "多野郡上野村" in AREA_COORDS;
    const count = EVENTS.filter((e) => e.area === "多野郡上野村").length;
    expect(hasFullName).toBe(false);
    if (count > 0) {
      console.warn(
        `[BUG #46] "多野郡上野村" の ${count} 件イベントに地図マーカーがない`,
      );
    }
  });

  // BUG #47: "群馬県（県全体）" vs "群馬"
  it("[BUG #47] '群馬' は AREA_COORDS に存在しない（'群馬県（県全体）' のキーと不一致）", () => {
    const hasShortName = "群馬" in AREA_COORDS;
    const count = EVENTS.filter((e) => e.area === "群馬").length;
    expect(hasShortName).toBe(false); // バグの証拠
    if (count > 0) {
      console.warn(
        `[BUG #47] "群馬" エリアの ${count} 件イベントに地図マーカーがない`,
      );
    }
  });

  it("AREA_COORDS にマッチしないエリアのイベントが存在する", () => {
    const unmapped = actualAreas.filter((a) => !(a in AREA_COORDS));
    const unmappedCount = unmapped.reduce(
      (sum, a) => sum + EVENTS.filter((e) => e.area === a).length,
      0,
    );
    // マップマーカーなしのイベントが 1 件以上存在することを証明
    expect(unmappedCount).toBeGreaterThan(0);
    console.warn(
      `[BUG #44〜#47] 地図マーカーなしのエリア: ${unmapped.join(", ")} (計 ${unmappedCount} 件)`,
    );
  });

  // it.fails(): バグが存在する間は「失敗すること」を期待 → バグ修正後に PASS に変更
  it.fails(
    "全エリアが AREA_COORDS にマッチすること（修正後に PASS すべき）",
    () => {
      const unmapped = actualAreas.filter((a) => !(a in AREA_COORDS));
      expect(
        unmapped,
        `AREA_COORDS に存在しないエリア: ${unmapped.join(", ")}`,
      ).toHaveLength(0);
    },
  );
});

// ─────────────────────────────────────────────
// AREA_COORDS の座標が群馬県の範囲内かチェック
// ─────────────────────────────────────────────
describe("AreaView AREA_COORDS 座標品質", () => {
  const GUNMA_LAT = [35.8, 37.1];
  const GUNMA_LNG = [138.2, 139.9];

  it("全座標が群馬県の緯度経度範囲内にある", () => {
    Object.entries(AREA_COORDS).forEach(([name, [lat, lng]]) => {
      expect(
        lat,
        `${name} の緯度 ${lat} が群馬県の範囲外`,
      ).toBeGreaterThanOrEqual(GUNMA_LAT[0]);
      expect(lat).toBeLessThanOrEqual(GUNMA_LAT[1]);
      expect(
        lng,
        `${name} の経度 ${lng} が群馬県の範囲外`,
      ).toBeGreaterThanOrEqual(GUNMA_LNG[0]);
      expect(lng).toBeLessThanOrEqual(GUNMA_LNG[1]);
    });
  });
});

// ─────────────────────────────────────────────
// AreaView の areaEvents ロジック
// ─────────────────────────────────────────────
describe("AreaView areaEvents", () => {
  function areaEvents(area) {
    return EVENTS.filter((e) => e.area === area).sort((a, b) => {
      const sa = getStatus(a),
        sb = getStatus(b);
      if (sa === "ended" && sb !== "ended") return 1;
      if (sa !== "ended" && sb === "ended") return -1;
      return parseDate(a.startDate) - parseDate(b.startDate);
    });
  }

  it("前橋市のイベントが取得できる", () => {
    const result = areaEvents("前橋市");
    expect(result.length).toBeGreaterThan(0);
    result.forEach((e) => expect(e.area).toBe("前橋市"));
  });

  it("存在しないエリアは空配列", () => {
    expect(areaEvents("存在しないエリア")).toHaveLength(0);
  });

  it("areaEvents は startDate 昇順にソートされる", () => {
    const events = areaEvents("前橋市");
    if (events.length < 2) return;
    const nonEnded = events.filter((e) => getStatus(e) !== "ended");
    for (let i = 1; i < nonEnded.length; i++) {
      expect(parseDate(nonEnded[i].startDate).getTime()).toBeGreaterThanOrEqual(
        parseDate(nonEnded[i - 1].startDate).getTime(),
      );
    }
  });

  it("終了済みイベントは末尾に来る", () => {
    const events = areaEvents("前橋市");
    const endedIndices = events
      .map((e, i) => (getStatus(e) === "ended" ? i : -1))
      .filter((i) => i !== -1);
    const nonEndedIndices = events
      .map((e, i) => (getStatus(e) !== "ended" ? i : -1))
      .filter((i) => i !== -1);
    if (endedIndices.length > 0 && nonEndedIndices.length > 0) {
      expect(Math.min(...endedIndices)).toBeGreaterThan(
        Math.max(...nonEndedIndices),
      );
    }
  });
});

// ─────────────────────────────────────────────
// AreaView areas 自治体コード順ソート
// ─────────────────────────────────────────────
describe("AreaView areas 自治体コード順ソート", () => {
  it("前橋市が高崎市より前に来る", () => {
    const sorted = sortByMunicipality(["高崎市", "前橋市"]);
    expect(sorted[0]).toBe("前橋市");
  });

  it("EVENTS 内に前橋市が存在する場合、actualAreas で 前橋市 が高崎市より前", () => {
    const hasMaebashi = EVENTS.some((e) => e.area === "前橋市");
    const hasTakasaki = EVENTS.some((e) => e.area === "高崎市");
    if (hasMaebashi && hasTakasaki) {
      const mi = actualAreas.indexOf("前橋市");
      const ti = actualAreas.indexOf("高崎市");
      expect(mi).toBeLessThan(ti);
    }
  });

  it("MUNICIPALITY_ORDER に含まれないエリアは末尾になる", () => {
    const sorted = sortByMunicipality(["未知エリア", "前橋市"]);
    expect(sorted[0]).toBe("前橋市");
    expect(sorted[1]).toBe("未知エリア");
  });
});

// ─────────────────────────────────────────────
// BUG #53: document.querySelector('.map-popup-link') の問題
// ─────────────────────────────────────────────
describe("[BUG #53] AreaView popup リンクのセレクター問題", () => {
  it("`.map-popup-link` クラスセレクターはページ内の最初の1要素しか取得しない", () => {
    // document.querySelector はページ内の最初の1要素を返す仕様
    // AreaView.vue の popupopen ハンドラーはこのクラスを使うため、
    // 2つ以上のポップアップが同時に開いているとリンクが誤動作する
    // このテストはロジックの問題をドキュメント化する

    // シミュレーション: popup A と popup B が同時に開いている場合
    // querySelector は常に DOM 上の最初を返す
    const mockLinks = [
      { className: "map-popup-link", area: "前橋市" },
      { className: "map-popup-link", area: "高崎市" },
    ];
    // querySelector の動作をシミュレート（最初の1件のみ）
    const found = mockLinks.find((l) => l.className === "map-popup-link");
    expect(found.area).toBe("前橋市"); // 常に前橋市のリンクが選ばれる
    // → 高崎市の popup からクリックしても前橋市にスクロールする
    console.warn(
      "[BUG #53] 複数 popup 同時展開時に scrollToArea が誤ったエリアにスクロールする可能性",
    );
  });
});
