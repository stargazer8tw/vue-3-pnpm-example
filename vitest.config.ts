import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

// https://vite.dev/config/
/** @type { import('vite').UserConfig } */
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['./vitest.setup.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html', 'json', 'lcov'],
        exclude: ['**/node_modules/**', '**/dist/**', '**/__tests__/**']
      }
    }
  })
)
