/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-gray": "#323233",
        "semi-white": "#e7e3de",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('src/assets/images/hero-bg.png')",
        about: "url('src/assets/images/about-bg.png')",
      },
    },
  },
  plugins: [],
};
