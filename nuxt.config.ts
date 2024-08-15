// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //production environment
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  //development environment
  $development: {
    //
  },
  //RuntimeConfig API exposes values like environment variables to the rest of your application. 
  //By default, these keys are only available server-side. The keys within runtimeConfig.public are also available client-side.
  //runtimeConfig: Private or public tokens that need to be specified after build using environment variables.
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    currencyKey: process.env.CURRENCY_API_KEY,
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    },
  },
  vite: {
    vue: {
      customElement: false
    },
    vueJsx: {
      mergeProps: true
    }
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Nuxt course',
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  vue: {
    propsDestructure: true
  },
  css: ['~/assets/css/main.css']
})
