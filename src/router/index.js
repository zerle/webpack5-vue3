import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router