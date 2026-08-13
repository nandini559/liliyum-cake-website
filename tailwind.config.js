/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "cravie-red": "#801818",
        "cravie-red-dark": "#661212",
        "cravie-red-light": "#fce8ea",
        "cravie-orange": "#e08b26",
        "cravie-olive": "#596613",
        "cravie-cream": "#fbf4ea",
        "cravie-dark": "#222225",
        "cravie-card": "#ffffff",
        "primary": "#801818",
        "background": "#fbf4ea"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "full": "9999px"
      },
      fontFamily: {
        "display": ["'Playfair Display'", "serif"],
        "body": ["'Manrope'", "sans-serif"],
        "sans": ["'Manrope'", "sans-serif"],
        "serif": ["'Playfair Display'", "serif"]
      }
    }
  },
  plugins: []
};
