/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: '#f25f3a',
        brightRedLight: '#f6866a',
        brightRedSupLight: '#fdece7',
        darkerBlue: "HSL(228, 39%, 23%)",
        darkGrayishBlue: '#9095a7',
        veryDarkBlue: '#1d1e25',
        veryPaleRed: '#ffefeb',
        veryLightGray: 'hsl(0, 0%, 95%)',
      },
    },
  },
  plugins: [],
}
