/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./front-end/*.html', ' "./node_modules/flowbite/**/*.js"'],
    theme: {
        container: {
            center: true,
        },
        extend: {

        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}