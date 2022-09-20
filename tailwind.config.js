/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      fontFamily: {
        'bit': ['bit'],
      },
      colors: {
        'white': '#ffffff',
        'black': '#222222',
        'pink': '#fa90a1',
        'dark-blue': '#4c5b6f',
        'green': '#8dcc51',
        'blue': '#1ca7ec',
        'yellow': '#fad53f',
        'red': '#ee6e59',
      }
  },
  plugins: [],
}
