import type { defineComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home/Home.vue'

import BackMount from '@/views/Positions/BackMount/BackMount.vue'
import ClosedGuard from '@/views/Positions/ClosedGuard/ClosedGuard.vue'
import CollarSleeveGuard from '@/views/Positions/CollarSleeveGuard/CollarSleeveGuard.vue'
import DeLaRivaGuard from '@/views/Positions/DeLaRivaGuard/DeLaRivaGuard.vue'
import HalfGuard from '@/views/Positions/HalfGuard/HalfGuard.vue'
import KneeOnChest from '@/views/Positions/KneeOnChest/KneeOnChest.vue'
import Mount from '@/views/Positions/Mount/Mount.vue'
import SideControl from '@/views/Positions/SideControl/SideControl.vue'
import SpiderGuard from '@/views/Positions/SpiderGuard/SpiderGuard.vue'

import Kimura from '@/views/Submissions/Kimura/Kimura.vue'
import Omoplata from '@/views/Submissions/Omoplata/Omoplata.vue'
import Triangle from '@/views/Submissions/Triangle/Triangle.vue'

import HipBump from '@/views/Sweeps/HipBump/HipBump.vue'
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
  { label: 'Positions', children: [
    { label: 'Closed guard', path: '/positions/closed-guard', component: ClosedGuard },
    { label: 'Side control', path: '/positions/side-control', component: SideControl },
    { label: 'Knee on chest', path: '/positions/knee-on-chest', component: KneeOnChest },
    { label: 'Mount', path: '/positions/mount', component: Mount },
    { label: 'Back mount', path: '/positions/back-mount', component: BackMount },
    { label: 'Half guard', path: '/positions/half-guard', component: HalfGuard },
    { label: 'Spider guard', path: '/positions/spider-guard', component: SpiderGuard },
    { label: 'Collar sleeve guard', path: '/positions/collar-sleeve-guard', component: CollarSleeveGuard },
    { label: 'De la Riva guard', path: '/positions/de-la-riva-guard', component: DeLaRivaGuard }
  ]},
  { label: 'Transitions', children: [

  ]},
  { label: 'Sweeps', children: [
    { label: 'Scissor sweep', path: '/sweeps/scissor', component: Scissor },
    { label: 'Hip bump sweep', path: '/sweeps/hip-bump', component: HipBump }
  ]},
  { label: 'Submissions', children: [
    { label: 'Kimura', path: '/submissions/kimura', component: Kimura },
    { label: 'Omoplata', path: '/submissions/omoplata', component: Omoplata },
    { label: 'Triangle', path: '/submissions/triangle', component: Triangle }
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
