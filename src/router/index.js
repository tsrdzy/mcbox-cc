import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'mcbox_main',
    component: () => import('../views/mcbox_main.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
