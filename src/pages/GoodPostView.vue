<template>
  <div class="all">
    <BackButton />
    <div class="container">
      <main>
        <div class="main-content">
          <ul>
            <li v-for="hobby in hobbies" :key="hobby.id" class="card">
              <img :src="hobby.img" class="store-photo" />
              <div class="discription">
                <GoodButton />
                <h2>{{ hobby.date }}</h2>
                <p class="mainText">{{ hobby.mainText }}</p>
                <router-link to="/shopinfomation">#{{ hobby.tag }}</router-link>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import GoodButton from "../components/GoodButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
    GoodButton,
  },
  mounted() {
    // alert("いいねした投稿を取得する");
  },
  data() {
    return {
      hobby: {
        img: "画像",
        goodCount: "いいね数",
        mainText: "説明",
        date: "日付",
        tag: "タグ",
      },
      hobbies: [
        {
          id: 1,
          img: "image/soccer03.jpeg",
          goodCount: "25",
          mainText: "楽しかった！！また行きたい！！",
          date: "2024-07-14",
          tag: "豊洲公園",
        },
        {
          id: 2,
          img: "image/soccer02.jpg",
          goodCount: "12",
          mainText: "息子が楽しそうにしていてほっこりしました。",
          date: "2024-08-21",
          tag: "新宿広場",
        },
        {
          id: 3,
          img: "image/soccer01.jpg",
          goodCount: "4",
          mainText: "芝がしっかり整備されていて快適にプレイできました！",
          date: "2024-04-03",
          tag: "大井スタジアム",
        },
      ],
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
</style>
