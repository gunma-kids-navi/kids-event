<template>
  <div class="page-content">
    <div class="container">
      <!-- Filters -->
      <div class="filters">
        <div class="filter-group">
          <label class="filter-label">ステータス</label>
          <div class="filter-chips" id="filter-status">
            <button
              v-for="opt in statusOptions"
              :key="opt.value"
              class="chip"
              :class="{ active: filterStatus === opt.value }"
              @click="filterStatus = opt.value"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>
        <div class="filter-group">
          <label class="filter-label">カテゴリ</label>
          <div class="filter-chips">
            <button
              v-for="opt in categoryOptions"
              :key="opt.value"
              class="chip"
              :class="{ active: filterCategory === opt.value }"
              @click="filterCategory = opt.value"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>
        <div class="filter-group">
          <label class="filter-label">情報源</label>
          <div class="filter-chips">
            <button
              v-for="src in SOURCES"
              :key="src.name"
              class="chip"
              :class="{ active: filterSources.includes(src.name) }"
              @click="toggleSource(src.name)"
            >
              {{ src.name }}
            </button>
          </div>
        </div>
        <div class="filter-group">
          <label class="filter-label">エリア</label>
          <div class="filter-chips">
            <button
              class="chip"
              :class="{ active: filterArea === 'all' }"
              @click="filterArea = 'all'"
            >
              すべて
            </button>
            <button
              v-for="area in areas"
              :key="area"
              class="chip"
              :class="{ active: filterArea === area }"
              @click="filterArea = area"
            >
              {{ area }}
            </button>
          </div>
        </div>
        <div class="filter-group filter-group--search">
          <input
            v-model="searchQuery"
            class="search-input"
            id="search-input"
            type="search"
            placeholder="🔍 キーワード検索..."
          />
          <select v-model="sortOrder" class="sort-select" id="sort-select">
            <option value="date-asc">日付が早い順</option>
            <option value="date-desc">日付が遅い順</option>
            <option value="title">タイトル順</option>
          </select>
        </div>
      </div>

      <!-- Results -->
      <div class="results-bar">
        <span id="results-count">{{ filtered.length }}件のイベント</span>
      </div>
      <div class="events-list" id="events-list">
        <template v-if="filtered.length">
          <EventListItem
            v-for="ev in filtered"
            :key="ev.id"
            :event="ev"
            @open-modal="openModal(ev)"
          />
        </template>
        <div v-else class="empty-state">
          <p class="empty-icon">🔍</p>
          <p class="empty-title">条件に合うイベントが見つかりません</p>
          <p class="empty-desc">フィルターを変更してみてください</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { EVENTS } from "../data/events";
import { SOURCES } from "../data/sources";
import { getStatus, parseDate } from "../composables/useEvents";
import EventListItem from "../components/EventListItem.vue";

const route = useRoute();
const openModal = inject("openModal");

const filterStatus = ref("all");
const filterCategory = ref("all");
const filterArea = ref("all");
const filterSources = ref([]);
const searchQuery = ref("");
const sortOrder = ref("date-asc");

const statusOptions = [
  { value: "all", label: "すべて" },
  { value: "ongoing", label: "開催中" },
  { value: "upcoming", label: "近日開催" },
  { value: "ended", label: "終了" },
];
const categoryOptions = [
  { value: "all", label: "すべて" },
  { value: "experience", label: "体験・工作" },
  { value: "exhibition", label: "展覧会" },
  { value: "nature", label: "自然・アウトドア" },
  { value: "culture", label: "文化・学習" },
  { value: "festival", label: "祭り・フェスタ" },
];
// 自治体番号順（総務省 地方公共団体コード準拠）
const MUNICIPALITY_ORDER = [
  // 市（10201〜10212）
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
  // 北群馬郡（10301〜）
  "榛東村",
  "吉岡町",
  // 多野郡（10421〜）
  "上野村",
  "神流町",
  // 甘楽郡（10521〜）
  "下仁田町",
  "南牧村",
  "甘楽町",
  // 吾妻郡（10541〜）
  "中之条町",
  "長野原町",
  "嬬恋村",
  "草津町",
  "高山村",
  "東吾妻町",
  // 利根郡（10561〜）
  "片品村",
  "川場村",
  "昭和村",
  "みなかみ町",
  // 佐波郡（10601〜）
  "玉村町",
  // 邑楽郡（10681〜）
  "板倉町",
  "明和町",
  "千代田町",
  "大泉町",
  "邑楽町",
];
const areas = computed(() => {
  const unique = [...new Set(EVENTS.map((e) => e.area))];
  return unique.sort((a, b) => {
    const ai = MUNICIPALITY_ORDER.indexOf(a);
    const bi = MUNICIPALITY_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b, "ja");
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
});

const filtered = computed(() => {
  let evs = [...EVENTS];
  if (filterStatus.value !== "all")
    evs = evs.filter((e) => getStatus(e) === filterStatus.value);
  if (filterCategory.value !== "all")
    evs = evs.filter((e) => e.category === filterCategory.value);
  if (filterArea.value !== "all")
    evs = evs.filter((e) => e.area === filterArea.value);
  if (filterSources.value.length > 0) {
    const matchUrls = filterSources.value
      .map((name) => SOURCES.find((s) => s.name === name)?.matchUrl)
      .filter(Boolean);
    if (matchUrls.length > 0)
      evs = evs.filter((e) =>
        matchUrls.some((mu) => (e.url || "").includes(mu)),
      );
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase(); // BUG #29修正: .trim() 追加
    evs = evs.filter(
      (e) =>
        (e.title || "").toLowerCase().includes(q) ||
        (e.area || "").toLowerCase().includes(q) ||
        (e.venue || "").toLowerCase().includes(q) ||
        (e.tags || []).some((t) => (t || "").toLowerCase().includes(q)) ||
        (e.label || e.categoryLabel || "").toLowerCase().includes(q) ||
        (e.desc || "").toLowerCase().includes(q),
    );
  }
  evs.sort((a, b) => {
    // BUG #13修正: 終了済みイベントは常に末尾へ（ステータスフィルターが 'all' の場合のUX改善）
    if (filterStatus.value === "all") {
      const sa = getStatus(a),
        sb = getStatus(b);
      if (sa === "ended" && sb !== "ended") return 1;
      if (sa !== "ended" && sb === "ended") return -1;
    }
    if (sortOrder.value === "date-asc")
      return parseDate(a.startDate) - parseDate(b.startDate);
    if (sortOrder.value === "date-desc")
      return parseDate(b.startDate) - parseDate(a.startDate);
    return (a.title || "").localeCompare(b.title || "", "ja");
  });
  return evs;
});

function toggleSource(name) {
  const idx = filterSources.value.indexOf(name);
  if (idx === -1) filterSources.value.push(name);
  else filterSources.value.splice(idx, 1);
}

// Support ?area= query param from HomeView
onMounted(() => {
  if (route.query.area) filterArea.value = route.query.area;
});
watch(
  () => route.query.area,
  (val) => {
    // BUG #14修正: ?area= が消えたときも 'all' にリセットする
    filterArea.value = val || "all";
  },
);
</script>
