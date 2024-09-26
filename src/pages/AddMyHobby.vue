<template>
  <div class="allWrapper">
    <div class="app-container">
      <div class="selected-hobbies">
        <h3>選択された趣味タグ</h3>
        <div class="hobby-list">
          <!-- 選択された趣味リスト -->
          <div
            v-for="hobby in selectedHobbies"
            :key="hobby"
            class="hobby-label selected"
            @click="deselectHobby(hobby)"
          >
            {{ hobby }}
          </div>
        </div>
      </div>
      <div class="hobby-select-section">
        <h3>趣味タグを選んでください</h3>
        <div class="hobby-list">
          <!-- 選択可能な趣味リスト -->
          <div
            v-for="hobby in availableHobbies"
            :key="hobby"
            class="hobby-label"
            @click="selectHobby(hobby)"
          >
            {{ hobby }}
          </div>
        </div>
        <button class="submit-btn" @click="submitHobbies">完了</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hobbies: [
        "映画鑑賞",
        "音楽",
        "カフェ巡り",
        "アウトドア",
        "スポーツ",
        "料理",
        "読書",
        "ゲーム",
        "旅行",
      ],
      selectedHobbies: ["サッカー", "けん玉", "アニメ鑑賞"], // 初期に選択済みの趣味
      availableHobbies: [], // 選択可能な趣味リスト
    };
  },
  mounted() {
    alert("My趣味リストを取得する&全趣味リストを取得する");
  },
  created() {
    this.updateAvailableHobbies(); // 初期ロード時に選択可能な趣味リストを設定
  },
  methods: {
    // 選択可能な趣味リストを更新
    updateAvailableHobbies() {
      this.availableHobbies = this.hobbies.filter(
        (hobby) => !this.selectedHobbies.includes(hobby)
      );
    },
    // 趣味を選択
    selectHobby(hobby) {
      // 選択した趣味を selectedHobbies に追加し、availableHobbies から削除
      this.selectedHobbies.push(hobby);
      this.updateAvailableHobbies();
    },
    // 趣味を解除
    deselectHobby(hobby) {
      // 解除した趣味を selectedHobbies から削除し、availableHobbies に戻す
      this.selectedHobbies = this.selectedHobbies.filter(
        (selected) => selected !== hobby
      );
      this.updateAvailableHobbies();
    },
    submitHobbies() {
      alert("MY趣味リストを更新");
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
