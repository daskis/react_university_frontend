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
      },
      backgroundImage: {
        "reviews": "url('assets/reviewsbg.png')",
        "reviewsbg": "url('assets/reviews/reviewbg.png')",
        "footerFirst": "url('assets/footer-icon-first.png')",
        "footerSecond": "url('assets/D.png')"
      }
    },
  },
  plugins: [],
}