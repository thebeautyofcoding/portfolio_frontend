import { createStore } from 'vuex'
import currentUser from './modules/currentUser'
import portfolios from './modules/portfolios'
import skills from './modules/skills'
import email from './modules/email'


export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    currentUser, portfolios, skills, email

  },
})
