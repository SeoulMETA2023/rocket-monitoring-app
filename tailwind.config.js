/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "10": "repeat(10, minmax(0, 1fr))"
      }
    },
    colors: {
      "black": "#1E1E1E",
      "gray": "#A7A7AC",
      "white": "#FFFFFF"
    }
  },
  plugins: [],
}

