import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'

import SkillCardList from '../components/SkillCardList.vue'
import Hero from '../components/Hero.vue'
import PortfolioList from '../components/PortfolioList.vue'
import Home from '../views/Home.vue'
import Contact from '../components/Contact'

const routes = [

  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/projects',
    name: 'PortfolioList',
    component: PortfolioList,
    meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut'
    }
  },

  {
    path: '/skills',
    name: 'SkillCardList',
    component: SkillCardList,
    meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut'
    }
  },
  {
    path: '/',
    name: 'Hero',
    component: Hero,
    meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
