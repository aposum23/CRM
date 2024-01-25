import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/MainView.vue')
  },
  {
    path: '/contractors',
    name: 'contractors',
    component: () => import('@/views/contractors/ContractorsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
