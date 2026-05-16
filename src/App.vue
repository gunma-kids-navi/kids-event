<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <span class="logo-icon">🎈</span>
        <span class="logo-text">ぐんまこどもイベント</span>
      </router-link>
      <nav class="nav">
        <router-link to="/" class="nav-link">ホーム</router-link>
        <router-link to="/events" class="nav-link">イベント一覧</router-link>
        <router-link to="/calendar" class="nav-link">カレンダー</router-link>
        <router-link to="/area" class="nav-link">エリア</router-link>
        <router-link to="/sources" class="nav-link">情報源</router-link>
      </nav>
      <button
        class="hamburger"
        @click="mobileNavOpen = !mobileNavOpen"
        aria-label="メニュー"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div class="mobile-nav" :class="{ open: mobileNavOpen }">
    <router-link to="/" class="mobile-nav-link" @click="mobileNavOpen = false"
      >🏠 ホーム</router-link
    >
    <router-link
      to="/events"
      class="mobile-nav-link"
      @click="mobileNavOpen = false"
      >📋 イベント一覧</router-link
    >
    <router-link
      to="/calendar"
      class="mobile-nav-link"
      @click="mobileNavOpen = false"
      >📅 カレンダー</router-link
    >
    <router-link
      to="/area"
      class="mobile-nav-link"
      @click="mobileNavOpen = false"
      >📍 エリア</router-link
    >
    <router-link
      to="/sources"
      class="mobile-nav-link"
      @click="mobileNavOpen = false"
      >📰 情報源</router-link
    >
  </div>

  <main>
    <router-view />
  </main>

  <EventModal :event="modalEvent" @close="modalEvent = null" />
</template>

<script setup>
import { ref, provide } from "vue";
import EventModal from "./components/EventModal.vue";

const mobileNavOpen = ref(false);
const modalEvent = ref(null);

provide("openModal", (ev) => {
  modalEvent.value = ev;
});
</script>
