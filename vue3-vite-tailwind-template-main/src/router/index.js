import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      redirect: '/simple-form',
      children: [
        {
          path: '/simple-form',
          name: 'simple-form',
          component: () => import('../views/SimpleFormView.vue')
        },
        {
          path: '/form',
          name: 'form',
          component: () => import('../views/FormValidataView.vue')
        },
        {
          path: '/pinia',
          name: 'pinia',
          component: () => import('../views/PiniaView.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router
