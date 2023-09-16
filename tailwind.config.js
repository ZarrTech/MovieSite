/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "1.2rem",
      base: "1.4rem",
      xl: "1.6rem",
      "2xl": "1.8rem",
      "3xl": "2.4rem",
      "4xl": "3.6rem",
      "5xl": "4.8rem",
    },

    spacing: {
      1: "0.5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "2.5rem",
      6: "3rem",
      7: "3.5rem",
      8: "4rem",
      9: "4.5rem",
      10: "5rem",
    },

    borderWidth: {
      DEFAULT: "0.1rem",
      0: "0",
      2: "0.2rem",
      3: "0.3rem",
      4: "0.4rem",
      5: "0.5rem",
    },

    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
    },

    colors: {
      rose: "#be123c",
      gray: "#9ca3af",
      "dark-gray": "#111827",
      white: "#fff",
    },

    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};

