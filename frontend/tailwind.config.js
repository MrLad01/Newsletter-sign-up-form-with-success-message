/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx"
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '325px'
      },
      colors: {
        'tomato': 'hsl(4, 100%, 67%)',
      }
    },
  },
  plugins: [],
}

