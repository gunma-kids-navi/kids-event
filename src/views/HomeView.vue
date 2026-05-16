<template>
  <!-- Hero -->
  <section class="hero">
    <div class="hero-inner">
      <p class="hero-sub">群馬県内の</p>
      <h1 class="hero-title">子ども向けイベント<br>あつめました。</h1>
      <p class="hero-desc">体験教室・展覧会・ワークショップ・野外イベントまで<br>群馬で開催中の子ども向けイベントを集約しています。</p>
      <div class="hero-actions">
        <router-link to="/events" class="btn btn-primary">イベントを探す →</router-link>
        <router-link to="/calendar" class="btn btn-outline">カレンダーで見る</router-link>
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
      <p class="stats-note">掲載しているイベント　体験・展覧会 / ワークショップ / スポーツ・自然 / 文化・学習 / 祭り・フェスタ</p>
    </div>
  </section>

  <!-- Ongoing Events -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">⏳ 開催中のイベント</h2>
        <router-link to="/events" class="section-more">すべて見る →</router-link>
      </div>
      <div class="events-grid">
        <template v-if="ongoing.length">
          <EventCard v-for="ev in ongoing.slice(0, 3)" :key="ev.id" :event="ev" @open-modal="openModal(ev)" />
        </template>
        <p v-else style="color:var(--text-muted)">現在開催中のイベントはありません</p>
      </div>
    </div>
  </section>

  <!-- Upcoming Events -->
  <section class="section section--alt">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">📅 近日開催のイベント</h2>
        <router-link to="/events" class="section-more">すべて見る →</router-link>
      </div>
      <div class="events-grid">
        <template v-if="upcoming.length">
          <EventCard v-for="ev in upcoming.slice(0, 3)" :key="ev.id" :event="ev" @open-modal="openModal(ev)" />
        </template>
        <p v-else style="color:var(--text-muted)">近日開催のイベントはありません</p>
      </div>
    </div>
  </section>

  <!-- Area -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">📍 エリアから探す</h2>
      </div>
      <div class="area-chips" id="home-areas">
        <div
          v-for="area in areas"
          :key="area"
          class="area-card"
          @click="goToArea(area)"
        >
          <div class="area-card-name">{{ area }}</div>
          <div class="area-card-count">{{ areaCounts[area] }}件</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { EVENTS } from '../data/events'
import { getStatus } from '../composables/useEvents'
import EventCard from '../components/EventCard.vue'

const router = useRouter()
const openModal = inject('openModal')

const ongoing = computed(() => EVENTS.filter(e => getStatus(e) === 'ongoing'))
const upcoming = computed(() => EVENTS.filter(e => getStatus(e) === 'upcoming'))
const areas = computed(() => [...new Set(EVENTS.map(e => e.area))].sort())
const areaCounts = computed(() => {
  const counts = {}
  areas.value.forEach(a => { counts[a] = EVENTS.filter(e => e.area === a).length })
  return counts
})

function goToArea(area) {
  router.push({ path: '/events', query: { area } })
}
</script>
