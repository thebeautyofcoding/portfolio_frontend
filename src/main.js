import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "core-js/stable"
import "regenerator-runtime/runtime"

import axios from 'axios'
import './assets/tailwind.css'


const config = {
  baseURL: process.env.VUE_APP_BASE_URL,
}

const api = axios.create(config)

window.api = api

const app = createApp(App)

app.use(store).use(router).mount('#app')
