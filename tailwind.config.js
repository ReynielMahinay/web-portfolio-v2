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
        hero: "url('/src/assets/images/hero-bg.png')",
        about: "url('/src/assets/images/about-bg.png')",
        project: "url('/src/assets/images/project-bg.png')",
        project2: "url('/src/assets/images/project2-bg.png')",
        footer: "url('/src/assets/images/footer-bg.png')",
        hero_mobile: "url('/src/assets/images/hero-mobile-bg.png')",
        about_mobile: "url('/src/assets/images/about-mobile-bg.png')",
        project_mobile: "url('/src/assets/images/project-mobile-bg.png')",
        project_mobile_2: "url('/src/assets/images/project2-mobile-bg.png')",
        footer_mobile: "url('/src/assets/images/footer-mobile-bg.png')",
      },
    },
  },
  plugins: [],
};
