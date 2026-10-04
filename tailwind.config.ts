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
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: {
          50: "#FAFAF7",
          100: "#F5F5F0",
          200: "#ECECE4",
          300: "#DDDDCF",
        },
        charcoal: {
          900: "#0D0E10",
          850: "#121316",
          800: "#1A1B1F",
          700: "#24262B",
          600: "#363840",
          500: "#50535E",
          400: "#717582",
        },
        gold: {
          50: "#FCF9EE",
          100: "#F7F0D4",
          200: "#EEDFA8",
          300: "#E2CA76",
          400: "#D4B348",
          500: "#C69C2B", // primary restrained gold
          600: "#A87E1F",
          700: "#835E18",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.025em",
        widest: "0.08em",
      },
      boxShadow: {
        'subtle': "0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)",
        'card': "0 12px 32px -4px rgba(0, 0, 0, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        'elevated': "0 24px 48px -12px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.04)",
        'gold-glow': "0 0 24px -4px rgba(198, 156, 43, 0.25)",
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
