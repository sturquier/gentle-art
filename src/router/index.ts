import type { defineComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home/Home.vue'
import Scissor from '@/views/Sweeps/Scissor/Scissor.vue'

export interface Route {
  label: string
  path?: string
  component?: ReturnType<typeof defineComponent>
  children?: Array<{
    label: string
    path: string
    component: ReturnType<typeof defineComponent>
  }>
}

export const routes: Array<Route> = [
  { label: 'Home', path: '/', component: Home },
  { label: 'Sweeps', children: [
    { label: 'Scissor sweep', path: '/sweeps/scissor', component: Scissor }
  ]}
]

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

routes.forEach(route => {
  if (route.component && route.path) {
    router.addRoute({ path: route.path, component: route.component })
  }

  if (route.children) {
    route.children.forEach(child => {
      router.addRoute({ path: child.path, component: child.component })
    })
  }
})

export default router
