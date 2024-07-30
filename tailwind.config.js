/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'black' : 'rgba(26, 26, 26, 1)', 
        'lightgray' : 'rgba(234, 234, 235, 1)',
        'lightgrey' : 'rgba(234, 234, 235, 1)',
        'gray' : 'rgba(214, 214, 214, 1)',
        'grey' : 'rgba(214, 214, 214, 1)',
        'darkgray' : 'rgba(90, 90, 90, 1)',
        'darkgrey' : 'rgba(90, 90, 90, 1)',
      },
      fontSize : {
        '80' : '80px',
        '23' : '23px',
        '14' : '14px',
      }
    },
  },
  plugins: [],
}

