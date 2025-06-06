import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-project2/',   // <-- update to your new repo name
  plugins: [react()],
})
