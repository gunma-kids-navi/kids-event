<template>
  <div
    class="modal-overlay"
    :class="{ open: event !== null }"
    @click.self="$emit('close')"
  >
    <div class="modal" v-if="event">
      <button class="modal-close" @click="$emit('close')" aria-label="閉じる">
        ✕
      </button>
      <div class="modal-body">
        <img
          v-if="event.image"
          :src="event.image"
          :alt="event.title"
          class="modal-image"
        />
        <span v-else class="modal-emoji">{{ event.emoji }}</span>
        <span
          class="modal-badge event-card-badge"
          :class="statusClass(status)"
          >{{ statusLabel(status) }}</span
        >
        <h2 class="modal-title">{{ event.title }}</h2>
        <div class="modal-info">
          <div class="modal-info-row">
            <span class="modal-info-label">📍 会場</span>
            <span>{{ event.venue }}（{{ event.area }}）</span>
          </div>
          <div class="modal-info-row">
            <span class="modal-info-label">📅 日程</span>
            <span>{{ formatDateRange(event.startDate, event.endDate) }}</span>
          </div>
          <div class="modal-info-row">
            <span class="modal-info-label">🏷 種別</span>
            <span>{{ event.label || event.categoryLabel }}</span>
          </div>
          <div class="modal-info-row">
            <span class="modal-info-label">👶 対象</span>
            <span>{{ event.age }}</span>
          </div>
          <div class="modal-info-row">
            <span class="modal-info-label">💴 費用</span>
            <span>{{
              event.free === true
                ? "無料"
                : event.free === false
                  ? "有料（詳細は主催者サイトへ）"
                  : "詳細は主催者サイトへ"
            }}</span>
          </div>
        </div>
        <p class="modal-desc">{{ event.desc }}</p>
        <div class="modal-tags">
          <span v-for="tag in event.tags" :key="tag" class="tag">{{
            tag
          }}</span>
        </div>
        <div class="modal-actions">
          <a
            :href="event.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            公式サイトを見る →
          </a>
          <a
            :href="lineShareUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-line"
          >
            <span class="btn-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="10" fill="#06C755" />
                <path
                  d="M40 22.2c0-7.3-7.3-13.2-16.3-13.2S7.5 14.9 7.5 22.2c0 6.5 5.8 12 13.6 13l.9.2c.4.1.9.3 1 .7.1.4 0 .9 0 1.3l-.2 1.2c-.1.4-.4 1.6 1.4.9s9.7-5.7 13.2-9.8c2.4-2.6 3.6-5.2 3.6-8.2z"
                  fill="#fff"
                />
                <path
                  d="M35.2 26.4h-4.5a.4.4 0 0 1-.4-.4v-7a.4.4 0 0 1 .4-.4h4.5a.4.4 0 0 1 .4.4v1.1a.4.4 0 0 1-.4.4h-3v1.1h3a.4.4 0 0 1 .4.4v1.1a.4.4 0 0 1-.4.4h-3v1.1h3a.4.4 0 0 1 .4.4v1.1a.4.4 0 0 1-.4.3zm-6.4 0h-1.1a.4.4 0 0 1-.4-.4v-7a.4.4 0 0 1 .4-.4h1.1a.4.4 0 0 1 .4.4v7a.4.4 0 0 1-.4.4zm-2.4 0h-4.5a.4.4 0 0 1-.4-.4v-7a.4.4 0 0 1 .4-.4h1.1a.4.4 0 0 1 .4.4v5.6h3a.4.4 0 0 1 .4.4v1.1a.4.4 0 0 1-.4.3zm-6.3 0h-4.5a.4.4 0 0 1-.4-.4v-7a.4.4 0 0 1 .4-.4h4.5a.4.4 0 0 1 .4.4v1.1a.4.4 0 0 1-.4.4h-3v1.1h3a.4.4 0 0 1 .4.4v1.1a.4.4 0 0 1-.4.4h-3v1.1h3a.4.4 0 0 1 .4.4v1.1a.4.4 0 0 1-.4.3z"
                  fill="#06C755"
                />
              </svg>
            </span>
            LINEで共有
          </a>
          <a
            :href="googleCalendarUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-gcal"
          >
            <span class="btn-icon">📅</span>
            Googleカレンダーに追加
          </a>
          <button class="btn btn-copy" @click="copyToClipboard">
            <span class="btn-icon">{{ copied ? "✓" : "📋" }}</span>
            {{ copied ? "コピーしました！" : "URLをコピー" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from "vue";
import {
  getStatus,
  statusLabel,
  statusClass,
  formatDateRange,
} from "../composables/useEvents";

const props = defineProps({ event: { type: Object, default: null } });
const emit = defineEmits(["close"]);

// BUG #82修正: Escapeキーでモーダルを閉じる
function handleKeydown(e) {
  if (e.key === "Escape" && props.event) emit("close");
}
onMounted(() => document.addEventListener("keydown", handleKeydown));
onBeforeUnmount(() => document.removeEventListener("keydown", handleKeydown));

// BUG #85修正: モーダル開放中はページスクロールを抑制
watch(
  () => props.event,
  (val) => {
    document.body.style.overflow = val ? "hidden" : "";
  },
);
onBeforeUnmount(() => {
  document.body.style.overflow = "";
});

const status = computed(() => (props.event ? getStatus(props.event) : "ended"));

// BUG #84修正: new Date().toISOString() はUTC変換するため、JST環境では日付が1日ずれる
// 日付文字列を直接操作してタイムゾーン依存を排除
function toGcalDate(dateStr, addDay = false) {
  if (!addDay) return dateStr.replace(/-/g, "");
  const [y, m, d] = dateStr.split("-").map(Number);
  const next = new Date(y, m - 1, d + 1); // ローカル時刻で翌日計算（UTC変換なし）
  return (
    String(next.getFullYear()) +
    String(next.getMonth() + 1).padStart(2, "0") +
    String(next.getDate()).padStart(2, "0")
  );
}

const lineShareUrl = computed(() => {
  if (!props.event) return "#";
  const text = encodeURIComponent(props.event.title);
  const url = encodeURIComponent(props.event.url);
  return `https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`;
});

const googleCalendarUrl = computed(() => {
  if (!props.event) return "#";
  const start = toGcalDate(props.event.startDate);
  const end = toGcalDate(props.event.endDate, true);
  const text = encodeURIComponent(props.event.title);
  const location = encodeURIComponent(
    `${props.event.venue}（${props.event.area}）`,
  );
  const details = encodeURIComponent(
    (props.event.desc || "") + "\n\n" + props.event.url,
  );
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&location=${location}&details=${details}`;
});

const copied = ref(false);
let copyTimer = null;
async function copyToClipboard() {
  if (!props.event) return;
  const e = props.event;
  const text = [
    `【${e.title}】`,
    `📅 ${formatDateRange(e.startDate, e.endDate)}`,
    `📍 ${e.venue}（${e.area}）`,
    e.desc ? e.desc : null,
    `🔗 ${e.url}`,
  ]
    .filter(Boolean)
    .join("\n");
  // BUG #31修正: 非HTTPSや非対応ブラウザでは navigator.clipboard が undefined になる
  if (!navigator.clipboard) {
    console.warn(
      "Clipboard API is not available in this context (HTTPS required)",
    );
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.warn("クリップボードへのコピーに失敗しました:", err);
  }
}
</script>
