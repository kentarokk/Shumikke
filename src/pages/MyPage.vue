<template>
  <div class="allWrapper">
    <div class="app-container">
      <div class="button-section">
        <router-link to="/emailchange" tag="button" class="buttonStyle">
          <i class="fas fa-envelope"></i> メールアドレス変更
        </router-link>
        <router-link to="/passwordchange" tag="button" class="buttonStyle">
          <i class="fas fa-key"></i> パスワード変更
        </router-link>
        <router-link to="/goodpostview" tag="button" class="buttonStyle">
          <i class="fas fa-thumbs-up"></i> いいねした投稿一覧
        </router-link>
        <router-link to="/addhobby" tag="button" class="buttonStyle">
          <i class="fas fa-plus"></i> 新しい趣味を追加
        </router-link>
        <router-link to="/addmyhobby" tag="button" class="buttonStyle">
          <i class="fas fa-heart"></i> 新しいMy趣味を追加
        </router-link>

        <!-- サインアウトボタン -->
        <button class="buttonStyle" @click="handleSignOut">
          <i class="fas fa-sign-out-alt"></i> サインアウト
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { get_user_attributes } from "@/util";

export default {
  props: {
    signOut: {
      type: Function,
      required: true, // signOut を必須に
    },
  },
  data() {
    return {
      userName: "",
    };
  },
  async mounted() {
    const user_attributes = await get_user_attributes();
    this.userName = user_attributes["nickname"];
  },
  methods: {
    handleSignOut() {
      this.signOut();

      // セッションとCookieの削除
      sessionStorage.clear();
      document.cookie = "foobar=; max-age=0";

      // ブラウザのURL強制書き換え
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.allWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e7e7e7, #ffffff);
}

.app-container {
  max-width: 375px;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden; /* はみ出しを防ぐ */
}

.profile-section {
  text-align: center;
  margin-bottom: 20px;
}

.profile-section p {
  font-size: 1.6em;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.button-section {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
}

.buttonStyle {
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  background-color: #00c0a3;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.1em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s ease;
}

.buttonStyle:hover {
  background-color: #00e6c3;
  transform: translateY(-3px);
}
</style>
