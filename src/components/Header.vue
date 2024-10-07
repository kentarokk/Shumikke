<template>
  <div class="header">
    <!-- 左側のプロフィール画像 -->
    <router-link to="/"><img :src="profileImageUrl" class="logo" /></router-link>
    
    <!-- 中央のページタイトル -->
    <div class="pageTitle">
      <p>{{ pageTitle }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      profileImageUrl: "image/shumikke.png",
    };
  },
  name: "MainHeader",
};
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  background-color: #00c0a3;
  font-size: 25px;
  font-weight: 50;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between; /* スペースを均等に分ける */
  align-items: center;
  padding: 0 10px;
}

.header p {
  color: white;
  font-weight: 600;
}

.logo {
  margin-top: 10px;
  width: 45px;
  border-radius: 50%;
  border-color: white;
}

.pageTitle {
  flex-grow: 1; /* タイトル部分が中央に来るようにする */
  display: flex;
  justify-content: center;
  align-items: center;
}

.pageTitle p {
  color: white;
  font-size: 22px;
}

.signOutBtn {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
}

.signOutBtn:hover {
  color: #ff5e5e;
}
</style>
