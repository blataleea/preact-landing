import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/preact-landing/',
  build: {
    outDir: 'docs',
  },
  server: {
    port: 4000,
    host: '0.0.0.0',
  },
  plugins: [preact()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use 'src/styles/_variables.scss' as *;`
      }
    }
  }
});
