/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        sans: ['Josefin Sans', 'sans-serif']
      },
      letterSpacing: {
        widest: '0.3em'
      }
    },
  },
  plugins: [],
}

