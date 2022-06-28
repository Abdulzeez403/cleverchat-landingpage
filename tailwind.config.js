/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
   screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  fontFamily: {
   Poppins: ['Poppins', 'sans-serif'],
   Rototo: ['Roboto', 'sans-serif']
  },
   extend: {

   },
  },
  plugins: [],
}