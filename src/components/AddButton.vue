<template>
  <div class="Add-button">
    <i class="fa-solid fa-plus" @click="handleClick" :class="{ Added: isAdded }"></i>
  </div>
</template>


<script>
import axios from "axios";
import { get_user_id } from "@/util";

export default {
  name: "AddButton",
  props: {
    userId: {
      type: String,
      required: true,
    },
    hobbyId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      AddCount: 0,
      isAdded: false,
    };
  },
  methods: {
    handleClick() {
      if (this.isAdded) {
        alert("すでに追加されています");
      } else {
        this.addHobby(this.hobbyId);
      }
    },
    async addHobby(hobbyId) {
      
      const userId = await get_user_id();
      const response = await axios.post(
          `https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/todo_hobby?user_id=${userId}&hobby_id=${hobbyId}`
        );

        
       
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
