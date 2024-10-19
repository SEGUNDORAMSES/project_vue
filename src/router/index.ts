import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactoView from '@/views/ContactoView.vue'
import NoticiasView from '@/views/NoticiasView.vue'
import XboxView from '@/views/XboxView.vue'
import NintendoView from '@/views/NintendoView.vue'
import PlayStation from '@/views/PlayStation.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/Contacto',
    name: 'Contacto',
    component: ContactoView
  },
  {
    path: '/Noticias',
    name: 'Noticias',
    component: NoticiasView
  },
  {
    path: '/Xbox',
    name: 'Xbox',
    component: XboxView
  },
  {
    path: '/Nintendo',
    name: 'Nintendo',
    component: NintendoView
  },
  {
    path: '/playstation',
    name: 'playstation',
    component: PlayStation
  },
 



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
