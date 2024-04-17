import { createRouter, createWebHistory } from 'vue-router'

import HomeVue from '@/views/HomeVue.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeVue},
    
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 85,
      }
    }else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

export default router
