// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/supabase"],
  tailwindcss: {
    cssPath: "./assets/css/tailwind.css",
  },
  runtimeConfig: {
    public: {
      REDIRECT_URL: process.env.REDIRECT_URL,
    },
  },
});
