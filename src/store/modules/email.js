const state = {
  skills: []
}

const mutations = {
  setSkills (state, skills) {
    state.skills = skills
  }
}

const actions = {
  async sendEmail ({ commit }, data) {
    console.log(data)
    const res = await window.api.post('/email', data)

    return res

  },

}

export default {
  state, actions, mutations
}
