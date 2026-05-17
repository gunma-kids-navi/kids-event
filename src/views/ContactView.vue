<template>
  <div class="page-content">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-header">
          <div class="contact-icon">✉️</div>
          <h1 class="contact-title">お問い合わせ</h1>
          <p class="contact-desc">
            イベント情報の追加・修正のご依頼、サイトへのご意見・ご要望などは<br
              class="pc-only"
            />下記フォームからお気軽にお送りください。
          </p>
        </div>

        <div class="contact-card">
          <ul class="contact-items">
            <li class="contact-item">
              <span class="contact-item-icon">📅</span>
              <div>
                <div class="contact-item-title">イベント掲載の依頼</div>
                <div class="contact-item-desc">
                  掲載希望のイベント情報をお知らせください
                </div>
              </div>
            </li>
            <li class="contact-item">
              <span class="contact-item-icon">✏️</span>
              <div>
                <div class="contact-item-title">情報の修正・削除</div>
                <div class="contact-item-desc">
                  掲載内容に誤りがある場合はご連絡ください
                </div>
              </div>
            </li>
            <li class="contact-item">
              <span class="contact-item-icon">💬</span>
              <div>
                <div class="contact-item-title">ご意見・ご要望</div>
                <div class="contact-item-desc">
                  サイト改善のためのフィードバックをお待ちしています
                </div>
              </div>
            </li>
          </ul>

          <a
            class="btn btn-primary contact-btn"
            :href="FORM_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせフォームを開く →
          </a>

          <p class="contact-note">
            ※ Google フォームが開きます。返信まで数日かかる場合があります。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const FORM_URL = "https://forms.gle/PpSTg29gMs6Kre1a6";
</script>

<style scoped>
.contact-wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 0.75rem;
}

.contact-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text, #1a1a2e);
  margin: 0 0 0.75rem;
}

.contact-desc {
  color: var(--color-text-muted, #666);
  line-height: 1.7;
  font-size: 0.95rem;
}

.pc-only {
  display: none;
}
@media (min-width: 640px) {
  .pc-only {
    display: inline;
  }
}

.contact-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
}

.contact-items {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-item-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 0.1rem;
}

.contact-item-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-text, #1a1a2e);
  margin-bottom: 0.25rem;
}

.contact-item-desc {
  font-size: 0.85rem;
  color: var(--color-text-muted, #666);
}

.contact-btn {
  display: block;
  text-align: center;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0.875rem 1.5rem;
}

.contact-note {
  margin: 1rem 0 0;
  font-size: 0.8rem;
  color: var(--color-text-muted, #888);
  text-align: center;
}
</style>
