/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  important: true,
  mode: "JIT",
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      anton: ["Anton", "sans-serif"],
      castoro: ["Castoro Titling", "cursive"],
      righteous: ["Righteous", "cursive"],
      dmsans: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        paper: "#f4f4f4",
        charcoal: "#373737",
        silk: "#dcd0c0",
        palegold: "#c0b283",
      },
      backgroundImage: {
        manuelcorreia: "url(../../assets/imgs/manuelCorreiaPic.png)",
        ufrpe: "url(../../assets/imgs/ufrpePic.png)",
        livro1: "url(../../assets/imgs/aterraeohomem1.jpg)",
        livro2: "url(../../assets/imgs/aterraeohomem2.jpg)",
        livro3: "url(../../assets/imgs/aterraeohomem3.jpg)",
        manuelcorreia2: "url(../../assets/imgs/manuelCorreia2.jpg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".word-break": {
          "word-break": "break-word",
        },
      });
    }),
  ],
};
