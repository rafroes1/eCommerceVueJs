export default {
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
}
