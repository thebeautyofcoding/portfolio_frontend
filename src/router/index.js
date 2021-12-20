import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'

import SkillCardList from '../components/SkillCardList.vue'
import Hero from '../components/Hero.vue'
import PortfolioList from '../components/PortfolioList.vue'
import Home from '../views/Home.vue'
import Contact from '../components/Contact'
import PortfolioUpload from '../components/PortfolioUpload'
import SkillCardUpload from '../components/SkillCardUpload'
import AboutMe from '../components/AboutMe'

const routes = [

  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutMe,
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

  },
  {
    path: '/projects/upload',
    name: 'PortfolioUpload',
    component: PortfolioUpload,

  },
  {
    path: '/skills/upload',
    name: 'SkillCardUpload',
    component: SkillCardUpload,

  },

  {
    path: '/skills',
    name: 'SkillCardList',
    component: SkillCardList,

  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,

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
