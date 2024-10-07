<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <h2>MY趣味が未登録です。<br>登録しますか？</h2>
        <div class="modal-buttons">
          <button @click="$emit('confirm')">はい</button>
          <button @click="$emit('cancel')">いいえ</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .modal-buttons button {
    width: 100px;
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  