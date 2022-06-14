module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      extend: {
      colors: {
        primary: '#B70569',
        darkAccent: '#210D15'
      },
      fontFamily: {
        header: '"DM Sans"',
        sans: 'Poppins'
      }
    },
  },
  plugins: [],
}
