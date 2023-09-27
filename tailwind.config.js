/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/assets/main.css','./src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: ['flowbite/plugin'],
}

