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
            @click="deselectHobby(hobby.name)"
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

export default {
  data() {
    return {
      hobbies: [],
      selectedHobbies: [],
      availableHobbies: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/hobby?user_id=27241a58-8041-70f7-fb7f-0ffac79afb6b"
      )
      .then(response => {
        this.hobbies = response.data;
        this.updateAvailableHobbies();
      })
      .catch(error => {
        console.error("データの取得に失敗しました:", error);
      });
  },
  methods: {
    updateAvailableHobbies() {
      this.availableHobbies = this.hobbies.filter(
        (hobby) => !this.selectedHobbies.some(selected => selected.hobbies_name === hobby.hobbies_name)
      );
    },
    selectHobby(hobby) {
      this.selectedHobbies.push(hobby);
      this.updateAvailableHobbies();
    },
    deselectHobby(hobbyName) {
      this.selectedHobbies = this.selectedHobbies.filter(
        (selected) => selected.hobbies_name !== hobbyName
      );
      this.updateAvailableHobbies();
    },
    submitHobbies() {
      alert("MY趣味リストを更新");
      axios
        .post(
          "https://pq0br03i97.execute-api.ap-northeast-1.amazonaws.com/dev/hobby?user_id=27241a58-8041-70f7-fb7f-0ffac79afb6b&hobby_id=8"
        )
        .then(response => {
          this.hobbies = response.data;
          this.updateAvailableHobbies();
        })
        .catch(error => {
          console.error("データの取得に失敗しました:", error);
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

/* 小さいデバイス用スタイル */
@media (max-width: 480px) {
  .app-container {
    max-width: 100%;
  }

  .hobby-label {
    font-size: 0.9em;
  }

  .selected-hobbies .hobby-label.selected {
    font-size: 0.9em;
  }
}

.submit-btn {
  margin: 20px 0 0 0;
  width: 20%;
  padding: 10px;
  border-radius: 10px;
  background-color: #00c0a3;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
}
</style>
