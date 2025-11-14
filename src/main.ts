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
  router.addRoute('Home', {
    name: 'example',
    path: '',
    component: () => import('@/views/ExampleView.vue'),
  })
  router.addRoute('Home', {
    name: 'notfound',
    path: 'notfound',
    component: () => import('@/views/NotFoundView.vue'),
  })
  router.beforeEach((to, from) => {
    console.debug('playground beforeEach', from, to)
  })
  router.beforeResolve((to, from) => {
    console.debug('playground beforeResolve', from, to)
  })
})
