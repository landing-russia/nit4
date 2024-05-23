/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: ['./templates/**/*.html',
        './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            aspectRatio: {
                'vertical': '9 / 16',
            },
        },
    },

    plugins: [require('flowbite/plugin')],
}
