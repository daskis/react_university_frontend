/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F14D34",
        "secondary": "#050C33",
        "exp": "#040823"
      }
    },
  },
  plugins: [],
}