/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // JIT mode for faster development
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "page-background-mobile": "url('/img/bg.jpg')",
        "page-background-desktop": "url('/img/bg--desktop.jpg')",
        "checkbox-checked": "url('/img/checkbox--checked.svg')",
        "checkbox-unchecked": "url('/img/checkbox--unchecked.svg')",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        primary: "#7210FF",
        secondary: "#24252a",
        myGray: "#F6F8F2",
        textColor: "#100101",
        mutedText: "#D4BFBF",
        borderColor: "#707070",
      },
      fill: {
        primary: "#3626a7",
        silverChalice: "#ADADAD",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontSize: {
        "10xl": "10rem",
      },
      height: {
        18: "4.5rem",
      },
      width: {
        18: "4.5rem",
      },
    },
    fontFamily: {
      // display: ["Mirage"],
      sans: ["Helvetica"],
      // handwriting: ["BrittanySignature"],
      // serif: ["Roboto Slab"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
