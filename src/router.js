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

const routes = [
  {
    path: "/",
    name: "SuggestPage",
    component: SuggestPage,
    meta: {
      requiresAuth: true,
      pageTitle: "おすすめの趣味",
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
    meta: { pageTitle: "投稿" },
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

export default router;
