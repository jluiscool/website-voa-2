/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        // => @media (min-width: 768px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        'hot-pink': '#FE0095',
        'light-pink': '#FF55BC',
        'light-blue': '#5CC4ED',
        'dark-gray': '#443F3F',
        'sunbox' : '#EED208',
        'purplebox' : '#BD70DA',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'title': '0 1px 2px rgba(0, 0, 0, 0.75)',
        'title-purplebox': '0 1px 2px rgba(255, 255, 255, 0.75)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

