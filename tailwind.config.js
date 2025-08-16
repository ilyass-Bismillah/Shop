/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        integral: ["Integral CF", "sans-serif"],
        satochi: ["Satochi", "sans-serif"],
    },
    extend: {
     backgroundImage: {
        'hero-image': "url('/src/assets/E-commerce/Rectangle2(1).png')",
      }
    },
  },
  plugins: [],
}