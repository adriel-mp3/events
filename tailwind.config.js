/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#FFA723",
      gray: "rgba(175, 175, 175, 1)",
      "white-100": "rgba(255, 255, 255, 1)",
      "white-80": "rgba(253, 253, 253, 1)",
      "white-60": "rgba(237, 237, 237, 1)",
      "off-white": "#FDFDFD",
      red: "#E14E4E",
      green: "#29C14B",
      purple: "rgba(105, 104, 216, .4)",
      "purple-100": "rgba(71, 69, 183, 1)",
      "purple-80": "#3937B7",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/images/background.jpg')",
        arrow: "url('./src/assets/images/arrow-yellow.svg')",
        play: "url('./src/assets/images/play.svg')",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        icones: ["Icones"],
      },
      boxShadow: {
        modal: "-16px 16px 0px 0px #4D4CC5;",
      },
    },
  },
  plugins: [],
};
