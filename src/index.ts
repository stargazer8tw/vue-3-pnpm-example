import { type App } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
export interface Platform {
  install: (app: App) => void
}
export function createPlatform(): Platform {
  const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'main',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: '/'
      }
    ]
  })
  const platform: Platform = {
    install(app: App) {
      app.use(router)
    }
  }
  return platform
}

export default createPlatform()
