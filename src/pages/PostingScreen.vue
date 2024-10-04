<template>
  <div class="app-container">
    <div class="post-section">
      <label for="search"></label>
      <input v-model="searchKeyword" id="search" placeholder="趣味を検索" />
      <br />
      <label for="hobby-select"></label>
      <select v-model="selectedHobby" id="hobby-select">
        <option value="0" disabled selected>趣味を選択</option>
        <option v-for="hobby in filteredHobbies" :key="hobby" :value="hobby">
          {{ hobby }}
        </option>
      </select>
      <label for="textarea"></label>
      <textarea
        v-model="newPostContent"
        id="textarea"
        placeholder="投稿内容を入力"
      ></textarea>
      <label for="post-text"></label>
      <input
        type="file"
        name="text-input"
        id="post-text"
        @change="onFileChange"
        accept="image/*"
      />
      <button @click="submitPost">投稿</button>
    </div>
    <div class="timeline-section">
      <div v-for="post in posts" :key="post.id" class="post">
        <p>{{ post.content }}</p>
        <img
          v-if="post.image"
          :src="post.image"
          alt="投稿画像"
          class="posted-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newPostContent: "",
      newPostImage: null,
      selectedHobby: "",
      searchKeyword: "",
      hobbies: ["サッカー", "けん玉", "アニメ鑑賞"], // 趣味リスト
      posts: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/allhobby"
      )
      .then(response => {
        this.hobbies = response.data;
      })
      .catch(error => {
        console.error("データの取得に失敗しました:", error);
      });
  },
  computed: {
    filteredHobbies() {
      return this.hobbies.filter((hobby) =>
        hobby.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    },
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.newPostImage = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    submitPost() {
      if (
        (this.newPostContent.trim() !== "" || this.newPostImage) &&
        this.selectedHobby !== ""
      ) {
        this.posts.push({
          id: this.posts.length + 1,
          hobby: this.selectedHobby,
          content: this.newPostContent,
          image: this.newPostImage,
        });
        this.newPostContent = "";
        this.newPostImage = null;
        this.selectedHobby = "";
      }
      alert("投稿を投稿する");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.app-container {
  height: 700px;
  background: #e7e7e7;
}

.post-section {
  padding: 20px;
  border-radius: 10px;
  color: white;
  position: relative;
}

textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

input[type="file"],
select,
input[type="text"] {
  display: block;
  margin-bottom: 10px;
  color: black;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: #00c0a3;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
}

.post {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: white;
  background-color: #fff;
}

.posted-image {
  max-width: 50%;
  height: auto;
  margin-top: 10px;
  border-radius: 10px;
}

select {
  width: 100%;
  padding: 2px;
  margin: 5px 0 15px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: white;
  box-sizing: border-box;
}

select:focus {
  border-color: #00c0a3;
  outline: none;
}

option {
  background-color: white;
}
</style>
