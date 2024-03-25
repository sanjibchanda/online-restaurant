/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1920px",
    },
    extend: {
      colors: {
        primary: {
          light: "#ffe0c9",
          DEFAULT: "#ffc498",
          dark: "#ff6e01",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
