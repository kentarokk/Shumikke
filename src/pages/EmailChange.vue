<template>
  <div class="allWrapper">
    <BackButton />
    <div class="container">
      <div class="main-content">
        <h1>メールアドレスの変更</h1>
        <form @submit.prevent="validdateemail" class="email-form">
          <div class="form-group">
            <label for="new-email">新しいメールアドレス</label>
            <input
              type="email"
              id="new-email"
              v-model="newEmail"
              placeholder="新しいメールアドレス"
              required
            />
          </div>
          <div class="form-group">
            <label for="confirm-email">新しいメールアドレス（確認）</label>
            <input
              type="email"
              id="confirm-email"
              v-model="confirmEmail"
              placeholder="新しいメールアドレスを再入力"
              required
            />
          </div>
          <button type="submit" class="submit-btn">変更を保存</button>
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
    // alert("ユーザーのメールアドレスを取得する");
  },
  data() {
    return {
      newEmail: "",
      confirmEmail: "",
    };
  },
  methods: {
    submitForm() {
      // メールアドレスが正しいか確認する
      if (this.validateEmails()) {
        // メールアドレスの変更をAPIに送信
        this.updateEmail();
      }
    },
    validateEmails() {
      // メールアドレスの一致と基本的な形式のバリデーション
      if (this.newEmail !== this.confirmEmail) {
        alert("メールアドレスが一致しません");
        return false;
      }
      if (!this.newEmail.includes("@")) {
        alert("有効なメールアドレスを入力してください");
        return false;
      }
      alert("メールアドレスが変更されました！");
      return true;
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
  font-family: "Arial", sans-serif;
  background-color: #e7e7e7;
  display: flex;
  align-items: center;
  height: 557px;
  position: relative;
  justify-content: center; /* コンテンツを縦方向に中央配置 */
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

.email-form .form-group {
  margin-bottom: 15px;
}

.email-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
  color: #555;
}

.email-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.email-form input:focus {
  outline: none;
  border-color: #ff6b6b;
}

button {
  padding: 10px 20px;
  background-color: #00c0a3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #009982;
}
</style>
