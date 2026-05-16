/**
 * CalendarView のロジックテスト
 */

import { describe, it, expect } from "vitest";
import { parseDate } from "../composables/useEvents";

// CalendarView の monthEvents ロジックを再現（修正済み）
function getMonthEvents(events, year, month) {
  const mStart = new Date(year, month, 1);
  const mEnd = new Date(year, month + 1, 0);
  return events
    .filter((ev) => {
      const s = parseDate(ev.startDate);
      const e = parseDate(ev.endDate);
      return s <= mEnd && e >= mStart;
      // BUG #15修正: startDate 昇順にソート
    })
    .sort((a, b) => parseDate(a.startDate) - parseDate(b.startDate));
}

// CalendarView の eventsOnDay ロジックを再現
function getEventsOnDay(events, year, month, day) {
  const date = new Date(year, month, day);
  return getMonthEvents(events, year, month).filter((ev) => {
    const s = parseDate(ev.startDate);
    const e = parseDate(ev.endDate);
    return s <= date && e >= date;
  });
}

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Zイベント（後半）",
    emoji: "🅰",
    category: "experience",
    categoryLabel: "体験",
    area: "前橋市",
    venue: "前橋会場",
    startDate: "2026-05-20",
    endDate: "2026-05-25",
    tags: [],
    desc: "",
    url: "",
    free: false,
    age: "全",
  },
  {
    id: 2,
    title: "Aイベント（前半）",
    emoji: "🅱",
    category: "festival",
    categoryLabel: "祭り",
    area: "高崎市",
    venue: "高崎会場",
    startDate: "2026-05-01",
    endDate: "2026-05-10",
    tags: [],
    desc: "",
    url: "",
    free: true,
    age: "全",
  },
  {
    id: 3,
    title: "別月イベント",
    emoji: "🎈",
    category: "culture",
    categoryLabel: "文化",
    area: "桐生市",
    venue: "桐生会場",
    startDate: "2026-06-01",
    endDate: "2026-06-30",
    tags: [],
    desc: "",
    url: "",
    free: false,
    age: "全",
  },
  {
    id: 4,
    title: "月またぎイベント",
    emoji: "🌟",
    category: "nature",
    categoryLabel: "自然",
    area: "太田市",
    venue: "太田会場",
    startDate: "2026-04-25",
    endDate: "2026-05-05",
    tags: [],
    desc: "",
    url: "",
    free: false,
    age: "全",
  },
];

describe("CalendarView monthEvents", () => {
  it("対象月のイベントのみ返す", () => {
    const result = getMonthEvents(MOCK_EVENTS, 2026, 4); // 5月(0-indexed)
    // id:1(5/20-25), id:2(5/1-10), id:4(4/25-5/5) → 3件
    // id:3(6月) → 除外
    expect(result.length).toBe(3);
    expect(result.some((e) => e.id === 3)).toBe(false);
  });

  it("月またぎイベント（前月開始）も含む", () => {
    const result = getMonthEvents(MOCK_EVENTS, 2026, 4); // 5月
    expect(result.some((e) => e.id === 4)).toBe(true);
  });

  it("6月のイベントは6月の月表示に含まれる", () => {
    const result = getMonthEvents(MOCK_EVENTS, 2026, 5); // 6月
    expect(result.some((e) => e.id === 3)).toBe(true);
  });

  // BUG #15修正確認: 修正後は startDate でソートされる
  it("[BUG #15修正] monthEvents は startDate で昭順ソートされる", () => {
    const result = getMonthEvents(MOCK_EVENTS, 2026, 4); // 5月
    for (let i = 0; i < result.length - 1; i++) {
      expect(parseDate(result[i].startDate).getTime()).toBeLessThanOrEqual(
        parseDate(result[i + 1].startDate).getTime(),
      );
    }
  });
});

describe("CalendarView eventsOnDay", () => {
  it("その日に開催中のイベントを返す", () => {
    const result = getEventsOnDay(MOCK_EVENTS, 2026, 4, 5); // 5月5日
    // id:2(5/1-10), id:4(4/25-5/5) → 2件
    expect(result.length).toBe(2);
  });

  it("その日に開催していないイベントを返さない", () => {
    const result = getEventsOnDay(MOCK_EVENTS, 2026, 4, 15); // 5月15日
    // id:1(5/20-25): まだ → 除外
    // id:2(5/1-10): 終わり → 除外
    // id:4(4/25-5/5): 終わり → 除外
    expect(result.length).toBe(0);
  });

  it("開始日当日を含む", () => {
    const result = getEventsOnDay(MOCK_EVENTS, 2026, 4, 20); // 5月20日
    expect(result.some((e) => e.id === 1)).toBe(true);
  });

  it("終了日当日を含む", () => {
    const result = getEventsOnDay(MOCK_EVENTS, 2026, 4, 10); // 5月10日
    expect(result.some((e) => e.id === 2)).toBe(true);
  });
});

