import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  appType: 'spa', // ensure SPA fallback
  plugins: [vue(), vuetify({ autoImport: true })],
  server: { port: 6661, open: true },
  build: { outDir: 'dist' },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})