<template>
  <div class="app-container">
    <BackButton />
    <div class="form-section">
      <h1>趣味を追加</h1>

      <form action="/submit" method="post" enctype="multipart/form-data">
        <!-- タイトル入力 -->
        <label for="title">趣味の名前:</label><br />
        <input type="text" id="title" name="title" required /><br /><br />

        <!-- 画像入力 -->
        <label for="image">画像:</label><br />
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          required
        /><br /><br />

        <!-- 説明入力 -->
        <label for="description">説明:</label><br />
        <textarea
          id="description"
          name="description"
          rows="5"
          required
        ></textarea
        ><br /><br />

        <!-- 確認ボタン -->
        <button type="submit">確認</button>
      </form>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  data() {
    return {};
  },
  methods: {
    alert() {
      alert("登録した趣味リストに追加");
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

.app-container {
  background: #e7e7e7;
  padding: 20px;
  height: 564px;
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
input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: white;
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

h1 {
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
  text-align: center;
}

@media (max-width: 768px) {
  .form-section {
    padding: 15px;
  }

  textarea {
    height: 80px;
  }

  button {
    padding: 8px;
    height: 40px;
  }

  h1 {
    font-size: 1.3em;
  }
}

@media (max-width: 480px) {
  .form-section {
    padding: 10px;
  }

  textarea {
    height: 60px;
  }

  button {
    font-size: 0.9em;
    padding: 6px;
  }

  h1 {
    font-size: 1.2em;
  }
}
</style>
