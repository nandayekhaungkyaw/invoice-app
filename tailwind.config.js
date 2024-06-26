/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './style.css',
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '4rem',

    },
    
    extend: {
      fontFamily: {
        mont: ["Montserrat", 'sans-serif'],
        open:[ "Open Sans", 'sans-serif']
      },
    },
  },
  plugins: [ require('flowbite/plugin')],
}

