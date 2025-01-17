/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  fontFamily: {
    mono: ['Monaco', 'monospace'],
    serif: ['ui-serif', 'Georgia'],
  },
  colors: {
    'color-primary': '#D90429',
    'color-secondary': '#EF233C',
    'color-background': '#EDF2F4',
    'color-quaternary': '#8D99AE',
    'color-quinary': '#2B2D42',
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
