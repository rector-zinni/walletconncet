import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wal:""
  },
  getters: {
  },
  mutations: {
    INSERT_WALLET(state, wal){
      state.wal=wal;
},
  },
  actions: {
  },
  modules: {
  }
})
