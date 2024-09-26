<template>
  <div class="like-button">
    <i class="fas fa-thumbs-up" @click="toggleLike" :class="{ liked: isLiked }">
    </i>
    <span>{{ likeCount }}</span>
  </div>
</template>

<script>
export default {
  name: "GoodButton",
  props: {},
  data() {
    return {
      likeCount: 0,
      isLiked: false,
    };
  },
  methods: {
    toggleLike() {
      if (this.isLiked) {
        this.likeCount -= 1;
        alert("いいねした投稿リストから削除");
      } else {
        this.likeCount += 1;
        alert("いいねした投稿リストに追加");
      }
      this.isLiked = !this.isLiked;
    },
  },
};
</script>

<style scoped>
.like-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 30px;
  z-index: 0.9;
  padding: 2px 5px;
  border-style: double;
  border-color: #00c0a3;
  font-weight: 600;
}

.like-button i {
  font-size: 24px;
  color: #e7e7e7;
  transition: color 0.3s;
}

.like-button i.liked {
  color: #00c0a3;
}

.like-button span {
  margin-left: 8px;
  font-size: 18px;
  color: #333;
}
</style>
