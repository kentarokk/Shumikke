<script setup>
import "normalize.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
  <main>
    <authenticator v-slot="{ signOut }" class="auth-wrapper">
      <Header :signOut="signOut" />
      <div class="marginHeader"></div>
      <router-view />
      <div class="marginFooter"></div>
      <Footer />
    </authenticator>
  </main>
</template>

<style>
/* ボタンやリンクの色を変更 */
:root {
  --amplify-primary-color: #00c0a3 !important;
  --amplify-primary-tint: #00c0a3 !important;
  --amplify-primary-shade: #00c0a3 !important;
}

/* Authenticator全体を上下中央に配置 */
.auth-wrapper {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  height: 100vh !important;
}

/* ボタンの背景色を変更 */
.amplify-button {
  background-color: #00c0a3 !important;
  color: white !important; /* ボタンの文字色も白に */
}

/* Sign in / Sign out 選択部分のカスタマイズ */
.amplify-tabs > button {
  background-color: #00c0a3 !important;
  color: white !important; /* ボタンの文字色を白に変更 */
}

/* Forgot your password? リンクの文字色を白に */
.amplify-field-group__control a {
  color: white !important;
}

/* Forgot password リンクがホバーされたときの色 */
.amplify-field-group__control a:hover {
  color: #00c0a3 !important;
}

.marginHeader {
  height: 60px;
  background-color: white;
}

.marginFooter {
  height: 50px;
  background-color: white;
}
</style>


