<template>
  <div class="event-list-item" @click="$emit('open-modal', event)">
    <div class="event-list-thumb">{{ event.emoji }}</div>
    <div class="event-list-body">
      <div class="event-list-top">
        <div>
          <span
            class="event-card-badge"
            :class="statusClass(status)"
            style="display: inline-block; margin-bottom: 0.35rem"
          >
            {{ statusLabel(status) }}
          </span>
          <h3 class="event-list-title">{{ event.title }}</h3>
        </div>
      </div>
      <div class="event-list-meta">
        <span>📍 {{ event.venue }}（{{ event.area }}）</span>
        <span>📅 {{ formatDateRange(event.startDate, event.endDate) }}</span>
        <span>🏷 {{ event.label || event.categoryLabel }}</span>
        <span
          v-if="event.free === true"
          style="color: #16a34a; font-weight: 700"
          >無料</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  getStatus,
  statusLabel,
  statusClass,
  formatDateRange,
} from "../composables/useEvents";

const props = defineProps({ event: { type: Object, required: true } });
defineEmits(["open-modal"]);

const status = computed(() => getStatus(props.event));
</script>
