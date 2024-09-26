import { createRouter, createWebHistory } from "vue-router";
import SuggestPage from "./pages/SuggestPage.vue";
import Login from "./pages/Login.vue";
import store from "@/store/index";
import { Hub } from "@aws-amplify/core";
import { getCurrentUser } from "aws-amplify/auth";

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

let user;

async function getUser() {
  const user = await getCurrentUser();

  if (user) {
    store.commit("setUser", user);
    return user;
  } else {
    store.commit("setUser", null);
    return null;
  }
}

// ユーザー管理
getUser().then((user) => {
  if (user) {
    router.push({ path: "/" });
  }
});

// // ログイン状態管理
// Hub.listen("auth", async (data) => {
//   if (data.payload.event === "signOut") {
//     user = null;
//     store.commit("setUser", null);
//     router.push({ path: "/login" });
//   } else if (data.payload.event === "signIn") {
//     user = await getUser();
//     router.push({ path: "/" });
//   }
// });

const routes = [
  {
    path: "/",
    name: "SuggestPage",
    component: SuggestPage,
    meta: { requiresAuth: true },
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
    meta: { pageTitle: "新しく趣味を登録する" },
  },
  {
    path: "/goodpostview",
    component: GoodPostView,
    meta: { pageTitle: "いいねした投稿" },
  },
  {
    path: "/passwordchange",
    component: PasswordChange,
    meta: { pageTitle: "パスワード変更画面" },
  },
  {
    path: "/emailchange",
    component: EmailChange,
    meta: { pageTitle: "メールアドレス変更画面" },
  },
  {
    path: "/addmyhobby",
    component: AddMyHobby,
    meta: { pageTitle: "新しいMY趣味を追加する" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// リダイレクト設定
router.beforeResolve(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    user = await getUser();
    if (!user) {
      return next({
        path: "/login",
      });
    }
    return next();
  }
  return next();
});

export default router;

// import { createRouter, createWebHistory } from "vue-router";
// import SuggestPage from "./pages/SuggestPage.vue";
// import Login from "./pages/Login.vue";

// const routes = [
//   {
//     path: "/",
//     name: "SuggestPage",
//     component: SuggestPage,
//     meta: { requiresAuth: true },
//   },
//   { path: "/login", name: "LoginPage", component: Login },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// router.beforeResolve(async (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     user = await getUser();
//     if (!user) {
//       return next({
//         path: "/login",
//       });
//     }
//     return next();
//   }
//   return next();
// });

// export default router;
