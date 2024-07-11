/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'blue': '#2A629A',
        'lightblack': '#373A40',
        'gray': '#686D76',
        'darkwhite': '#EEEEEE'
      }
    },
  },
  plugins: [],
}

