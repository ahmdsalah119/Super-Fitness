/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6600", // This is a bright orange color for the primary theme
        secondary: {
          light: "#000000", // black
          dark: "#ffffff", // white
        },
      },
    },
  },
  plugins: [],
};
