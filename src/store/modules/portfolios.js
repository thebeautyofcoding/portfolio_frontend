const state = {
  portfolios: [],
  showPortfolioDialog: false,
  currentPostInModal: {
    comments: []
  },
  comments: []
}

const mutations = {
  setCommentsOfPortfolio (state, comments) {
    state.comments = comments
  },
  AddCommentToCommentList (state, comment) {
    state.currentPostInModal.comments.push(comment)
  },
  setPortfolios (state, portfolios) {
    state.portfolios = portfolios
  },

  setCurrentPortfolioInModal (state, portfolio) {
    state.currentPostInModal = portfolio
  },
  setShowPortfolioDialog (state, yesOrNo) {
    state.showPortfolioDialog = yesOrNo
  },
  updateCurrentPortfolioCommentList (state, id) {
    state.currentPostInModal.comments = state.currentPostInModal.comments.filter(comment => {
      return comment.id !== id
    })
  }
}

const actions = {

  async getCommentsOfPortfolio ({ commit, rootState }, id) {
    // console.log(data)
    // const token = `Bearer ${rootState.currentUser.currentUser.access_token}` ? `Bearer ${rootState.currentUser.currentUser.access_token
    //   }` : `Bearer ${localStorage.getItem('token')
    //   } `
    const res = await window.api.get(`/portfolios/${id}/comments`, {
      headers: {
        'Authorization': token
      }
    })
    commit('setCommentsOfPortfolio', res.data.comments)
    return res
  },
  async postComment ({ commit, rootState }, data) {
    console.log(data)
    const token = `Bearer ${rootState.currentUser.currentUser.access_token}` ? `Bearer ${rootState.currentUser.currentUser.access_token
      }` : `Bearer ${localStorage.getItem('token')
      } `
    const res = await window.api.post(`/portfolios/${data.id}/comments`, { content: data.description }, {
      headers: {
        'Authorization': token
      }
    })
    commit('AddCommentToCommentList', res.data.comment)
    return res
  },
  async getPortfolios ({ commit }) {

    const res = await window.api.get('/portfolios')
    commit('setPortfolios', res.data.portfolios)
    return res

  },
  async getPortfolioById ({ commit }, id) {
    console.log(id)
    const res = await window.api.get(`/portfolios/${id}`)
    commit('setCurrentPortfolioInModal', res.data.portfolio)
    return res
  },

  setShowPortfolioDialog ({ commit }) {
    commit("setShowPortfolioDialog", true)
  },


  async likeOrUnlike ({ commit, rootState }, id) {

    const token = `Bearer ${rootState.currentUser.currentUser.access_token}` ? `Bearer ${rootState.currentUser.currentUser.access_token
      }` : `Bearer ${localStorage.getItem('token')
      } `
    const res = await window.api.post(`/portfolios/${id}/like`, {}, {
      headers: {
        'Authorization': token
      }
    })
    commit('setCurrentPortfolioInModal', res.data.post)
    return res
  },
  async dislikeOrUnlike ({ commit, rootState }, id) {
    console.log(id)
    const token = `Bearer ${rootState.currentUser.currentUser.access_token}` ? `Bearer ${rootState.currentUser.currentUser.access_token}` : `Bearer ${localStorage.getItem('token')} `
    const res = await window.api.post(`/portfolios/${id}/dislike`, {}, {
      headers: {
        'Authorization': token
      }
    })
    commit('setCurrentPortfolioInModal', res.data.post)
    return res
  },

  async deleteComment ({ commit, rootState }, commentId) {
    const token = `Bearer ${rootState.currentUser.currentUser.access_token}` ? `Bearer ${rootState.currentUser.currentUser.access_token}` : `Bearer ${localStorage.getItem('token')} `
    const res = await window.api.delete(`/portfolios/${commentId}/comments`, {
      headers: {
        'Authorization': token
      }
    })
    commit('updateCurrentPortfolioCommentList', commentId)
    return res
  },

  async send ({ commit, rootState }, data) {
    console.log(data)
    const token = `Bearer ${rootState.currentUser.currentUser.access_token}` ? `Bearer ${rootState.currentUser.currentUser.access_token}` : `Bearer ${localStorage.getItem('token')} `
    const res = await window.api.post(`/portfolios`, data, {
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
