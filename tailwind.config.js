/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'chirp':['Chirp'],
      },
      colors:{
        "neutral-1000":"#000000",
        "twitter-blue-default":"#1D9BF0",
        "stroke":"rgba(29, 155, 240, 0.24)",
      }
    },
  },
  plugins: [],
}