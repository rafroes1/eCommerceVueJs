export default {
  getCommentForId: async ({ commit }, id) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/comments/${id}`, {
      method: 'GET',
      credentials: 'include'
    })

    return response
  },
  addComment: async ({ commit }, payload) => {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/comments`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    return response
  }
}
