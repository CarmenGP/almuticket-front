import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MyTicketsView from '../views/MyTicketsView.vue'
import BookingView from '../views/BookingView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: MyTicketsView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingView
    }
  ]
})

export default router
