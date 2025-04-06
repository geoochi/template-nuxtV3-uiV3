// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/template-nuxtV3-uiV3/',
  },
  compatibilityDate: '2025-04-03',
  css: ['./app/global.css'],
  devtools: { enabled: false },
  fonts: { provider: 'local' },
  future: { compatibilityVersion: 4 },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
})
