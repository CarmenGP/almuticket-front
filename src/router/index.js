import { createRouter, createWebHistory } from 'vue-router'
import IncidencesView from '../views/IncidencesView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView // Cambiar el componente por defecto a LoginView
    },
    {
      path: '/incidences',
      name: 'incidences',
      component: IncidencesView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router