import HomeVue from '@/views/HomeVue.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeVue},
    
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ]
})

export default router
