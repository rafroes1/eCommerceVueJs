export default {
  getProducts: async ({ commit }) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/products`, {
      method: 'GET',
      credentials: 'include'

    })
    const data = await response.json()
    commit('setProducts', data)
  },

  getProductById: async ({ commit }, id) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/products/${id}`, {
      method: 'GET',
      credentials: 'include'

    })

    const data = await response.json()
    return data
  }
}
