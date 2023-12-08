/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "noto-sans": ["Noto Sans KR", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"]
    },
    extend: {
      gridTemplateRows: {
        "10": "repeat(10, minmax(0, 1fr))"
      },
      gridRow: {
        "span-9": "span 9 / span 9",
      }
    },
    colors: {
      "black": "#000000",
      "gear-black": "#1E1E1E",
      "light-gray": "#A7A7AC",
      "dim-gray": "#696969",
      "white": "#FFFFFF",
      "pastel-red": "#EE504A",
      "pastel-yellow": "#F8BD45",
      "pastel-green": "#5ECA42"
    }
  },
  plugins: [],
}

