import { Deflate } from "node:zlib";

/** @type {import('tailwindcss').Config} */
export default {
  // Check if you are using dark mode
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Baloo Thambi 2"', "system-ui", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        //custom colors for the app, including the primary and secondary colors

        primary: {
          DEFAULT: "#FF4100", // the orange color
          foreground: "oklch(0.985 0 0)",
        },
        secondary: {
          light: "#000000",
          dark: "#ffffff",
          // Required shadcn structure
          DEFAULT: "oklch(0.97 0 0)",
          foreground: "oklch(0.205 0 0)",
        },
        // These map the CSS variables in index.css to Tailwind classes
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
