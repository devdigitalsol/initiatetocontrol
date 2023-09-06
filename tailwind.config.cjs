/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_green: {
          50: "#f3fbea",
          100: "#e2f5d2",
          200: "#c9ebab",
          300: "#a2db74",
          400: "#85cb50",
          500: "#66b032",
          600: "#4e8c24",
          700: "#3d6b20",
          800: "#33561e",
          900: "#2d491e",
        },
        theme_purple: {
          50: "#f6f2f9",
          100: "#ede6f4",
          200: "#d2bfe3",
          300: "#b799d3",
          400: "#814db1",
          500: "#4b0090",
          600: "#440082",
          700: "#38006c",
          800: "#2d0056",
          900: "#250047",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
