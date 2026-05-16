<template>
  <div class="page-content">
    <div class="container">
      <div v-if="favEvents.length === 0" class="favorites-empty" id="favorites-empty">
        <p class="empty-icon">⭐</p>
        <p class="empty-title">お気に入りはまだありません</p>
        <p class="empty-desc">イベントカードの ☆ をタップして追加しましょう</p>
      </div>
      <div id="favorites-list">
        <EventListItem
          v-for="ev in favEvents"
          :key="ev.id"
          :event="ev"
          @open-modal="openModal(ev)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { EVENTS } from '../data/events'
import { useFavoritesStore } from '../stores/favorites'
import EventListItem from '../components/EventListItem.vue'

const openModal = inject('openModal')
const favStore = useFavoritesStore()
const favEvents = computed(() => EVENTS.filter(e => favStore.isFav(e.id)))
</script>
