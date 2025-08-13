import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'home', component: LandingPage }],
})