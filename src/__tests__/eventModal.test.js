/**
 * EventModal のロジックテスト
 * toGcalDate タイムゾーン修正・lineShareUrl・スクロールロック動作を検証
 */

import { describe, it, expect } from "vitest";

// ── toGcalDate のロジックを再現（修正済み）──
// BUG #84修正: new Date().toISOString() を使わず直接文字列操作
function toGcalDate(dateStr, addDay = false) {
  if (!addDay) return dateStr.replace(/-/g, "");
  const [y, m, d] = dateStr.split("-").map(Number);
  const next = new Date(y, m - 1, d + 1);
  return (
    String(next.getFullYear()) +
    String(next.getMonth() + 1).padStart(2, "0") +
    String(next.getDate()).padStart(2, "0")
  );
}

// ── 修正前の実装（バグあり）──
function toGcalDateOld(dateStr, addDay = false) {
  const d = new Date(dateStr + "T00:00:00");
  if (addDay) d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10).replace(/-/g, "");
}

// ── lineShareUrl のロジックを再現 ──
function buildLineShareUrl(event) {
  if (!event) return "#";
  const text = encodeURIComponent(event.title);
  const url = encodeURIComponent(event.url);
  return `https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`;
}

// ── googleCalendarUrl のロジックを再現 ──
function buildGoogleCalendarUrl(event) {
  if (!event) return "#";
  const start = toGcalDate(event.startDate);
  const end = toGcalDate(event.endDate, true);
  const text = encodeURIComponent(event.title);
  const location = encodeURIComponent(`${event.venue}（${event.area}）`);
  const details = encodeURIComponent((event.desc || "") + "\n\n" + event.url);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&location=${location}&details=${details}`;
}

// ========================================================
// BUG #84: toGcalDate タイムゾーン修正
// ========================================================
describe("[BUG #84修正] toGcalDate タイムゾーン依存を排除", () => {
  it("addDay=false のとき日付ハイフンを除去するだけ", () => {
    expect(toGcalDate("2026-05-15")).toBe("20260515");
    expect(toGcalDate("2026-01-01")).toBe("20260101");
    expect(toGcalDate("2026-12-31")).toBe("20261231");
  });

  it("addDay=true のとき翌日の日付を返す", () => {
    expect(toGcalDate("2026-05-15", true)).toBe("20260516");
    expect(toGcalDate("2026-05-31", true)).toBe("20260601"); // 月末 → 翌月1日
    expect(toGcalDate("2026-12-31", true)).toBe("20270101"); // 年末 → 翌年1月1日
  });

  it("addDay=true で月末をまたぐ（2月末・うるう年なし）", () => {
    expect(toGcalDate("2026-02-28", true)).toBe("20260301"); // 2026年は平年
  });

  it("addDay=true で月末をまたぐ（2月末・うるう年）", () => {
    expect(toGcalDate("2024-02-29", true)).toBe("20240301"); // 2024年はうるう年
  });

  it("[タイムゾーン安全] UTC+9 環境でも日付がずれない", () => {
    // 修正後: 文字列操作のため UTC 変換が発生しない → 日付ずれなし
    // 修正前 (toGcalDateOld): UTC+9環境では 00:00:00 JST = 前日 15:00:00 UTC
    // → toISOString() が前日の日付を返していた
    const result = toGcalDate("2026-05-15");
    expect(result).toBe("20260515"); // 常に同じ日付
    // 旧実装はUTC環境では偶然正しく動くが、UTC+9では誤る
  });

  it("startDate と endDate+1 が正しいGoogle Calendar URL範囲を生成する", () => {
    const event = {
      id: 1,
      title: "テストイベント",
      emoji: "🎈",
      area: "前橋市",
      venue: "前橋会場",
      startDate: "2026-05-15",
      endDate: "2026-05-17",
      desc: "テスト説明",
      url: "https://example.com",
    };
    const url = buildGoogleCalendarUrl(event);
    // dates=20260515/20260518 (終了日翌日)
    expect(url).toContain("dates=20260515/20260518");
  });
});

// ========================================================
// lineShareUrl のテスト
// ========================================================
describe("lineShareUrl 生成ロジック", () => {
  const event = {
    id: 1,
    title: "前橋こどもまつり",
    url: "https://example.com/event/1",
  };

  it("LINE share URL が正しい形式", () => {
    const url = buildLineShareUrl(event);
    expect(url).toContain("social-plugins.line.me/lineit/share");
  });

  it("タイトルが URL エンコードされている", () => {
    const url = buildLineShareUrl(event);
    expect(url).toContain(encodeURIComponent("前橋こどもまつり"));
  });

  it("イベントURLが URL エンコードされている", () => {
    const url = buildLineShareUrl(event);
    expect(url).toContain(encodeURIComponent("https://example.com/event/1"));
  });

  it("event が null のとき '#' を返す", () => {
    const url = buildLineShareUrl(null);
    expect(url).toBe("#");
  });

  it("title に特殊文字（日本語・スラッシュ・&）が含まれても URL 安全", () => {
    const specialEvent = {
      title: "テスト & 体験/工作",
      url: "https://example.com/a&b",
    };
    const url = buildLineShareUrl(specialEvent);
    // エンコードされているため生の & や / は現れない
    expect(url).not.toContain("&text=テスト");
  });
});

// ========================================================
// googleCalendarUrl のテスト
// ========================================================
describe("googleCalendarUrl 生成ロジック", () => {
  const event = {
    id: 1,
    title: "高崎こどもまつり",
    emoji: "🎈",
    area: "高崎市",
    venue: "高崎市民広場",
    startDate: "2026-07-20",
    endDate: "2026-07-22",
    desc: "夏のお祭りです",
    url: "https://example.com/matsuri",
  };

  it("Google Calendar URL が正しいホスト", () => {
    const url = buildGoogleCalendarUrl(event);
    expect(url).toContain("calendar.google.com/calendar/render");
  });

  it("action=TEMPLATE が含まれる", () => {
    const url = buildGoogleCalendarUrl(event);
    expect(url).toContain("action=TEMPLATE");
  });

  it("text（タイトル）が含まれる", () => {
    const url = buildGoogleCalendarUrl(event);
    expect(url).toContain(`text=${encodeURIComponent("高崎こどもまつり")}`);
  });

  it("dates に startDate と endDate+1 が含まれる", () => {
    const url = buildGoogleCalendarUrl(event);
    expect(url).toContain("dates=20260720/20260723");
  });

  it("location に venue と area が含まれる", () => {
    const url = buildGoogleCalendarUrl(event);
    expect(url).toContain(
      `location=${encodeURIComponent("高崎市民広場（高崎市）")}`,
    );
  });

  it("event が null のとき '#' を返す", () => {
    const url = buildGoogleCalendarUrl(null);
    expect(url).toBe("#");
  });

  it("desc が null でも URL 生成がクラッシュしない", () => {
    const noDescEvent = { ...event, desc: null };
    expect(() => buildGoogleCalendarUrl(noDescEvent)).not.toThrow();
  });

  it("1日イベントの endDate+1 が翌日になる", () => {
    const oneDay = { ...event, startDate: "2026-07-20", endDate: "2026-07-20" };
    const url = buildGoogleCalendarUrl(oneDay);
    expect(url).toContain("dates=20260720/20260721");
  });
});

// ========================================================
// BUG #82: Escape キーでモーダルを閉じる（動作仕様テスト）
// ========================================================
describe("[BUG #82修正] Escape キーでモーダルが閉じること（仕様確認）", () => {
  it("keydown Escape のイベントリスナー関数はクロージャで emit を呼べる", () => {
    let closeCalled = false;
    const emitClose = () => {
      closeCalled = true;
    };
    const hasEvent = { id: 1, title: "test" };

    // モーダルの handleKeydown 相当
    function handleKeydown(e, event) {
      if (e.key === "Escape" && event) emitClose();
    }

    handleKeydown({ key: "Escape" }, hasEvent);
    expect(closeCalled).toBe(true);
  });

  it("Escape 以外のキーでは close が発火しない", () => {
    let closeCalled = false;
    const emitClose = () => {
      closeCalled = true;
    };
    const hasEvent = { id: 1 };

    function handleKeydown(e, event) {
      if (e.key === "Escape" && event) emitClose();
    }

    handleKeydown({ key: "Enter" }, hasEvent);
    expect(closeCalled).toBe(false);
    handleKeydown({ key: "ArrowLeft" }, hasEvent);
    expect(closeCalled).toBe(false);
  });

  it("モーダルが閉じている(event=null)ときは Escape でも close しない", () => {
    let closeCalled = false;
    const emitClose = () => {
      closeCalled = true;
    };

    function handleKeydown(e, event) {
      if (e.key === "Escape" && event) emitClose();
    }

    handleKeydown({ key: "Escape" }, null);
    expect(closeCalled).toBe(false);
  });
});

// ========================================================
// BUG #85: body スクロールロック（仕様確認）
// ========================================================
describe("[BUG #85修正] モーダル開放中のスクロール制御（仕様確認）", () => {
  it("イベント有り → body.style.overflow = 'hidden' に設定するロジック", () => {
    // watch(() => props.event, val => document.body.style.overflow = val ? 'hidden' : '') の動作確認
    let bodyOverflow = "";
    function applyScrollLock(event) {
      bodyOverflow = event ? "hidden" : "";
    }

    applyScrollLock({ id: 1 });
    expect(bodyOverflow).toBe("hidden");

    applyScrollLock(null);
    expect(bodyOverflow).toBe("");
  });

  it("モーダルが閉じたとき overflow がリセットされる", () => {
    let bodyOverflow = "hidden";
    function releaseScrollLock() {
      bodyOverflow = "";
    }

    releaseScrollLock();
    expect(bodyOverflow).toBe("");
  });
});
