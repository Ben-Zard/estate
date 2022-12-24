/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{ts,html,css,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#00040f",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      'xs': {'max': '420px'},
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      'xxl': {'min': '2100px'},
    },
  },
 safelist: {
    standard: [/^bg-/, /^text-/, /^border-/, /^hover:bg-/, /^hover:text-/, /^hover:border-/, /^focus:bg-/, /^focus:text-/, /^focus:border-/],
    deep: [/^bg-/, /^text-/, /^border-/, /^hover:bg-/, /^hover:text-/, /^hover:border-/, /^focus:bg-/, /^focus:text-/, /^focus:border-/],
    greedy: [/^bg-/, /^text-/, /^border-/, /^hover:bg-/, /^hover:text-/, /^hover:border-/, /^focus:bg-/, /^focus:text-/, /^focus:border-/],
    patterns:/.*/,
    keyframes: true,
    variables: true,
  },
  plugins: [],
}