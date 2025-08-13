import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  // Ensure Vuetify CSS is transformed in tests
  ssr: { noExternal: ['vuetify'] },
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    deps: { inline: [/vuetify/] },
    setupFiles: ['./src/__tests__/setup.ts'],
    coverage: { provider: 'v8', reporter: ['text', 'html'] },
  },
})