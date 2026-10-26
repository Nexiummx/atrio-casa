/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Línea Apple en oscuro: negro, grises cálidos y la luz del sol como acento. */
        primary: {
          bg: "#000000",
          surface: "#161617",
          border: "#3a3a3c",
        },
        ink: {
          primary: "#f5f5f7",
          secondary: "#a1a1a6",
          muted: "#8e8e93",
        },
        accent: {
          copper: "#e8b25a",
          copperHover: "#f2c57d",
        },
        field: {
          night: "#11100e",
          garden: "#222a24",
          wood: "#3b2c21",
          stone: "#d6c7ad",
        },
      },
      fontFamily: {
        display: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Text"', '"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
        sans: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Text"', '"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.45" }],
      },
      transitionTimingFunction: {
        atrio: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        atrio: "800ms",
        "atrio-fast": "240ms",
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
