<template>
  <div class="allWrapper">
    <div class="app-container">
      <div class="profile-section">
        <img
          :src="profileImageUrl"
          alt="プロフィール画像"
          class="profile-image"
        />
        <p>{{ userName }}</p>
      </div>

      <div class="button-section">
        <router-link to="/emailchange" tag="button"
          >メールアドレス変更</router-link
        >
        <router-link to="/passwordchange" tag="button"
          >パスワード変更</router-link
        >
        <router-link to="/goodpostview" tag="button"
          >いいねした投稿一覧</router-link
        >
        <router-link to="/addhobby" tag="button">新しい趣味を追加</router-link>
        <router-link to="/addmyhobby" tag="button"
          >新しいMy趣味を追加</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImageUrl: "https://via.placeholder.com/100",
      userName: "ユーザー名",
    };
  },
  methods: {},
  mounted() {
    alert("プロフィール情報を取得する");
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
  height: 557px;
  background: #e7e7e7;
}

.app-container {
  height: 450px;
  max-width: 375px;
  width: 100%; /* フル幅を取るように */
  padding: 10px;
  border-radius: 10px;
  background: #e7e7e7;
}

.profile-section {
  text-align: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  margin-top: 5px;
}

.button-section {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}

button {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: #00c0a3;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: rgb(172, 255, 190);
  transform: scale(1.05);
}

@media (max-width: 480px) {
  .header h1 {
    font-size: 1.8em;
  }

  button {
    font-size: 1em;
  }

  .footer-icon {
    font-size: 20px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .app-container {
    max-width: 600px;
  }

  .header h1 {
    font-size: 2.2em;
  }

  button {
    font-size: 1.2em;
  }
}

@media (min-width: 769px) {
  .app-container {
    max-width: 800px;
  }

  .header h1 {
    font-size: 2.5em;
  }

  button {
    font-size: 1.3em;
  }
}
</style>
