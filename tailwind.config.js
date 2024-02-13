/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        black : '#1E2832',
        primaryBg : '#1e28320d',

      },
      container : {
        center: true
      }
    },
    fontFamily : {
      primary : ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
}