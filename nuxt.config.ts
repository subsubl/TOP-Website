// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n'
    ],
    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales',
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en.json'
            },
            {
                code: 'es',
                name: 'Español',
                file: 'es.json'
            }
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        }
    }
})
