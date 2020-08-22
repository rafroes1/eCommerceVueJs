export default {
  history: async ({ commit }) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/history`, {
      method: 'GET',
      credentials: 'include'
    })

    return response
  }
}
