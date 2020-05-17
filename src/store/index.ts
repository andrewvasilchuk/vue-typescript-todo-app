import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { PreserverPlugin } from '@/plugins/preserver'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {},
  modules: {},
  plugins: [PreserverPlugin],
})
