<template>
    <div id="app">
      <div class="main">
        <button @click="test()">TEST!!</button>
        <ul class="cardWrapper">
          <li v-for="hobby in hobbies" :key="hobby.id" class="card">
            <AddButton class="addButton"></AddButton>
            <img :src="hobby.img" />
            <div class="account">
              <div class="hobbyNameWrapper">
                <router-link to="/hobbypost" class="postView"
                  >投稿を見る</router-link
                >
                <h1 class="hobbyName">{{ hobby.title }}</h1>
              </div>
              <div class="mainText">
                <p>{{ hobby.discription }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>

  <script>
  import axios from "axios";
  import AddButton from "../components/AddButton.vue";

  export default {
    components: {
      AddButton,
    },
    mounted() {
      // alert("サジェストする趣味を取得する");
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
            id: 2,
            img: "image/kendama.jpg",
            title: "けん玉",
            discription: "日本の伝統的な遊びです。",
          },
          {
            id: 3,
            img: "image/anime.jpg",
            title: "アニメ鑑賞",
            discription: "アニメを見ます。",
          },
        ],
      };
    },
    methods: {
      test() {
        axios
          .get(
            "https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/hobby?user_id=2"
          )
          .then((response) => {
            console.log(response.data);
          });
      },
    },
  };
  </script>

  <style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .main {
    background-color: #e7e7e7;
  }

  ul {
    padding-left: 0;
    display: flex;
    flex-flow: column;
  }

  li {
    list-style: none;
  }

  .main .cardWrapper {
    width: 100%;
    background-color: #e7e7e7;
  }
  .main .cardWrapper .card {
    position: relative;
    height: 200px;
    width: 90%;
    margin: 15px auto;
    border-radius: 20px;
    outline-style: solid;
    outline-color: #006c5c;
    background-color: white;
  }

  .card img {
    height: 100%;
    width: 30%;
    background-size: cover;
    object-fit: cover;
    border-radius: 20px 0 0 20px;
    position: absolute;
  }

  .card .account {
    background-color: white;
    position: absolute;
    left: 30%;
    width: 70%;
    height: 100%;
    border-radius: 0 20px 20px 0;
  }

  .postView {
    right: 30px;
    z-index: 0.9;
    padding: 2px 5px;
    font-size: 16px;
    border-style: double;
    border-color: #00c0a3;
    font-weight: 600;
  }

  .card .account .hobbyNameWrapper {
    position: absolute;
    height: 20%;
    width: 100%;
    border-radius: 0 20px 0 0;
    background-color: white;
  }

  .hobbyNameWrapper .postView {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 2px;
    border-radius: 10px;
    z-index: 0.1;
    font-size: 15px;
    border-style: double;
    border-color: #00c0a3;
    background-color: white;
    color: #006c5c;
  }

  .card .account .hobbyNameWrapper .hobbyName {
    font-size: 20px;
    margin: 10px;
  }

  .card .account .mainText {
    position: absolute;
    top: 20%;
    font-size: 15px;
    padding: 10px;
  }

  .addButton {
    bottom: 10px;
    right: 10px;
    z-index: 0.9;
    border-radius: 5px;
  }
  </style>

