/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      visibility: ["group-hover",'view-hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}