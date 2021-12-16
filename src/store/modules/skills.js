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

}

export default {
  state, actions, mutations
}
