import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    fullname: 'User',
    user: {}
  },
  mutations: {
    isLoggedIn: (state, isLoggedIn) => {
      state.isLoggedIn = isLoggedIn
    },
    setFullname: (state, name) => {
      state.fullname = name
    },
    setUser: (state, user) => {
      state.user = user
    }
  },
  actions: {
    login: async ({ commit }, payload) => {
      const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/authentication/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()
      commit('isLoggedIn', data.isLoggedIn)
      return data
    },
    profile: async ({ commit }) => {
      const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/user`, {
        method: 'GET',
        credentials: 'include'
      })

      const data = await response.json()
      commit('setFullname', data.fullname)
      commit('setUser', data)
    },
    changePassword: async ({ commit }, payload) => {
      const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/user/change-password`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      return response
    }
  },
  modules: {
  }
})
