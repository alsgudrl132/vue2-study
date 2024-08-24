import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // data와 비슷
    allUsers: [
      {
        userId: "hoza123",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: "https://goo.gl/oqLfJR",
      },
      {
        userId: "max123",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: "https://goo.gl/Ksk9B9",
      },
      {
        userId: "lego123",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: "https://goo.gl/x7SpCD",
      },
    ],
  },
  getters: {
    // computed와 비슷 , 다른점으론 파라미터로 state를 사용하겠다고 선언해줘야함
    allUsersCount: function (state) {
      return state.allUsers.length;
    },
    countOfSeoul: function (state) {
      let count = 0;
      state.allUsers.forEach((user) => {
        if (user.address === "Seoul") count++;
      });
      return count;
    },
    percentOfSeoul: function (state, getters) {
      return Math.round((getters.countOfSeoul / getters.allUsersCount) * 100);
    },
  },
  mutations: {
    // state 즉 Data를 변화시키려면 mutations을 사용해야함
    addUsers(state, payload) {
      state.allUsers.push(payload);
    },
  },
  actions: {
    // mutations는 동기지만 actions을사용하면 비동기로 작용함
    addUsers({ commit }, payload) {
      // context, payload
      // 여기선 {commit}이 context역할을 해줌
      commit("addUsers", payload);
    },
  },
});
