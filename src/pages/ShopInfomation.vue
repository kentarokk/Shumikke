<template>
  <div class="all">
    <BackButton />
    <div class="allWrapper">
      <div class="container">
        <div class="main-content">
          <img :src="img" class="store-photo" />
          <div class="description">
            <h2>{{ title }}</h2>
            <p>{{ discription }}</p>
            <p>TEL:{{ tel }}</p>
            <p>住所:{{ address }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  mounted() {
    alert("ビジネスごとのビジネス情報を取得する");
  },
  data() {
    return {
      title: "豊洲公園",
      discription: "自然豊かな公園です。",
      img: "image/pathway-3596034_1280.jpg",
      tel: "012-3456-7890",
      address: "東京都",
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.allWrapper {
  background-color: #e7e7e7;
  height: 600px;
}

.container {
  margin: 0;
  display: flex;
  justify-content: center;
  height: 430px;
  background-color: white;
}

.store-photo {
  width: 350px;
  position: relative;
  justify-content: center;
  border-radius: 20px;
  padding: 10px;
}

.description {
  text-align: left;
  padding: 0px 20px 20px 20px;
}

.description h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.description p {
  font-size: 18px;
  margin: 5px 0;
}
</style>
