// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/assets/css/bootstrap.scss'],
  plugins: ['~/plugins/bootstrap.js'],
  modules: [
    'vue3-carousel-nuxt'
  ],
  app: {
    baseURL: '/nuxt-app/', 
    buildAssetsDir: 'assets',
  }
});
