import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E8B57', // Goose Head Green
        secondary: '#3CB371', // Lighter green for accents
        accent: '#20B2AA', // Teal for highlights
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')", // Add a hero background image
      },
    },
  },
  plugins: [],
} satisfies Config;
