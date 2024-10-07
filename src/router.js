import { createRouter, createWebHistory } from "vue-router";

import SuggestPage from "./pages/SuggestPage.vue";
import Login from "./pages/Login.vue";
import TodoHobbyList from "./pages/TodoHobbyList.vue";
import HobbyPost from "./pages/HobbyPost.vue";
import MyPage from "./pages/MyPage.vue";
import PostingScreen from "./pages/PostingScreen.vue";
import ShopInfomation from "./pages/ShopInfomation.vue";
import AddHobby from "./pages/AddHobby.vue";
import GoodPostView from "./pages/GoodPostView.vue";
import PasswordChange from "./pages/PasswordChange.vue";
import EmailChange from "./pages/EmailChange.vue";
import AddMyHobby from "./pages/AddMyHobby.vue";
import axios from 'axios';

const routes = [
  {
    path: "/",
    name: "SuggestPage",
    component: SuggestPage,
    meta: {
      requiresAuth: true,
      pageTitle: "メインページ"
    },
  },
  { path: "/login", name: "LoginPage", component: Login },
  {
    path: "/todohobbylist",
    component: TodoHobbyList,
    meta: { pageTitle: "やりたい趣味リスト" },
  },
  {
    path: "/hobbypost",
    component: HobbyPost,
    meta: { pageTitle: "投稿を見る" },
  },
  { path: "/mypage", component: MyPage, meta: { pageTitle: "マイページ" } },
  {
    path: "/postingScreen",
    component: PostingScreen,
    meta: { pageTitle: "投稿する" },
  },
  {
    path: "/shopinfomation",
    component: ShopInfomation,
    meta: { pageTitle: "店舗情報" },
  },
  {
    path: "/addhobby",
    component: AddHobby,
    meta: { pageTitle: "新しく趣味を登録" },
  },
  {
    path: "/goodpostview",
    component: GoodPostView,
    meta: { pageTitle: "いいねした投稿" },
  },
  {
    path: "/passwordchange",
    component: PasswordChange,
    meta: { pageTitle: "パスワード変更" },
  },
  {
    path: "/emailchange",
    component: EmailChange,
    meta: { pageTitle: "メールアドレス変更" },
  },
  {
    path: "/addmyhobby",
    name: "AddMyHobby",
    component: AddMyHobby,
    meta: { pageTitle: "新しくMY趣味を追加" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// beforeEachで趣味のチェック
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // 認証が必要な場合
  if (requiresAuth) {
    // ここではユーザーの趣味が登録されているかをチェックするロジックを追加
    const hasHobbies = await checkUserHobbies(); // 趣味の確認

    if (!hasHobbies && to.name !== 'AddMyHobby') {
      // 趣味が登録されていない場合はAddMyHobbyページにリダイレクト
      return next({ name: 'AddMyHobby' });
    }

    next(); // 趣味がある場合は次のページへ
  } else {
    next(); // 認証が不要なページはそのまま進む
  }
});

// ユーザーの趣味が登録されているかどうかを確認する関数
async function checkUserHobbies() {
  try {
    const response = await getUserHobbiesFromAPI(); // APIから趣味を取得
    return response.data.length > 0; // 趣味が1つ以上あれば true を返す
  } catch (error) {
    console.error("趣味取得時のエラー: ", error);
    return false; // エラー発生時は趣味がないとみなす
  }
}

async function getUserHobbiesFromAPI() {
  try {
    // APIを呼び出してユーザーの趣味データを取得
    const userId = "YOUR_USER_ID"; // ユーザーIDを適切に設定
    const response = await axios.get(`/api/hobbies/${userId}`);
    return response.data; // APIのレスポンスを返す
  } catch (error) {
    console.error("趣味取得時のエラー: ", error);
    return []; // API呼び出しが失敗した場合は空の配列を返す
  }
}


export default router;
