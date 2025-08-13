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
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Ensure Vuetify is bundled (so its CSS imports are transformed) in Vitest's SSR
  ssr: {
    noExternal: ['vuetify'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    deps: {
      inline: [/vuetify/],
    },
    setupFiles: ['./src/__tests__/setup.ts'],
  },
})