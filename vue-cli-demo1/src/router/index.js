import { createRouter, createWebHistory } from 'vue-router'
import ReactiveView from '../views/ReactiveView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/reactive',
      name: 'reactive',
      component: ReactiveView
    },
    {
      path: '/component',
      name: 'component',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComponentView.vue')
    }
  ]
})

export default router
