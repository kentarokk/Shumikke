<script setup>
import "normalize.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { I18n } from "aws-amplify/utils"; // AmplifyのI18n機能をインポート
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';

// 日本語の翻訳設定
const dict = {
  inheritAttrs: false,
  ja: {
    'Sign In': 'サインイン',
    'Sign in': 'サインイン',
    'Nickname': 'ニックネーム',
    'Enter your Nickname': 'ニックネームを入力してください',
    'Signing in': 'サインイン',
    'Sign Up': 'サインアップ',
    'Sign Out': 'サインアウト',
    'Email': 'メールアドレス',
    'Enter your Email': 'メールアドレスを入力してください',
    'Enter your Password': 'パスワードを入力してください',
    'Confirm Password': 'パスワード確認',
    'Please confirm your Password': 'パスワードをもう一度入力してください',
    'Username': 'ユーザー名',
    'Password': 'パスワード',
    'Forgot your password?': 'パスワードをお忘れですか？',
    'Reset your password': 'パスワードをリセット',
    'No account?': 'アカウントをお持ちでないですか？',
    'Create Account': 'アカウント作成',
    'Back to Sign In': 'サインインに戻る',
    'Send Code': 'コードを送信',
    'Confirm': '確認',
    'Resend Code': 'コードを再送信',
  }
};

I18n.putVocabularies(dict);
I18n.setLanguage('ja');

const route = useRoute();
const pageTitle = ref(route.meta.pageTitle || 'Default Title');

watchEffect(() => {
  pageTitle.value = route.meta.pageTitle || 'Default Title';
});

</script>

<template>
  <div :class="$attrs.authWrapper">
    <authenticator :sign-up-attributes="['nickname',]" v-slot="{ signOut }" >
    <Header :pageTitle="pageTitle" :signOut="signOut" />
    <div class="marginHeader"></div>
    <router-view />
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

[data-amplify-authenticator] {
  display: flex !important;
  justify-content: center !important; /* 水平方向に中央揃え */
  align-items: center !important; /* 垂直方向に中央揃え */
  flex-direction: column !important; /* 要素を縦に並べる */
  min-height: 100vh !important; /* 画面全体の高さにする */
}


/* 認証UI全体の幅を制限して中央に */
[data-amplify-authenticator] .amplify-container {
  max-width: 400px !important;
  width: 100% !important;
  margin: 0 auto !important; /* 水平中央揃え */
}


/* 他の要素も必要に応じて中央に */
[data-amplify-authenticator] .amplify-form-section {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
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
