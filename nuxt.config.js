const bodyParser = require("body-parser");

export default {
    mode: "universal",
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "nuxt-blog",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "my nuxt blog",
            },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~assets/styles/main.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/axios"],

    axios: {
        baseURL:
            process.env.baseURL ||
            "https://nuxt-blog-cba4c-default-rtdb.asia-southeast1.firebasedatabase.app",
        credentials: false,
    },

    loading: {
        color: "#fa923f",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [({ isLegacy }) => isLegacy && "axios"],
    },

    env: {
        fbAPIKey: "AIzaSyBUZxWQZEJybsHZuWILPyNwvPUH0j840Nw",
    },

    transition: {
        name: "fade",
        mode: "out-in",
    },
    // router: {
    //   middleware: "log",
    // },
    server: {
        host: "0.0.0.0",
        port: "3000",
    },
    serverMiddleware: [bodyParser.json(), "~/api"],
};
