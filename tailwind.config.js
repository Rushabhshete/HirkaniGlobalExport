/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  safelist: [
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-400",
    "delay-500",
    "delay-600",
    "delay-700",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        /* Core */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* Surfaces */
        surface: "hsl(var(--surface))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        /* Brand - Green */
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        /* Gold */
        gold: "hsl(var(--gold))",
        "gold-foreground": "hsl(var(--gold-foreground))",

        /* UI */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        /* Footer */
        "footer-bg": "hsl(var(--footer-bg))",
        "footer-text": "hsl(var(--footer-text))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
