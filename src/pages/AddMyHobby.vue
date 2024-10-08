<template>
  <div class="allWrapper">
    <div class="app-container">
      <div class="selected-hobbies">
        <h3>選択された趣味タグ</h3>
        <div class="hobby-list">
          <div
            v-for="hobby in selectedHobbies"
            :key="hobby.id"
            class="hobby-label selected"
            @click="deselectHobby(hobby.id)"
          >
            {{ hobby.name }}
          </div>
        </div>
      </div>
      <div class="hobby-select-section">
        <h3>趣味タグを選んでください</h3>
        <div class="hobby-list">
          <div
            v-for="hobby in availableHobbies"
            :key="hobby.id"
            class="hobby-label"
            @click="selectHobby(hobby)"
          >
            {{ hobby.name }}
          </div>
        </div>
        <button class="submit-btn" @click="submitHobbies">完了</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { get_user_id } from "@/util";

export default {
  data() {
    return {
      selectedHobbies: [],
      availableHobbies: [],
      userId: null,
    };
  },
  async mounted() {
    this.userId = await get_user_id();

    if (this.userId) {
      try {
        const selectedResponse = await axios.get(
          `https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/hobby?user_id=${this.userId}`
        );
        this.selectedHobbies = selectedResponse.data;

        const allResponse = await axios.get(
          "https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/allhobby"
        );
        const allHobbies = allResponse.data;

        this.availableHobbies = allHobbies.filter(
          hobby => !this.selectedHobbies.some(selected => selected.id === hobby.id)
        );
      } catch (error) {
        console.error("趣味のデータ取得に失敗しました:", error);
      }
    }
  },
  methods: {
    selectHobby(hobby) {
      this.selectedHobbies.push(hobby);
      this.availableHobbies = this.availableHobbies.filter(
        available => available.id !== hobby.id
      );
    },
    deselectHobby(hobbyId) {
      const deselectedHobby = this.selectedHobbies.find(hobby => hobby.id === hobbyId);

      if (deselectedHobby) {
        this.selectedHobbies = this.selectedHobbies.filter(hobby => hobby.id !== hobbyId);
        
        this.availableHobbies.push(deselectedHobby);
      }
    },
    submitHobbies() {
      alert("MY趣味リストを更新します");
      const hobbyIds = this.selectedHobbies.map(hobby => hobby.id);

      axios
        .post(
          `https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/hobby?user_id=${this.userId}`,
          { hobby_ids: hobbyIds }
        )
        .then(response => {
          console.log("趣味リストが更新されました:", response.data);
        })
        .catch(error => {
          console.error("趣味リストの更新に失敗しました:", error);
        });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.allWrapper {
  display: flex;
  justify-content: center;
  height: 100%;
  background: #e7e7e7;
}

.app-container {
  height: auto;
  max-width: 375px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: #e7e7e7;
}

.hobby-select-section {
  text-align: center;
  margin-top: 20px;
}

.hobby-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.hobby-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.hobby-label:hover {
  transform: scale(1.05);
}

.selected-hobbies {
  text-align: center;
  margin: 0 5px 10px 0;
}

.selected-hobbies .hobby-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.selected-hobbies .hobby-label.selected {
  background: #00c0a3;
  color: white;
}

.submit-btn {
  position:fixed;
  bottom: 80px;
  z-index: 2;
  width: 20%;
  padding: 10px;
  border-radius: 10px;
  background-color: #00c0a3;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  right: 30px;
}
</style>