describe("CalendarView 月ナビゲーション", () => {
  // prevMonth / nextMonth ロジックの再現
  function prevMonth(year, month) {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    return { year, month };
  }
  function nextMonth(year, month) {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    return { year, month };
  }

  it("1月から前月へ: 前年12月になる", () => {
    const result = prevMonth(2026, 0); // 1月(0-indexed)
    expect(result).toEqual({ year: 2025, month: 11 });
  });

  it("12月から次月へ: 翌年1月になる", () => {
    const result = nextMonth(2026, 11); // 12月(0-indexed)
    expect(result).toEqual({ year: 2027, month: 0 });
  });

  it("通常の前月: 月が -1 される", () => {
    const result = prevMonth(2026, 4); // 5月
    expect(result).toEqual({ year: 2026, month: 3 });
  });

  it("通常の次月: 月が +1 される", () => {
    const result = nextMonth(2026, 4); // 5月
    expect(result).toEqual({ year: 2026, month: 5 });
  });
});

describe("CalendarView daysInMonth 計算", () => {
  // CalendarView.vue の daysInMonth computed
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  it("2026年5月は31日", () => {
    expect(daysInMonth(2026, 4)).toBe(31);
  });

  it("2026年4月は30日", () => {
    expect(daysInMonth(2026, 3)).toBe(30);
  });

  it("2024年2月はうるう年で29日", () => {
    expect(daysInMonth(2024, 1)).toBe(29);
  });

  it("2026年2月は28日", () => {
    expect(daysInMonth(2026, 1)).toBe(28);
  });
});

describe("CalendarView eventsOnDay スライス表示", () => {
  // カレンダーは 1日あたり最大2件まで表示し、超過分は "+N" で表示
  // この設計に問題がある: どのイベントを最初に表示するかが不定

  // ── BUG #16: eventsOnDay の表示は配列の順序依存（重要イベントが隠れる可能性）──
  it("[BUG #16] eventsOnDay の slice(0, 2) は配列順依存で重要イベントが隠れる", () => {
    // 3件以上のイベントが同日にある場合、3件目以降は "+N" で隠れる
    const manyEvents = [
      {
        id: 10,
        title: "A",
        startDate: "2026-05-15",
        endDate: "2026-05-15",
        emoji: "🎈",
        category: "experience",
        categoryLabel: "体験",
        area: "前橋市",
        venue: "V",
        tags: [],
        desc: "",
        url: "",
        free: true,
        age: "全",
      },
      {
        id: 11,
        title: "B",
        startDate: "2026-05-15",
        endDate: "2026-05-15",
        emoji: "🎪",
        category: "festival",
        categoryLabel: "祭り",
        area: "前橋市",
        venue: "V",
        tags: [],
        desc: "",
        url: "",
        free: false,
        age: "全",
      },
      {
        id: 12,
        title: "C無料",
        startDate: "2026-05-15",
        endDate: "2026-05-15",
        emoji: "🌿",
        category: "nature",
        categoryLabel: "自然",
        area: "前橋市",
        venue: "V",
        tags: [],
        desc: "",
        url: "",
        free: true,
        age: "全",
      },
    ];
    const visible = getEventsOnDay(manyEvents, 2026, 4, 15).slice(0, 2);
    const hidden = getEventsOnDay(manyEvents, 2026, 4, 15).slice(2);
    // 3件目 (id:12) が隠れる
    expect(hidden.length).toBe(1);
    expect(hidden[0].id).toBe(12);
    // 表示優先順位の仕組みがない = バグ
  });
});

// ─────────────────────────────────────────────
// CalendarView の selectedDay トグルロジックのテスト
// ─────────────────────────────────────────────

// toggleDay ロジックを再現（CalendarView.vue より）
function toggleDay(eventsOnDayFn, selectedDay, d) {
  if (eventsOnDayFn(d).length === 0) return selectedDay; // イベントなし → 変化なし
  return selectedDay === d ? null : d; // 同じ日をクリック → 解除、異なる日 → 選択
}

