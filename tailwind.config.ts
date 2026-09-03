import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        body: ["IBM Plex Sans", "Segoe UI", "system-ui", "sans-serif"],
        devanagari: ["Martel", "Noto Sans Devanagari", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        forest: {
          DEFAULT: "hsl(var(--forest))",
          deep: "hsl(var(--forest-deep))",
          soft: "hsl(var(--forest-soft))",
        },
        crimson: "hsl(var(--crimson))",
        gold: {
          DEFAULT: "hsl(var(--gold))",
          bright: "hsl(var(--gold-bright))",
        },
        paper: "hsl(var(--paper))",
        rule: "hsl(var(--rule))",
        spain: {
          red: "hsl(var(--spain-red))",
          yellow: "hsl(var(--spain-yellow))",
        },
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
