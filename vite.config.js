import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@app' : path.resolve(__dirname, './src/app'),
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@features' : path.resolve(__dirname, './src/features'),
      '@pages' : path.resolve(__dirname, './src/pages'),
      '@ui' : path.resolve(__dirname, './src/ui'),
    },
  },
  plugins: [react()],
})
