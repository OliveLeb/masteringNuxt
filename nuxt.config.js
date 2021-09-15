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

    plugins: [ 
        '~/plugins/maps.client',
        '~/plugins/dataApi',
        '~/plugins/auth.client',
        '~/plugins/vCalendar.client',
        '~/plugins/stripe.client'
    ],

    modules: [
        '~/modules/auth',
        '~/modules/algolia', 
        '~/modules/cloudinary', 
        '@nuxtjs/cloudinary',
        '~/modules/stripe',
    ],

    cloudinary: {
        cloudName: 'donkhsqcn',
    },

    build: {
        extractCss: true,
        loaders: {
            limit: 0,
        }
    },

    buildModules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
    ],
    
    image: {
        cloudinary: {
        baseURL: 'https://res.cloudinary.com/donkhsqcn/image/upload/'
        }
    },

    css: [
        '~/assets/sass/app.scss',
    ],

    publicRuntimeConfig: {
        rootUrl: process.env.NODE_ENV === 'production' ? 'https://mastering-nuxt-nu.vercel.app' : 'http://localhost:3000',
        auth: {
            cookieName: 'idToken',
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID
        },
        algolia: {
            appId: process.env.ALGOLIA_APP_ID,
            key: process.env.ALGOLIA_API_KEY,
        },
        cloudinary: {
            apiKey: process.env.CLOUDINARY_API_KEY,
        },
        stripe: {
            key: process.env.STRIPE_PUBLISHABLE_KEY,
        }
    },
    privateRuntimeConfig: {
        algolia: {
            appId: process.env.ALGOLIA_APP_ID,
            key: process.env.ALGOLIA_PRIVATE_API_KEY
        },
        cloudinary: {
            apiSecret: process.env.CLOUDINARY_API_SECRET,
        },
        stripe: {
            secretKey: process.env.STRIPE_SECRET_KEY
        }
    },

}