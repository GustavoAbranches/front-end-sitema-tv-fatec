/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#012877",
        carmineRed: "#F8211C",
        tangerine: "#FF8019",
        mediumOrange: "#FFA500",
        blueGray: "#547581",
      },
      fontFamily: {
        verdana: ["Verdana", "Geneva", "sans-serif"],
      },
    },
  },
  plugins: [],
};
