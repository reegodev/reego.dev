const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.astro",
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
      dropShadow: {
        'primary': [
            '0 2px 10px rgba(63, 63, 70, 0.33)',
            '0 2px 10px rgba(63, 63, 70, 0.38)'
        ],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
