<template>
  <div id="app">
    <div class="Wrapper">
      <div class="main">
        <ul class="cardWrapper">
          <li v-for="hobby in hobbies" :key="hobby.id" class="card">
            <router-link class="router" to="/hobbypost">
              <img :src="hobby.img" />
              <p>{{ hobby.title }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    alert("やりたい趣味リストを取得する");
  },
  data() {
    return {
      hobby: {
        img: "画像",
        title: "タイトル",
        discription: "説明",
      },
      hobbies: [
        {
          id: 1,
          img: "image/soccer01.jpg",
          title: "サッカー",
          discription: "球を蹴るスポーツです。",
        },
        {
          id: 3,
          img: "image/anime.jpg",
          title: "アニメ鑑賞",
          discription: "アニメを見ます。。",
        },
        {
          id: 2,
          img: "image/kendama.jpg",
          title: "けん玉",
          discription: "日本の伝統的な遊びです。",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.Wrapper {
  height: 557px;
  width: 100%;
  background-color: #e7e7e7;
}

.main .cardWrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 0;
}

.main .cardWrapper .card {
  width: 100px;
  border-radius: 20px;
  margin: 10px 10px 30px 10px;
  outline-style: solid;
  outline-color: rgb(66, 82, 35);
}

img {
  height: 100%;
  width: 100%;
  background-size: cover;
  object-fit: cover;
  border-radius: 20px;
}

.card p {
  position: relative;
  font-size: 15px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
}
</style>
