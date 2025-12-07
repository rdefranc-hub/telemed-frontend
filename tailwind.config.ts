import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1565C0",
        secondary: "#2E7D32",
        accent: "#FBC02D",
        danger: "#D32F2F",
        dark: "#263238",
        light: "#ECEFF1"
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
