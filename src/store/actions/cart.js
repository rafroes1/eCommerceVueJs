export default {
  cart: async ({ commit }) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/cart`, {
      method: 'GET',
      credentials: 'include'
    })

    const data = await response.json()
    commit('setCart', data)
  },
  add: async ({ commit }, payload) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/cart/add`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    return response
  },
  update: async ({ commit }, payload) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/cart/update`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    return response
  },
  remove: async ({ commit }, id) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/cart/remove/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response
  },
  clear: async ({ commit }) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/cart/clear`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response
  }
}
