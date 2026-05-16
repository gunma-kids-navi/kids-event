<template>
  <div class="page-content">
    <!-- 地図 -->
    <div class="area-map-wrap">
      <div ref="mapEl" class="area-map"></div>
    </div>

    <div class="container">
      <div class="area-detail-grid" id="area-detail-grid">
        <div
          v-for="area in areas"
          :key="area"
          :ref="
            (el) => {
              if (el) sectionRefs[area] = el;
            }
          "
          class="area-section"
          :class="{ 'area-section--highlight': highlighted === area }"
        >
          <div class="area-section-header">
            <h2 class="area-section-title">📍 {{ area }}</h2>
            <span class="area-section-count"
              >{{ areaEvents(area).length }}件</span
            >
          </div>
          <div class="events-grid">
            <EventCard
              v-for="ev in areaEvents(area)"
              :key="ev.id"
              :event="ev"
              @open-modal="openModal(ev)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref, onMounted, onUnmounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { EVENTS } from "../data/events";
import EventCard from "../components/EventCard.vue";

// Leaflet デフォルトアイコンのパス修正（Vite環境）
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const openModal = inject("openModal");
const areas = computed(() => [...new Set(EVENTS.map((e) => e.area))].sort());
function areaEvents(area) {
  return EVENTS.filter((e) => e.area === area);
}

// 各市区町村の中心座標
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
  佐波郡玉村町: [36.2789, 139.0686],
  中之条町: [36.5877, 138.8554],
  みなかみ町: [36.6751, 138.997],
  利根郡みなかみ町: [36.6751, 138.997],
  上野村: [36.0462, 138.754],
  多野郡上野村: [36.0462, 138.754],
  "群馬県（県全体）": [36.4807, 138.9878],
  群馬: [36.4807, 138.9878],
};

const mapEl = ref(null);
const sectionRefs = {};
const highlighted = ref(null);
let mapInstance = null;

function scrollToArea(area) {
  highlighted.value = area;
  const el = sectionRefs[area];
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setTimeout(() => {
    highlighted.value = null;
  }, 2000);
}

// 群馬県の範囲 (SW, NE)
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

  // 群馬県外を半透明マスクで覆う（4つの矩形で群馬を囲む）
  const maskStyle = {
    fillColor: "#555",
    fillOpacity: 0.4,
    stroke: false,
    interactive: false,
  };
  const G = { n: 37.05, s: 35.95, w: 138.25, e: 139.75 }; // Gunma bounds
  const O = { n: 38.5, s: 34.0, w: 136.0, e: 141.5 }; // outer bounds
  [
    [
      [O.n, O.w],
      [G.n, O.e],
    ], // 北帯
    [
      [G.s, O.w],
      [O.s, O.e],
    ], // 南帯
    [
      [G.n, O.w],
      [G.s, G.w],
    ], // 西帯
    [
      [G.n, G.e],
      [G.s, O.e],
    ], // 東帯
  ].forEach((bounds) => L.rectangle(bounds, maskStyle).addTo(mapInstance));

  areas.value.forEach((area) => {
    const coords = AREA_COORDS[area];
    if (!coords) return;
    const count = areaEvents(area).length;

    const icon = L.divIcon({
      className: "",
      html: `<div class="map-marker"><span class="map-marker-count">${count}</span><span class="map-marker-name">${area}</span></div>`,
      iconAnchor: [24, 40],
      popupAnchor: [0, -40],
    });

    const marker = L.marker(coords, { icon }).addTo(mapInstance);
    marker.bindPopup(
      `<strong>${area}</strong><br>${count}件のイベント<br><a href="#" class="map-popup-link">一覧へ ↓</a>`,
    );
    marker.on("popupopen", () => {
      setTimeout(() => {
        const link = document.querySelector(".map-popup-link");
        if (link)
          link.addEventListener("click", (e) => {
            e.preventDefault();
            scrollToArea(area);
          });
      }, 50);
    });
    marker.on("click", () => scrollToArea(area));
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
  height: 400px;
}
.area-section--highlight {
  outline: 3px solid var(--primary);
  border-radius: var(--radius-sm);
  outline-offset: 2px;
}
</style>

<style>
/* スコープ外（Leaflet DOM 内）のスタイル */
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
