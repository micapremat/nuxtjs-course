//runtimeConfig and app.config are both used to expose variables to the rest of your application. To determine whether you should use one or the other, here are some guidelines:
//app.config: Public tokens that are determined at build time, website configuration such as theme variant, title and any project config that are not sensitive.
export default defineAppConfig({
    title: 'Hello Nuxt',
    theme: {
      dark: true,
      colors: {
        primary: '#ff0000'
      }
    }
  })
  