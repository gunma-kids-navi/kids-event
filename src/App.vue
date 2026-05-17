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
        <router-link to="/contact" class="nav-link">お問い合わせ</router-link>
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
    <router-link
      to="/contact"
      class="mobile-nav-link"
      @click="mobileNavOpen = false"
      >✉️ お問い合わせ</router-link
    >
  </div>

  <main>
    <router-view />
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-logo">🎈 ぐんまこどもイベント</div>
      <p class="footer-desc">
        群馬県内の子ども向けイベント情報をまとめた非公式サイトです。<br />
        掲載情報は各施設・主催者の公式情報をもとにしていますが、内容の正確性・完全性を保証するものではありません。<br />
        最新情報は必ず各イベントの公式サイトでご確認ください。
      </p>
      <p class="footer-copy">
        © {{ new Date().getFullYear() }} ぐんまこどもイベント
      </p>
    </div>
  </footer>

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
