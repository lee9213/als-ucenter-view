import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import login from './modules/login'
import logout from './modules/logout'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    login,
    logout
  },
  getters
})

export default store
