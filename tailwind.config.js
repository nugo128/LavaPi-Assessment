/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-yellow': '#dae370'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
// #dae370
