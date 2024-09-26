<template>
  <div class="allWrapper">
    <BackButton />
    <div class="container">
      <div class="main-content">
        <h1>パスワード変更</h1>
        <form @submit.prevent="validatePassword" class="password-form">
          <div class="form-group">
            <label for="current-password">現在のパスワード</label>
            <input
              type="password"
              id="current-password"
              v-model="currentPassword"
              placeholder="現在のパスワードを入力"
              required
            />
          </div>
          <div class="form-group">
            <label for="new-password">新しいパスワード</label>
            <input
              type="password"
              id="new-password"
              v-model="newPassword"
              placeholder="新しいパスワードを入力"
              required
            />
          </div>
          <div class="form-group">
            <label for="confirm-password">新しいパスワード（確認）</label>
            <input
              type="password"
              id="confirm-password"
              v-model="confirmPassword"
              placeholder="新しいパスワードを再度入力"
              required
            />
          </div>
          <button type="submit" class="submit-btn">パスワードを変更</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  mounted() {
    alert("ユーザーのIDとパスワードを取得する");
  },
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },

  methods: {
    async validatePassword() {
      try {
        // 現在のパスワード確認のためのAPIリクエスト
        //        const response = await axios.post('/api/check-password', {
        //          userId: 1, // ユーザーIDは実際のアプリで動的に取得
        //         currentPassword: this.currentPassword
        //        });

        // パスワードが正しくない場合
        //        if (response.status !== 200) {
        //          alert('現在のパスワードが正しくありません。');
        //          return;
        //        }

        if (this.newPassword !== this.confirmPassword) {
          alert("新しいパスワードが一致しません。再度確認してください。");
          return;
        }
        // 実際のパスワード変更処理をここに追加
        alert("パスワードが変更されました！");
      } catch (error) {
        console.error("エラーが発生しました", error);
        alert("パスワードの確認中にエラーが発生しました。");
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  background-color: #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 557px;
  position: relative;
}

.main-content {
  width: 90%;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.password-form .form-group {
  margin-bottom: 15px;
}

.password-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
  color: #555;
}

.password-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.password-form input:focus {
  outline: none;
  border-color: #ff6b6b;
}

.submit-btn {
  background-color: #00c0a3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #009982;
}
</style>
