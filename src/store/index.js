import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabbarIndex: "",
    applyOfWithdrawal: "",
  },
  mutations: {
    setTabbarIndex(state, data) {
      state.tabbarIndex = data;
    },
    applyOfWithdrawal(state, data){
      state.applyOfWithdrawal = data;
    }
  },
  actions: {},
  modules: {}
});
