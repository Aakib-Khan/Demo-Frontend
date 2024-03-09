import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: import.meta.env.VITE_BASE_URL,
  // server: {
  //   port: Number(import.meta.env.VITE_PORT),
  // },
  plugins: [react()],
})
