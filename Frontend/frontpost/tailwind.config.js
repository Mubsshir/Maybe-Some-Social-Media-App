/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens:{
        'phone':'320px'
      }
    },
    
  },
  plugins: [],
}

