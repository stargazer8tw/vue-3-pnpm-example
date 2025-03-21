import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/'
    // }
  ]
})

export default router