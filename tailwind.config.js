/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".public/index.html", "./public/script.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["garden", "light", "dark"],
  }
}