import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    isLoggedIn: (state, isLoggedIn) => {
      state.isLoggedIn = isLoggedIn
    }
  },
  actions: {
    login: async ({ commit }, payload) => {
      const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/authentication/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Credentials: 'include'
        },
        body: JSON.stringify(payload)
      })
      if (response.status === 200) {
        commit('isLoggedIn', true)
      }
      // const data = await response.json()
    }
  },
  modules: {
  }
})
