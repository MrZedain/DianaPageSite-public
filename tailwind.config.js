// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // must include all JS/JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        pageName: '#bababa'
      }
    },
  },
  plugins: [],
}
