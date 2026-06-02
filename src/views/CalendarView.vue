<template>
  <div class="page-content">
    <div class="container">
      <div class="calendar-nav">
        <button
          class="btn btn-outline"
          id="cal-prev"
          @click="prevMonth"
          :disabled="isAtMinMonth"
        >
          ‹ 前月
        </button>
        <h2 class="cal-month-title" id="cal-title">
          {{ calYear }}年 {{ calMonth + 1 }}月
        </h2>
        <button
          class="btn btn-outline"
          id="cal-next"
          @click="nextMonth"
          :disabled="isAtMaxMonth"
        >
          次月 ›
        </button>
      </div>

      <div class="calendar-grid" id="calendar-grid">
        <div
          v-for="d in ['日', '月', '火', '水', '木', '金', '土']"
          :key="d"
          class="cal-day-header"
        >
          {{ d }}
        </div>
        <div
          v-for="_ in firstDay"
          :key="'empty-' + _"
          class="cal-day cal-day--empty"
        ></div>
        <div
          v-for="d in daysInMonth"
          :key="d"
          class="cal-day"
          :class="{
            'cal-day--sun': dayOfWeek(d) === 0,
            'cal-day--sat': dayOfWeek(d) === 6,
            'cal-day--holiday': isHoliday(calYear, calMonth, d),
            'cal-day--today': isToday(d),
            'cal-day--selected': selectedDay === d,
            'cal-day--has-events': eventsOnDay(d).length > 0,
          }"
          @click="toggleDay(d)"
        >
          <span v-if="isToday(d)" class="cal-today-dot">{{ d }}</span>
          <span v-else class="cal-date">{{ d }}</span>
          <span
            v-for="ev in eventsOnDay(d).slice(0, 2)"
            :key="ev.id"
            class="cal-event-dot"
            :class="`cal-event-dot--${getStatus(ev)}`"
            @click.stop="openModal(ev)"
            >{{ ev.emoji }} {{ ev.title.slice(0, 8) }}…</span
          >
          <span
            v-if="eventsOnDay(d).length > 2"
            style="font-size: 0.65rem; color: var(--text-muted)"
          >
            +{{ eventsOnDay(d).length - 2 }}
          </span>
        </div>
      </div>

      <!-- Monthly list -->
      <div class="calendar-events">
        <!-- エリア絞り込み -->
        <div v-if="areaOptions.length > 1" class="cal-area-filter">
          <label class="filter-label">市町村</label>
          <div class="filter-chips">
            <button
              class="chip"
              :class="{ active: filterArea === 'all' }"
              @click="filterArea = 'all'"
            >
              すべて
            </button>
            <button
              v-for="area in areaOptions"
              :key="area"
              class="chip"
              :class="{ active: filterArea === area }"
              @click="filterArea = area"
            >
              {{ area }}
            </button>
          </div>
        </div>

        <div class="cal-events-header">
          <h3 class="cal-events-title" id="cal-events-title">
            <template v-if="selectedDay">
              {{ calYear }}年{{ calMonth + 1 }}月{{
                selectedDay
              }}日のイベント（{{ displayEvents.length }}件）
            </template>
            <template v-else>
              {{ calYear }}年{{ calMonth + 1 }}月のイベント（{{
                displayEvents.length
              }}件）
            </template>
          </h3>
          <button
            v-if="selectedDay"
            class="cal-clear-btn"
            @click="selectedDay = null"
          >
            × 絞り込み解除
          </button>
        </div>
        <div id="cal-events-list">
          <template v-if="displayEvents.length">
            <div class="events-grid">
              <EventCard
                v-for="ev in displayEvents"
                :key="ev.id"
                :event="ev"
                @open-modal="openModal(ev)"
              />
            </div>
          </template>
          <p v-else style="color: var(--text-muted); padding: 1rem 0">
            {{
              selectedDay
                ? `${calMonth + 1}月${selectedDay}日はイベントがありません`
                : "この月のイベントはありません"
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";
import { EVENTS } from "../data/events";
import { isHoliday } from "../data/holidays";
import {
  TODAY,
  parseDate,
  formatDateRange,
  getStatus,
  statusLabel,
  statusClass,
} from "../composables/useEvents";
import EventCard from "../components/EventCard.vue";

const openModal = inject("openModal");

const calYear = ref(TODAY.getFullYear());
const calMonth = ref(TODAY.getMonth());
const selectedDay = ref(null); // null = 選択なし、数値 = 選択した日
const filterArea = ref("all");

const firstDay = computed(() =>
  new Date(calYear.value, calMonth.value, 1).getDay(),
);
const daysInMonth = computed(() =>
  new Date(calYear.value, calMonth.value + 1, 0).getDate(),
);

const monthEvents = computed(() => {
  const mStart = new Date(calYear.value, calMonth.value, 1);
  const mEnd = new Date(calYear.value, calMonth.value + 1, 0);
  return EVENTS.filter((ev) => {
    const s = parseDate(ev.startDate),
      e = parseDate(ev.endDate);
    return s <= mEnd && e >= mStart;
    // BUG #15修正: startDate 昇順にソート
  }).sort((a, b) => parseDate(a.startDate) - parseDate(b.startDate));
});

// 自治体コード順
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

// 月内イベントに存在するエリア一覧（自治体コード順）
const areaOptions = computed(() => {
  const base = selectedDay.value
    ? eventsOnDay(selectedDay.value)
    : monthEvents.value;
  const unique = [...new Set(base.map((e) => e.area))];
  return unique.sort((a, b) => {
    const ai = MUNICIPALITY_ORDER.indexOf(a);
    const bi = MUNICIPALITY_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b, "ja");
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
});

// 選択日があればその日のイベントのみ、なければ月全体。さらにエリアで絞り込み
const displayEvents = computed(() => {
  const base = selectedDay.value
    ? eventsOnDay(selectedDay.value)
    : monthEvents.value;
  if (filterArea.value === "all") return base;
  return base.filter((ev) => ev.area === filterArea.value);
});

function dayOfWeek(d) {
  return new Date(calYear.value, calMonth.value, d).getDay();
}
function isToday(d) {
  // BUG #2関連修正: 静的 TODAY ではなく毎回 new Date() で比較
  return (
    new Date(calYear.value, calMonth.value, d).toDateString() ===
    new Date().toDateString()
  );
}
function eventsOnDay(d) {
  const date = new Date(calYear.value, calMonth.value, d);
  return monthEvents.value.filter((ev) => {
    const s = parseDate(ev.startDate),
      e = parseDate(ev.endDate);
    return s <= date && e >= date;
  });
}
function toggleDay(d) {
  // イベントがない日はクリックできない
  if (eventsOnDay(d).length === 0) return;
  selectedDay.value = selectedDay.value === d ? null : d;
  filterArea.value = "all"; // 日付変更時はエリア選択をリセット
  // 絞り込み後はリストまでスクロール
  if (selectedDay.value !== null) {
    setTimeout(() => {
      document
        .getElementById("cal-events-list")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
}

function prevMonth() {
  calMonth.value--;
  if (calMonth.value < 0) {
    calMonth.value = 11;
    calYear.value--;
  }
  selectedDay.value = null;
  filterArea.value = "all"; // 月変更時はエリア選択もリセット
}
// 2ヶ月前を下限とする
const MIN_DATE = new Date(TODAY);
MIN_DATE.setMonth(MIN_DATE.getMonth() - 2);
const minCalYear = MIN_DATE.getFullYear();
const minCalMonth = MIN_DATE.getMonth();

const isAtMinMonth = computed(
  () =>
    calYear.value < minCalYear ||
    (calYear.value === minCalYear && calMonth.value <= minCalMonth),
);

// 6ヶ月先の年月を上限とする
const MAX_DATE = new Date(TODAY);
MAX_DATE.setMonth(MAX_DATE.getMonth() + 6);
const maxCalYear = MAX_DATE.getFullYear();
const maxCalMonth = MAX_DATE.getMonth();

const isAtMaxMonth = computed(
  () =>
    calYear.value > maxCalYear ||
    (calYear.value === maxCalYear && calMonth.value >= maxCalMonth),
);

function nextMonth() {
  if (isAtMaxMonth.value) return;
  calMonth.value++;
  if (calMonth.value > 11) {
    calMonth.value = 0;
    calYear.value++;
  }
  selectedDay.value = null;
  filterArea.value = "all"; // 月変更時はエリア選択もリセット
}
</script>
