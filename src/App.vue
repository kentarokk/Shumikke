<script setup>
import "normalize.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { I18n } from "aws-amplify/utils"; // AmplifyのI18n機能をインポート
import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";

// 日本語の翻訳設定
const dict = {
  inheritAttrs: false,
  ja: {
    "Sign In": "サインイン",
    "Sign in": "サインイン",
    Nickname: "ニックネーム",
    "Enter your Nickname": "ニックネームを入力してください",
    "Signing in": "サインイン",
    "Sign Up": "サインアップ",
    "Sign Out": "サインアウト",
    Email: "メールアドレス",
    "Enter your Email": "メールアドレスを入力してください",
    "Enter your Password": "パスワードを入力してください",
    "Confirm Password": "パスワード確認",
    "Please confirm your Password": "パスワードをもう一度入力してください",
    Username: "ユーザー名",
    Password: "パスワード",
    "Forgot your password?": "パスワードをお忘れですか？",
    "Reset your password": "パスワードをリセット",
    "No account?": "アカウントをお持ちでないですか？",
    "Create Account": "アカウント作成",
    "Back to Sign In": "サインインに戻る",
    "Send Code": "コードを送信",
    Confirm: "確認",
    "Resend Code": "コードを再送信",
  },
};

I18n.putVocabularies(dict);
I18n.setLanguage("ja");

const route = useRoute();
const pageTitle = ref(route.meta.pageTitle || "Default Title");

watchEffect(() => {
  pageTitle.value = route.meta.pageTitle || "Default Title";
});
</script>

<template>
  <div :class="$attrs.authWrapper">
    <authenticator :sign-up-attributes="['nickname']" v-slot="{ signOut }" class="authWrapper">
      <Header :pageTitle="pageTitle" />
      <div class="marginHeader"></div>
      <router-view :signOut="signOut" />
      <!-- signOut を渡す -->
      <div class="marginFooter"></div>
      <Footer />
    </authenticator>
  </div>
</template>

<style>
:root {
  --amplify-primary-color: #00c0a3 !important;
  --amplify-primary-tint: #00c0a3 !important;
  --amplify-primary-shade: #00c0a3 !important;
}

.authWrapper {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  height: 100vh !important;
}

.amplify-button {
  background-color: #00c0a3 !important;
  color: white !important;
}

.amplify-tabs > button {
  background-color: #00c0a3 !important;
  color: white !important;
}

.amplify-field-group__control a {
  color: white !important;
}

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
