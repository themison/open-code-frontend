import Vue from 'vue'
import Vuex from 'vuex'
import * as info from './modules/info'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    info
  },
  state: {
    info: {}
  },
  mutations: {},
  actions: {}
})
