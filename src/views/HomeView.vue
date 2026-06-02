<template>
  <!-- Hero -->
  <section class="hero">
    <div class="hero-inner">
      <p class="hero-sub">群馬県内の</p>
      <h1 class="hero-title">子ども向けイベント<br />あつめました。</h1>
      <p class="hero-desc">
        体験教室・展覧会・ワークショップ・野外イベントまで<br />群馬で開催中の子ども向けイベントを集約しています。
      </p>
      <div class="hero-actions">
        <router-link to="/events" class="btn btn-primary"
          >イベントを探す →</router-link
        >
        <router-link to="/calendar" class="btn btn-outline"
          >カレンダーで見る</router-link
        >
      </div>
    </div>
    <div class="hero-deco">
      <span class="deco-ball deco-ball--1">🎨</span>
      <span class="deco-ball deco-ball--2">🦕</span>
      <span class="deco-ball deco-ball--3">🌿</span>
      <span class="deco-ball deco-ball--4">⭐</span>
    </div>
  </section>

  <!-- Stats -->
  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-num">{{ ongoing.length }}</span>
          <span class="stat-label">開催中</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">{{ upcoming.length }}</span>
          <span class="stat-label">近日開催</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">{{ EVENTS.length }}</span>
          <span class="stat-label">掲載イベント</span>
        </div>
      </div>
      <p class="stats-note">
        掲載しているイベント　体験・展覧会 / ワークショップ / スポーツ・自然 /
        文化・学習 / 祭り・フェスタ
      </p>
    </div>
  </section>

  <!-- Ongoing Events -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">⏳ 開催中のイベント</h2>
        <router-link to="/events" class="section-more"
          >すべて見る →</router-link
        >
      </div>
      <div class="events-grid">
        <template v-if="ongoing.length">
          <EventCard
            v-for="ev in ongoing.slice(0, 3)"
            :key="ev.id"
            :event="ev"
            @open-modal="openModal(ev)"
          />
        </template>
        <p v-else style="color: var(--text-muted)">
          現在開催中のイベントはありません
        </p>
      </div>
    </div>
  </section>

  <!-- Upcoming Events -->
  <section class="section section--alt">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">📅 近日開催のイベント</h2>
        <router-link to="/events" class="section-more"
          >すべて見る →</router-link
        >
      </div>
      <div class="events-grid">
        <template v-if="upcoming.length">
          <EventCard
            v-for="ev in upcoming.slice(0, 3)"
            :key="ev.id"
            :event="ev"
            @open-modal="openModal(ev)"
          />
        </template>
        <p v-else style="color: var(--text-muted)">
          近日開催のイベントはありません
        </p>
      </div>
    </div>
  </section>

  <!-- Area -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">📍 エリアから探す</h2>
      </div>
    </div>
    <div class="area-map-wrap">
      <div ref="mapEl" class="area-map"></div>
    </div>
  </section>
</template>

