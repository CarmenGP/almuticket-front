import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MenuView from '../views/MenuView.vue'
import IncidenceView from '../views/IncidenceView.vue'
import RegisterView from '../views/RegisterView.vue'
import MyTicketsView from '../views/MyTicketsView.vue'
<<<<<<< HEAD
import ReservationFormView from '../views/ReservationFormView.vue'
=======
import IncidentView from '../views/IncidentView.vue'
>>>>>>> gestionDeIncidencias

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: MenuView // Cambiar el componente por defecto a LoginView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/incidence',
      name: 'incidence',
      component: IncidenceView
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: MyTicketsView
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RegisterView
    },
    {
<<<<<<< HEAD
      path: '/reservation',
      name: 'reservation',
      component: ReservationFormView
=======
      path: '/incident',
      name: 'incident',
      component: IncidentView 
>>>>>>> gestionDeIncidencias
    }
  ]
})

export default router