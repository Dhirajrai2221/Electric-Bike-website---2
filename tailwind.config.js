/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        main_color: "#42454A",
        main_color_light: "#414449",
        one_color: "#8B938D",
        dark: "#17181A",
        light_white1: "#fafafa",
        light_white2: "#FBFBFB",
        light_white3: "#F3EFEC",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        display: ["Calistoga", "cursive"],
      },
    },
  },
  plugins: [],
};
