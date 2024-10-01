<template>
  <div class="all">
    <BackButton />
    <div class="container">
      <div class="main-header">
        <AddButton class="addButton" />
        <details>
          <summary>{{ title }}</summary>
          <p>{{ hobbyDescriction }}</p>
        </details>
      </div>
      <main>
        <div class="main-content">
          <ul>
            <li v-for="(hobby, index) in hobbies" :key="index" class="card">
              <img :src="hobby.post_photo" class="store-photo" alt="投稿写真" />
              <div class="discription">
                <GoodButton :likeCount="hobby.likes_number" />
                <h2>{{ hobby.post_date }}</h2>
                <p class="mainText">{{ hobby.impression }}</p>
                <router-link to="/shopinfomation">#{{ hobby.hobbies_id }}</router-link>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AddButton from "../components/AddButton.vue";
import BackButton from "../components/BackButton.vue";
import GoodButton from "../components/GoodButton.vue";
import axios from "axios";

export default {
  components: {
    BackButton,
    GoodButton,
    AddButton,
  },
  mounted() {
    axios
      .get(
        "https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/business?hobbies_id=h00001"
      )
      .then(response => {
        this.hobbies = response.data;
      })
      .catch(error => {
        console.error("データの取得に失敗しました:", error);
      });
  },
  data() {
    return {
      hobbies: [],
      title: "サッカー",
      hobbyDescriction: "球を蹴るスポーツです。世界中で人気があります。",
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  background-color: #e7e7e7;
}

main {
  padding-top: 40px;
}

.main-header {
  padding: 10px;
  background-color: white;
  position: fixed;
  z-index: 1;
  width: 100%;
}

summary {
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
}

details p {
  padding: 10px 10px 0 10px;
}

.main-content {
  padding: 12px;
  text-align: center;
}

.store-photo {
  width: 100%;
  height: auto;
  border-radius: 20px 20px 0 0;
}

.card {
  height: auto;
}

.discription {
  text-align: left;
  font-size: 18px;
  padding: 12px;
}

h2 {
  font-size: 20px;
  padding-left: 5px;
}

h3 {
  position: absolute;
  right: 30px;
  z-index: 0.1;
  padding: 2px 5px;
  font-size: 16px;
  border-style: double;
  border-color: #00c0a3;
  font-weight: 600;
}

.card p {
  padding: 5px;
  margin: 15px 0;
  font-size: 16px;
}

li {
  list-style: none;
}

.card {
  margin-bottom: 20px;
  background-color: white;
  border-radius: 20px;
}

.addButton {
  position: absolute;
  right: 15px;
  top: 5px;
}
</style>
