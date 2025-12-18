import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // This is the most important line for GitHub Pages
  base: '/Smart-Shop/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})