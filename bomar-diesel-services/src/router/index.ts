import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const routes = [
  { path: '/', name: 'home', component: LandingPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})