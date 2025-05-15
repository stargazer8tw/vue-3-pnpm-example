import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Component from 'unplugin-vue-components/vite'

import autoprefixer from 'autoprefixer'
// https://vite.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools(),
    Component({
      dts: true,
      types: [],
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    sourcemap: true,
    target: 'esnext',
    minify: false,
    rollupOptions: {
      external: [
        'vue',
        /^node:.*/
      ]
    }
  }
})
