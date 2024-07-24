import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'Hello Vuex'
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload;
    }
  },
  actions: {  
    updateMessage({ commit }, message) {
      commit('setMessage', message);
    }
  },
  getters: {
    message: state => state.message
  }
});