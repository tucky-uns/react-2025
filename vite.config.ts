import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react/', // Ajusta esto según el nombre de tu repositorio
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
