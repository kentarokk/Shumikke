<template>
  <div class="header">
    <img :src="profileImageUrl" class="logo" />
    <div class="pageTitle">
      <p>{{ pageTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImageUrl: "image/AdobeStock_505447855_Preview.jpeg",
    };
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
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
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.header p {
  color: white;
  font-weight: 600;
}

.logo {
  width: 40px;
  padding: 10px;
  border-radius: 50%;
}
.pageTitle {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 2px;
  margin: 0 auto;
}
.pageTitle p {
  color: white;
  font-size: 22px;
}
</style>
