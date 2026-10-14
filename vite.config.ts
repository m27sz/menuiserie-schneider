import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Déployé sur GitHub Pages sous /menuiserie-schneider/ ; surcharger via BASE_PATH pour un domaine propre.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/menuiserie-schneider/',
  plugins: [react()],
})
