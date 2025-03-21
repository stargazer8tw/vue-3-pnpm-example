import { type App } from "vue"
import router from "@/router"
export interface Platform {
  install: (app: App) => void
}
export function createPlatform(): Platform {
  const platform: Platform = {
    install(app: App) {
      app.use(router)
    }
  }
  return platform
}

export default createPlatform()
