import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/coffee": {
        target: "https://mern-server-mwrx.onrender.com" || "http://localhost:4000" ,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
