import Vue from 'vue'
import Vuex from 'vuex'

import Authentication from './actions/authentication'
import User from './actions/user'
import Cart from './actions/cart'
import History from './actions/history'
import Comment from './actions/comment'
import Products from './actions/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    fullname: 'User',
    user: {},
    cart: [],
    products: []
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
    },
    setProducts: (state, products) => {
      state.products = products
    }
  },
  actions: {
    ...Authentication,
    ...User,
    ...Cart,
    ...History,
    ...Comment,
    ...Products
  },
  modules: {
  }
})
