import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/week2',
      name: 'week2',
      component: () => import('../views/Week2View.vue')
    },
    {
      path: '/week3',
      name: 'week3',
      component: () => import('../views/Week3View.vue')
    },
    {
      path: '/week4Branches',
      name: 'week4Branches',
      component: () => import('../views/Week4BranchesView.vue')
    },
    {
      path: '/week4Problems',
      name: 'week4Problems',
      component: () => import('../views/Week4ProblemsView.vue')
    }
  ]
})

export default router
