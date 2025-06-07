import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  base: '/Recipe-project-React/',
  plugins: [react(), tailwindcss()],

  server: {
    open: true,
  }
})
