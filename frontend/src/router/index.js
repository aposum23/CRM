import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
