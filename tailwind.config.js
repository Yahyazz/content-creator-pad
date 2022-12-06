/** @type {import('tailwindcss').Config}**/
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      screens: {
        xsm: '360px',
      },
      colors: {
        primary_background: {
          darkgray01: '#222831',
          darkgray02: '#393E46',
        },
        primary: {
          blue: '#00ADB5',
          white: '#EEEEEE',
          warning: '#eb5757',
        },
      },
      spacing: {
        '76px': '76px',
        '30px': '30px',
        '116px': '116px',
        '118px': '118px',
        '300px': '300px',
      },
    },
  },
  plugins: [],
};
