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
      },
      backgroundImage: {
        'landing': "url('./src/images/LandingPage.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    
  },
  plugins: [],
}

