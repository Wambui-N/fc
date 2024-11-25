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
        background: "#010D0D", // Dark background color
        foreground: "var(--foreground)", // Variable for foreground color
        transparent: "transparent", // Transparent color
        primary: "#29A8A8", // Main primary color
        primaryLight: "#1B6E6E", // Lighter shade of primary
        secondary: "#051D1D", // Secondary color
        white: "#F2FFFF", // White color
        // Consider using a scale for blue if you have multiple shades
        blue: {
          DEFAULT: "#1B6E6E", // Base blue color
          light: "#29A8A8", // Lighter blue
          dark: "#051D1D", // Darker blue
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
