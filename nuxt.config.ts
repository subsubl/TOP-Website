// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n'
    ],
    i18n: {
        vueI18n: './i18n.config.ts',
        locales: [
            {
                code: 'en',
                name: 'English'
            },
            {
                code: 'es',
                name: 'Español'
            }
        ],
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',  // recommended
        }
    }
})
