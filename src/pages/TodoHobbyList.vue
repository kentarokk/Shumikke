<template>
  <div id="app">
    <div class="Wrapper">
      <div class="main">
        <ul class="cardWrapper">
          <li v-for="(hobby, index) in hobbies" :key="hobby.id" class="card">
            <div class="card-content">
              <button class="delete-btn" @click="removeHobby(index)">&#8211;</button>
              <router-link class="router" to="/hobbypost">
                <img :src="getImageUrl(hobby.image)" />
                <p>{{ hobby.name }}</p>
              </router-link>
            </div>
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
        "https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/hobby?user_id=27241a58-8041-70f7-fb7f-0ffac79afb6b"
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
      if (s3Url && s3Url.startsWith("s3://")) {
        return s3Url.replace("s3://smk-data-bucket", "https://smk-data-bucket.s3.ap-northeast-1.amazonaws.com");
      }
      return s3Url || 'https://via.placeholder.com/100';
    },
    removeHobby(index) {
      this.hobbies.splice(index, 1);
      axios
        .delete(
          "https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/todo_hobby?user_id=27241a58-8041-70f7-fb7f-0ffac79afb6b&hobby_id=1"
        )
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
  height: 100px;
  position: relative;
  border-radius: 20px;
  margin: 10px 10px 30px 10px;
  outline-style: solid;
  outline-color: rgb(66, 82, 35);
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.card-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.delete-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card p {
  position: relative;
  font-size: 15px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  margin-top: 5px;
}
</style>
