export default {
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
  }
}
