/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#FE0095',
        'light-pink': '#FF55BC',
        'light-blue': '#5CC4ED',
        'dark-gray' : '#443F3F',
      },
    },
  },
  plugins: [],
}

