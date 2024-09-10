/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "#2A4D49",
        secondary: "#64C892",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px #64C892",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
