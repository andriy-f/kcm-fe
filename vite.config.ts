import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import myRelayPlugin from './myRelayPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: (process.env.PORT && parseInt(process.env.PORT)) || 5173,
    host: process.env.HOST || 'localhost',
  },
  plugins: [react(), myRelayPlugin],
  define: {
    'process.platform': JSON.stringify(process.platform),
    'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    'process.env.HOME': JSON.stringify('/home/'),
    'process.env.VITE_KCM_BACKEND_URL': JSON.stringify(process.env.VITE_KCM_BACKEND_URL),
    'process.env.CI': JSON.stringify(process.env.CI),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }
})
