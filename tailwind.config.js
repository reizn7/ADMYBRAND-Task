// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(1 0 0)",
        darkbg: "oklch(0.145 0 0)",
        primary: "oklch(0.205 0 0)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      spacing: {
        container: "1.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
