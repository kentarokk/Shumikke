<template>
  <div class="Add-button">
    <i class="fa-solid fa-plus" @click="toggleAdd" :class="{ Added: isAdded }">
    </i>
  </div>
</template>

<script>
export default {
  name: "AddButton",
  props: {},
  data() {
    return {
      AddCount: 0,
      isAdded: false,
    };
  },
  methods: {
    toggleAdd() {
      if (this.isAdded) {
        alert("すでに追加されています");
      } else {
        this.AddCount += 1;
        alert("やりたい趣味リストに追加");
        this.isAdded = !this.isAdded;
      }
    },
  },
};
</script>

<style scoped>
.Add-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  padding: 2px 5px;
  border-style: double;
  border-color: #00c0a3;
  border-radius: 5px;
}

.Add-button i {
  font-size: 24px;
  color: #e7e7e7;
  transition: color 0.3s;
}

.Add-button i.Added {
  color: #00c0a3;
}

.Add-button span {
  margin-left: 8px;
  font-size: 18px;
  color: #333;
}
</style>