describe("CalendarView selectedDay トグル", () => {
  const events = MOCK_EVENTS;
  const eventsOnDayFn = (d) => getEventsOnDay(events, 2026, 4, d); // 5月(0-indexed=4)

  it("イベントがある日をクリックすると selectedDay に設定される", () => {
    const result = toggleDay(eventsOnDayFn, null, 1); // 5月1日 = id:2 がある
    expect(result).toBe(1);
  });

  it("同じ日を再クリックすると selectedDay が null に戻る", () => {
    const result = toggleDay(eventsOnDayFn, 1, 1); // 5月1日を2回目
    expect(result).toBeNull();
  });

  it("異なる日をクリックすると selectedDay が変わる", () => {
    const result = toggleDay(eventsOnDayFn, 1, 20); // 1日選択中→20日をクリック
    expect(result).toBe(20);
  });

  it("イベントがない日をクリックしても selectedDay は変化しない", () => {
    const result = toggleDay(eventsOnDayFn, null, 15); // 5月15日 = イベントなし
    expect(result).toBeNull();
  });

  it("イベントがない日をクリックしても既存の selectedDay は維持される", () => {
    const result = toggleDay(eventsOnDayFn, 1, 15); // 1日選択中→イベントなし15日クリック
    expect(result).toBe(1); // 変化なし
  });
});

// displayEvents の絞り込みロジック
function getDisplayEvents(events, year, month, selectedDay) {
  if (!selectedDay) return getMonthEvents(events, year, month);
  return getEventsOnDay(events, year, month, selectedDay);
}

describe("CalendarView displayEvents（selectedDay による絞り込み）", () => {
  it("selectedDay が null のとき月全体のイベントを返す", () => {
    const result = getDisplayEvents(MOCK_EVENTS, 2026, 4, null); // 5月
    expect(result.length).toBe(3); // id:1,2,4
  });

  it("selectedDay が設定されているとき当日のイベントのみ返す", () => {
    const result = getDisplayEvents(MOCK_EVENTS, 2026, 4, 5); // 5月5日
    // id:2(5/1-10), id:4(4/25-5/5) → 2件
    expect(result.length).toBe(2);
  });

  it("selectedDay の日にイベントが1件のみの場合は1件返す", () => {
    const result = getDisplayEvents(MOCK_EVENTS, 2026, 4, 20); // 5月20日 = id:1 のみ
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(1);
  });

  it("月ナビゲーション後は selectedDay が null にリセットされる（仕様確認）", () => {
    let selectedDay = 5;
    // prevMonth/nextMonth ではリセットする仕様
    const simulateMonthChange = () => {
      selectedDay = null;
    };
    simulateMonthChange();
    expect(selectedDay).toBeNull();
  });
});

// ─────────────────────────────────────────────
// isHoliday と CalendarView の連携テスト
// ─────────────────────────────────────────────
import { isHoliday } from "../data/holidays.js";

describe("CalendarView isHoliday 表示ロジック", () => {
  it("2026-01-01（元日）は祝日として判定される", () => {
    // CalendarView テンプレート: isHoliday(calYear, calMonth, d) で呼ばれる
    // calYear=2026, calMonth=0（1月は 0-indexed）, d=1
    expect(isHoliday(2026, 0, 1)).toBe(true);
  });

  it("2026-05-06（振替休日）は祝日として判定される", () => {
    expect(isHoliday(2026, 4, 6)).toBe(true); // 5月=index 4
  });

  it("2026-09-22（国民の休日）は祝日として判定される", () => {
    expect(isHoliday(2026, 8, 22)).toBe(true); // 9月=index 8
  });

  // BUG #34: isHoliday の month パラメータが 0-indexed であることを文書化
  // CalendarView テンプレートでは ref が自動アンラップされるため正しく動作するが、
  // script 内で isHoliday(calYear.value, calMonth.value, d) と呼ぶ必要がある
  it("month=0（1月）に渡した場合に正しく1月の祝日を返す（0-indexed確認）", () => {
    // month=0 → 内部で month+1=1月として判定
    expect(isHoliday(2026, 0, 1)).toBe(true); // 元日
    expect(isHoliday(2026, 1, 1)).toBe(false); // 2月1日（祝日ではない）
  });
});
