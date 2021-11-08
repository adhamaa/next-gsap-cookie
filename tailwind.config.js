module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "slide-in": {
          "0%": { left: "-100%" },
          "100%": { left: "20px" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out 1.5s forwards",
        "fade-out": "fade-out 1s ease-out 1.5s forwards",
        "slide-in": "slide-in 1s linear 1.5s forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
