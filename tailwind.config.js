/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        "./index.html",
    ],
    devtools: { enabled: true },
    css: ['./src/assets/styles/main.css'],
    theme: {
        extend: {},
        colors:{
            white:{
                DEFAULT:'#FFF',
            },
            gray:{
                DEFAULT: '#F5F5F7',
                100:'#f9fffd',
                200:'#DDE3FB',
                300:'#7A7A9D',
            },
            red:{
                DEFAULT:'#E94A47',
            },
            blue:{
                DEFAULT:'#2E5BFF',
                100:'#EDF1FD'
            },
            green:{
              DEFAULT:'#00AE69',
            },
        },
        screens:{
            xs:'300px',
            sm:'480px',
            md:'710px',
            lg:'940px',
            xl:'1100px'
        },
    },
    plugins: [],
};