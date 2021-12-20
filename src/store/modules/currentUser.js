const state = {
  currentUser: {
    access_token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    currentUser: JSON.parse(localStorage.getItem('user'))
  }
}

const mutations = {
  setCurrentUser (state, user) {
    state.currentUser.currentUser = user
  },
  setAccessToken (state, token) {
    state.currentUser.access_token = token
  }
}

const actions = {
  async register ({ commit }, data) {

    const res = await window.api.post('/register', data)
    commit('setCurrentUser', res.data.user)
    commit('setAccessToken', res.data.access_token)
    localStorage.setItem('user', JSON.stringify(res.data.user))
    localStorage.setItem('token', res.data.access_token)
    return res

  },

  async login ({ commit }, data) {
    const res = await window.api.post('/login', data)
    commit('setCurrentUser', res.data.user)
    commit('setAccessToken', res.data.access_token)
    localStorage.setItem('user', JSON.stringify(res.data.user))
    localStorage.setItem('token', res.data.access_token)
    return res

  }
}

export default {
  state, actions, mutations
}
