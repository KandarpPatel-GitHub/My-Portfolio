/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#0A192F",
      secondary: "#F97316",
      tertiary: "#54D6BB",
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      
    },
    screens: {
      'lg': {'max': '2023px'},
      
      'sm': {'max': '1000px'},
      
    },
  },
  plugins: [],
}

