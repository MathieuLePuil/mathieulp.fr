/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/*.{vue,js,ts,jsx,tsx}', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'my-white': '#FFFFFF',
                'my-purple': '#6366F1',
            },
        },
    },
    plugins: [],
}