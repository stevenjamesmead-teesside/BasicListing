import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src": fileURLToPath(new URL('./src', import.meta.url)),
      "@stores": fileURLToPath(new URL('./src/stores', import.meta.url))
    }
  },
  plugins: [vue(), vueDevTools()],
  server: {
    host: "127.0.0.1"
  }
})
