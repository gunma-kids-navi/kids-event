<template>
  <div class="page-content">
    <div class="container">
      <div class="sources-grid" id="sources-grid">
        <div v-for="s in SOURCES" :key="s.name" class="source-card">
          <div class="source-card-header">
            <div class="source-city-icon">{{ s.icon }}</div>
            <div>
              <div class="source-city-name">{{ s.name }}</div>
              <div class="source-city-count">
                掲載中 {{ sourceCounts[s.name] || 0 }}件{{
                  s.rssUrl ? " • RSS対応" : ""
                }}
              </div>
            </div>
          </div>
          <div class="source-links">
            <a
              v-if="s.calendarUrl"
              class="source-link"
              :href="s.calendarUrl"
              target="_blank"
              rel="noopener"
            >
              <span class="source-link-icon">📅</span>
              <span class="source-link-text">{{ s.calendarLabel }}</span>
              <span v-if="s.rssUrl" class="source-rss-badge">RSS</span>
            </a>
            <a
              v-if="s.newsletterUrl"
              class="source-link"
              :href="s.newsletterUrl"
              target="_blank"
              rel="noopener"
            >
              <span class="source-link-icon">📰</span>
              <span class="source-link-text">{{ s.newsletterLabel }}</span>
            </a>
            <a
              v-if="s.kidsUrl"
              class="source-link"
              :href="s.kidsUrl"
              target="_blank"
              rel="noopener"
            >
              <span class="source-link-icon">👶</span>
              <span class="source-link-text">{{ s.kidsLabel }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { EVENTS } from "../data/events";
import { SOURCES } from "../data/sources";

// ソース名 → 掲載件数。e.url が各ソースの matchUrl を含むかで照合する
const sourceCounts = computed(() => {
  const result = {};
  SOURCES.forEach((s) => {
    result[s.name] = s.matchUrl
      ? EVENTS.filter((e) => (e.url || '').includes(s.matchUrl)).length
      : 0;
  });
  return result;
});
</script>
