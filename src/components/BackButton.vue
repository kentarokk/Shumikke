<template>
  <div>
    <!-- ボタンを常に表示 -->
    <button @click="goBack" class="back-button">
      <!-- アイコンを描画 (曲がった矢印) -->
      <i class="arrow-icon">&larr;</i>
    </button>
  </div>
</template>

<script>
export default {
  name: "BackButton",
  methods: {
    goBack() {
      this.$router.go(-1); // 前のページに戻る
    },
  },
};
</script>

<style scoped>
.back-button {
  z-index: 2;
  position: fixed;
  bottom: 70px;
  right: 20px;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.back-button:hover {
  opacity: 0.8;
}

.arrow-icon {
  font-size: 35px;
  padding: 0 0 5px;
  color: black;
}
</style>
