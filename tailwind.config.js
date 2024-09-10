/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "#007D85",
        secondary: "#D9DFE3",
        textPrimary: "#181E20",
        textSecondary: "#5A6D78",
        textTertiary: "#8DA0AA",
        background: "#F8F9F9",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px #007D85",
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
