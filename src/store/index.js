import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabbarIndex: ""
  },
  mutations: {
    setTabbarIndex(state, data) {
      state.tabbarIndex = data;
    }
  },
  actions: {},
  modules: {}
});
