/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#0A0A0A",
          surface: "#1A1A1A",
          border: "#2A2520",
        },
        ink: {
          primary: "#F5F1EA",
          secondary: "#8A8278",
          muted: "#5A554E",
        },
        accent: {
          copper: "#B8845C",
          copperHover: "#D4A37A",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        atrio: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        atrio: "800ms",
        "atrio-fast": "400ms",
      },
      keyframes: {
        "scroll-hint": {
          "0%, 88%, 100%": { transform: "translateY(0)" },
          "92%": { transform: "translateY(6px)" },
          "96%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "scroll-hint": "scroll-hint 3s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
    },
  },
  plugins: [],
};
