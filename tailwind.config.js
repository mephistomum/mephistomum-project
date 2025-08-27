/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",                // root HTML files
    "./assets/**/*.js",        // all JS files inside assets
    "./assets/**/*.html"       // HTML files inside assets (if any)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
