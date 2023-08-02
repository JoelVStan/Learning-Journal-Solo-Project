/** @type {import('tailwindcss').Config} */

const percentageWidth = require('tailwindcss-percentage-width')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        Open_Sans: ["Open Sans", "sans-serif"]
      },
    },
  },
  plugins: [
    percentageWidth
  ],
}

