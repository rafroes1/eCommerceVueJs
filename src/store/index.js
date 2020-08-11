import Vue from 'vue'
import Vuex from 'vuex'

import Authentication from './actions/authentication'
import User from './actions/user'
import Cart from './actions/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    fullname: 'User',
    user: {},
    cart: []
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
    },
    setCart: (state, cart) => {
      state.cart = cart
    }
  },
  actions: {
    ...Authentication,
    ...User,
    ...Cart
  },
  modules: {
  }
})
