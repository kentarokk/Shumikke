<template>
  <div class="Add-button">
    <i
      class="fa-solid fa-plus"
      @click="addTodoHobby"
      :class="{ Added: isAdded }"
    >
    </i>
  </div>
</template>

<script>
import axios from "axios";
import { get_user_id } from "@/util"; // ユーザーIDを取得するための関数

export default {
  name: "AddButton",
  props: {
    hobbyId: {
      type: String, // 趣味IDの型を指定（文字列）
      required: true, // 必須のprops
    },
  },
  data() {
    return {
      isAdded: false,
    };
  },
  methods: {
    async addTodoHobby() {
      if (this.isAdded) {
        alert("すでに追加されています");
        return;
      }

      try {
        const userId = await get_user_id(); // ユーザーIDを取得

        // APIにリクエストを送信
        const response = await axios.post(
          `https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/todo_hobby?user_id=${userId}&hobby_id=${this.hobbyId}`
        );

        if (response.status === 200) {
          this.isAdded = true; // 登録成功後にフラグを更新
        } else {
        }
      } catch (error) {
        console.error("Error adding hobby:", error);
        alert("エラーが発生しました");
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
