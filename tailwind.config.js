const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      header: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#B70569',
        darkAccent: '#210D15',
        gray: "#FEFEFE",
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
