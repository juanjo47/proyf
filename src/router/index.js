import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/nueva',
    name: 'nueva',
    component: () => import('../views/nuevaView.vue')
  },
  {
    path: '/persona',
    name: 'persona',
    component: () => import('../views/PersonaView.vue')
  },
  {
    path: '/persona/:id/editar',
    name: 'persona_editar',
    component: () => import('../views/PersonaEditarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
