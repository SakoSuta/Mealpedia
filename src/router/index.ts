import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('../views/RandomView.vue')
    },
    {
      path: '/name',
      name: 'name',
      component: () => import('../views/NameView.vue')
    },
    {
      path: '/ingredient',
      name: 'ingredient',
      component: () => import('../views/IngredientView.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/zone',
      name: 'zone',
      component: () => import('../views/ZoneView.vue')
    },
    {
      path: '/ID/:id(\\d+)',
      name: 'id',
      component: () => import('../views/IdView.vue')
    }
  ]
})

export default router
