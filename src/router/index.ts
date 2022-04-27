import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About/About.vue')
    }
  ]
})

export default router
