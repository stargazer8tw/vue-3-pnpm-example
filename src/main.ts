import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPlatform } from '.'
import { useRouter } from 'vue-router'

const app = createApp(App)
app.use(createPlatform())
app.mount('#app')
app.runWithContext(() => {
  const router = useRouter()
  router.addRoute('main', {
    name: 'empty',
    path: '',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      requiresAuth: true,
    }
  })
  router.beforeEach((to, from) => {
    console.debug('playground beforeEach', from, to)
  })
  router.beforeResolve((to, from) => {
    console.debug('playground beforeResolve', from, to)
  })
})
