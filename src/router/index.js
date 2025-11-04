import { createRouter, createWebHistory } from 'vue-router'
import IssView from '@/views/IssView.vue'
import MapView from '@/views/MapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Iss',
      component: IssView,
    },
    {
      path: '/Map',
      name: 'Map',
      component: MapView,
    },
  ],
})

export default router
