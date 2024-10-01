<template>
  <div id="app">
    <div class="Wrapper">
      <div class="main">
        <ul class="cardWrapper">
          <li v-for="hobby in hobbies" :key="hobby.id" class="card">
            <router-link class="router" to="/hobbypost">
              <img :src="getImageUrl(hobby.image)" />
              <p>{{ hobby.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get(
        "https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/todo_hobby?user_id=27241a58-8041-70f7-fb7f-0ffac79afb6b"
      )
      .then((response) => {
        this.hobbies = response.data.map(hobby => ({
          ...hobby,
          image: this.getImageUrl(hobby.image)
        }));
      })
      .catch((error) => {
        console.error("Error fetching hobbies:", error);
      });
  },
  data() {
    return {
      hobbies: [],
    };
  },
  methods: {
    getImageUrl(s3Url) {
      if (s3Url.startsWith("s3://")) {
        return s3Url.replace("s3://smk-data-bucket", "https://smk-data-bucket.s3.ap-northeast-1.amazonaws.com");
      }
      return s3Url;
    }
  }
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
