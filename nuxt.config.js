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

    modules: [],

    buildModules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/tailwindcss'
    ],
    
    css: [
        '~/assets/sass/app.scss',
    ],

    build: {
        extractCss: true,
        loaders: {
            limit: 0,
        }
    },

    publicRuntimeConfig: {
        auth: {
            cookieName: 'idToken',
            clientId: '1019588980265-hhri468q6oq8an4pqe0eu0a3c8qntl0o.apps.googleusercontent.com'
        },
    },
    privateRuntimeConfig: {
    },
}