<script setup>
import { computed, inject, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { EVENTS } from "../data/events";
import { getStatus, parseDate } from "../composables/useEvents";
import EventCard from "../components/EventCard.vue";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const router = useRouter();
const openModal = inject("openModal");

const ongoing = computed(() =>
  EVENTS.filter((e) => getStatus(e) === "ongoing").sort(
    (a, b) => parseDate(a.startDate) - parseDate(b.startDate),
  ),
);
const upcoming = computed(() =>
  EVENTS.filter((e) => getStatus(e) === "upcoming").sort(
    (a, b) => parseDate(a.startDate) - parseDate(b.startDate),
  ),
);
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
const areaCounts = computed(() => {
  const counts = {};
  areas.value.forEach((a) => {
    counts[a] = EVENTS.filter((e) => e.area === a).length;
  });
  return counts;
});

function goToArea(area) {
  router.push({ path: "/events", query: { area } });
}

// 地図
const mapEl = ref(null);
let mapInstance = null;

const AREA_COORDS = {
  前橋市: [36.3894, 139.0634],
  高崎市: [36.3227, 139.0032],
  桐生市: [36.4046, 139.3376],
  伊勢崎市: [36.3113, 139.1976],
  太田市: [36.2917, 139.3752],
  沼田市: [36.6449, 139.0418],
  館林市: [36.2435, 139.54],
  渋川市: [36.4894, 139.0024],
  藤岡市: [36.2548, 139.0757],
  富岡市: [36.2647, 138.8892],
  安中市: [36.3258, 138.9003],
  みどり市: [36.3944, 139.2894],
  榛東村: [36.4306, 139.0119],
  吉岡町: [36.4453, 139.0082],
  上野村: [36.0462, 138.754],
  神流町: [36.1247, 138.9397],
  下仁田町: [36.2282, 138.7827],
  南牧村: [36.1497, 138.7118],
  甘楽町: [36.2344, 138.8947],
  中之条町: [36.5877, 138.8554],
  長野原町: [36.5473, 138.6416],
  嬬恋村: [36.5352, 138.5242],
  草津町: [36.6194, 138.5963],
  高山村: [36.5394, 138.9483],
  東吾妻町: [36.5432, 139.0055],
  片品村: [36.6966, 139.1827],
  川場村: [36.6227, 139.0451],
  昭和村: [36.6575, 139.0869],
  みなかみ町: [36.6751, 138.997],
  玉村町: [36.2789, 139.0686],
  板倉町: [36.2237, 139.5881],
  明和町: [36.2364, 139.5163],
  千代田町: [36.2432, 139.5503],
  大泉町: [36.2482, 139.5044],
  邑楽町: [36.2296, 139.4697],
  "群馬県（県全体）": [36.4807, 138.9878],
};

const GUNMA_BOUNDS = L.latLngBounds([35.95, 138.25], [37.05, 139.75]);

onMounted(() => {
  mapInstance = L.map(mapEl.value, {
    zoomControl: true,
    minZoom: 10,
    maxZoom: 14,
    maxBounds: GUNMA_BOUNDS,
    maxBoundsViscosity: 1.0,
  }).setView([36.47, 139.0], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(mapInstance);

  const maskStyle = {
    fillColor: "#555",
    fillOpacity: 0.4,
    stroke: false,
    interactive: false,
  };
  const G = { n: 37.05, s: 35.95, w: 138.25, e: 139.75 };
  const O = { n: 38.5, s: 34.0, w: 136.0, e: 141.5 };
  [
    [
      [O.n, O.w],
      [G.n, O.e],
    ],
    [
      [G.s, O.w],
      [O.s, O.e],
    ],
    [
      [G.n, O.w],
      [G.s, G.w],
    ],
    [
      [G.n, G.e],
      [G.s, O.e],
    ],
  ].forEach((bounds) => L.rectangle(bounds, maskStyle).addTo(mapInstance));

  areas.value.forEach((area) => {
    const coords = AREA_COORDS[area];
    if (!coords) return;
    const count = areaCounts.value[area] ?? 0;

    const icon = L.divIcon({
      className: "",
      html: `<div class="map-marker"><span class="map-marker-count">${count}</span><span class="map-marker-name">${area}</span></div>`,
      iconAnchor: [24, 40],
      popupAnchor: [0, -40],
    });

    const marker = L.marker(coords, { icon }).addTo(mapInstance);
    marker.bindPopup(
      `<strong>${area}</strong><br>${count}件のイベント<br><a href="#" class="map-popup-link">一覧へ →</a>`,
    );
    marker.on("popupopen", () => {
      setTimeout(() => {
        const link = document.querySelector(".map-popup-link");
        if (link)
          link.addEventListener("click", (e) => {
            e.preventDefault();
            goToArea(area);
          });
      }, 50);
    });
    marker.on("click", () => goToArea(area));
  });
});

onUnmounted(() => {
  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }
});
</script>

<style scoped>
.area-map-wrap {
  width: 100%;
  background: #e8f4f8;
}
.area-map {
  width: 100%;
  height: 380px;
}
</style>

<style>
.map-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.map-marker-count {
  background: var(--primary, #ff6b35);
  color: #fff;
  font-weight: 900;
  font-size: 0.85rem;
  width: 32px;
  height: 32px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.map-marker-count span {
  transform: rotate(45deg);
  display: block;
}
.map-marker-name {
  margin-top: 2px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #333;
  white-space: nowrap;
  background: rgba(255, 255, 255, 0.85);
  padding: 1px 4px;
  border-radius: 4px;
}
.map-popup-link {
  color: #ff6b35;
  font-weight: 700;
}
</style>
