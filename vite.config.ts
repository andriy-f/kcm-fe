import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import myRelayPlugin from './myRelayPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), myRelayPlugin],
  define: {
    'process.platform': JSON.stringify(process.platform),
    'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    'process.env.HOME': JSON.stringify('/home/'),
  }
})
