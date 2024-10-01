<template>
  <div class="allWrapper">
    <div class="app-container">
      <div class="profile-section">
        <p>{{ userName }}さんのマイページ</p>
      </div>

      <div class="button-section">
        <router-link to="/emailchange" tag="button" class="buttonStyle"
          >メールアドレス変更</router-link
        >
        <router-link to="/passwordchange" tag="button" class="buttonStyle"
          >パスワード変更</router-link
        >
        <router-link to="/goodpostview" tag="button" class="buttonStyle"
          >いいねした投稿一覧</router-link
        >
        <router-link to="/addhobby" tag="button" class="buttonStyle"
          >新しい趣味を追加</router-link
        >
        <router-link to="/addmyhobby" tag="button" class="buttonStyle"
          >新しいMy趣味を追加</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { get_user_attributes } from "@/util";

export default {
  data() {
    return {
      profileImageUrl: "https://via.placeholder.com/100",
      userName: "",
    };
  },
  methods: {},
  async mounted() {
    const user_attributes = await get_user_attributes();
    this.userName = user_attributes["nickname"];
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
  height: 450px;
  max-width: 375px;
  width: 100%; 
  padding: 20px;
  border-radius: 15px; 
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; 
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

@media (max-width: 480px) {
  .header h1 {
    font-size: 1.8em;
  }

  .buttonStyle {
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

  .buttonStyle {
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

  .buttonStyle {
    font-size: 1.3em;
  }
}
</style>
