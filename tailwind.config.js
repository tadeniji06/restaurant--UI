/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#dc2922",
        black: "#222222",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};