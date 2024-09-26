import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
    count: 3,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addCount(state) {
      state.count++;
    },
  },
  getters: {
    isSignIn: (state) => {
      return state.user !== null;
    },
  },
  actions: {},
  modules: {},
});

export default store;
