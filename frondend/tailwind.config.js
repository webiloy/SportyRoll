/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#13EA76",
        text: "#161616",
        "secondary-text": "#C9C9C9",
        NiceGray: "#2E2E2E",
        NiceBlack: "#0E0E0E",
      },
      listStyleImage: {
        checkmark: 'url("./src/assets/checkmark.svg")',
      },
      backgroundImage: {
        "features-one": 'url("./src/assets/featuresOne.jpg")',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
