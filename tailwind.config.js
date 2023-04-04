/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbg': '#21222A',
        'react': '#00D8FF',
        'bg': '#282D35'
      }
    },
  },
  plugins: [],
}

