/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        system: "Quicksand , sans-serif",
      },
      colors: {
        primary: {
          900: "#042F48",
          800: "#074E78",
          700: "#0A6EA8",
          600: "#0D8DD9",
          500: "#25A6F2",
          400: "#57BAF5",
          300: "#87CEF8",
          200: "#B7E2FB",
          100: "#E7F5FE",
          50: "#FFFFFF",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
