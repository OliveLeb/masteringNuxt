require('dotenv').config()

export default {

    components: true,

    head: {
        titleTemplate: "Mastering Nuxt: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: ['my-style']
        },
        meta: [{
            charset: "utf-8"
        }],
    },

    router: {
        prefetchLinks: false,
    },

    plugins: [ '~/plugins/maps.client', '~/plugins/dataApi', '~/plugins/auth.client' ],

    modules: ['~/modules/auth', '~/modules/algolia'],

    build: {
        extractCss: true,
        loaders: {
            limit: 0,
        }
    },

    buildModules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/tailwindcss'
    ],
    
    css: [
        '~/assets/sass/app.scss',
    ],

    publicRuntimeConfig: {
        auth: {
            cookieName: 'idToken',
            clientId: '1019588980265-hhri468q6oq8an4pqe0eu0a3c8qntl0o.apps.googleusercontent.com'
        },
        algolia: {
            appId: 'PKCRFQC1AP',
            key: 'f22d451956cb7269952d52903866a840',
        }
    },
    privateRuntimeConfig: {
        algolia: {
            appId: 'PKCRFQC1AP',
            key: '3913500563d83870d340229643ac7790'
        }
    },

}