export default {
  head: {
    title: 'dugun.com',
    htmlAttrs: {
      lang: 'tr-TR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }
    ]
  },

  ssr: false,

  loading: '~/components/loading.vue',

  css: [
    '@/assets/css/style.css'
  ],

  // Plugins
  plugins: [
    { src : '~/plugins/vue-js-modal', ssr: false },
    { src : '~/plugins/repositories'},
    { src : '~/plugins/cacheManager'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
