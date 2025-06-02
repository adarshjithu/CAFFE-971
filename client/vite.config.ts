import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // change output folder from dist to build
  },
  server: {
    proxy: {
      '/api': 'http://192.168.137.1:3000',  // proxy /api requests to your backend
    },
  },
})
