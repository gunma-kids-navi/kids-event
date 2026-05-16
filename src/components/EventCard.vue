<template>
  <div class="event-card" @click="$emit('open-modal', event)">
    <div class="event-card-img">
      <img
        v-if="event.image"
        :src="event.image"
        :alt="event.title"
        class="event-card-img-photo"
        loading="lazy"
        @error="imgError = true"
      />
      <template v-if="!event.image || imgError">
        {{ event.emoji }}
      </template>
      <span class="event-card-badge" :class="statusClass(status)">
        {{ statusLabel(status) }}
        <span
          v-if="status === 'ongoing' && remainDays <= 7 && remainDays >= 0"
          style="color: #ef4444; font-size: 0.75rem; font-weight: 700"
        >
          残り{{ remainDays }}日</span
        >
        <span
          v-if="status === 'upcoming' && startDays <= 7"
          style="color: #3b82f6; font-size: 0.75rem; font-weight: 700"
        >
          あと{{ startDays }}日</span
        >
      </span>
    </div>
    <div class="event-card-body">
      <span class="event-card-cat">{{
        event.label || event.categoryLabel
      }}</span>
      <h3 class="event-card-title">{{ event.title }}</h3>
      <span class="event-card-location"
        >📍 {{ event.venue }}（{{ event.area }}）</span
      >
      <span class="event-card-date"
        >📅 {{ formatDateRange(event.startDate, event.endDate) }}</span
      >
      <span
        v-if="event.free"
        style="color: #16a34a; font-size: 0.8125rem; font-weight: 700"
        >✓ 無料イベント</span
      >
    </div>
    <div class="event-card-footer">
      <div class="event-card-tags">
        <span v-for="tag in event.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  getStatus,
  statusLabel,
  statusClass,
  formatDateRange,
  daysLeft,
  daysToStart,
} from "../composables/useEvents";

const props = defineProps({ event: { type: Object, required: true } });
defineEmits(["open-modal"]);

const imgError = ref(false);
const status = computed(() => getStatus(props.event));
const remainDays = computed(() => daysLeft(props.event));
const startDays = computed(() => daysToStart(props.event));
</script>
