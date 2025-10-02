import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        surface: "var(--color-surface)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        background: "var(--color-background)",
      },
      fontFamily: {
        sans: "var(--font-primary)",
      },
      boxShadow: {
        gold: "0 20px 40px -28px rgba(212, 175, 55, 0.32)",
        emerald: "0 28px 58px -38px rgba(48, 100, 64, 0.54)",
      },
    },
  },
  plugins: [],
};

export default config;
