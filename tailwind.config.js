/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/hero-bg.jpg')",
      },
      backgroundColor: {
        'features': '#363636',
        'features-last': '#f57c00'
      }
    },
  },
  plugins: [],
}

