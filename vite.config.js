import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
// base: './' so the production build also works when opened from a subfolder
// or directly from disk, not just from a domain root.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { port: 5173, host: true },
  build: { outDir: 'dist', chunkSizeWarningLimit: 1200 }
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> origin/main
})
