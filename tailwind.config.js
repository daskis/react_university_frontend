/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F14D34",
        "secondary": "#050C33",
        "exp": "#040823"
      },
      backgroundColor: {
        "primary": "#F14D34"
      },
      backgroundImage: {
        "reviews": "url('assets/reviewsbg.png')",
        "reviewsbg": "url('assets/reviews/reviewbg.png')",
        "footerFirst": "url('assets/footer-icon-first.png')",
        "footerSecond": "url('assets/D.png')",
        "header": "url('assets/header.svg')",
        "casee": "url('assets/case1.jpg')",
        "caseee": "url('assets/case2.png')",
        "caseeee": "url('assets/case3.png')",
        "caseeeee": "url('assets/case4.png')",
        "caseeeeee": "url('assets/case5.png')",
        "caseeeeeee": "url('assets/case6.jpg')",
        "caseeeeeeee": "url('assets/case7.png')",
      },
      screens: {
        "xl-": "1100px",
        "lg-": "850px",
        "sm-": "470px"
      }
    },
  },
  plugins: [],
}