const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [ 
    "./src/**/*.svelte",
    "./src/**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
      primary: colors.yellow[500],
    },
    extend: {
      fontFamily: {
        sans: ['Quicksand'],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
