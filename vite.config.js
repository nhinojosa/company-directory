/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({ 
  base: '/company-directory/',   // <---- added "base: /'Vue-Company-Directoy/" <-- don't forget the name inside single quotes
  plugins: [vue()],
  resolve:{
    alias: {
      '@': path.resolve(__dirname,'src'),

    }, 
  },
})

