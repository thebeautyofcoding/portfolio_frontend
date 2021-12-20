const state = {
  skills: []
}

const mutations = {
  setSkills (state, skills) {
    state.skills = skills
  }
}

const actions = {
  async getSkills ({ commit }) {
    console.log(window.api)
    const res = await window.api.get('/skillcards')
    commit('setSkills', res.data.skills)
    return res

  },

  async postSkill ({ commit, rootState }, data) {
    const token = `Bearer ${rootState.currentUser.currentUser.access_token}` ? `Bearer ${rootState.currentUser.currentUser.access_token}` : `Bearer ${localStorage.getItem('token')} `
    const res = await window.api.post(`/skillcards`, data, {
      headers: {
        'Authorization': token,
        'Content-Type': 'multipart/form-data'

      }
    })

    return res

  },

}

export default {
  state, actions, mutations
}
