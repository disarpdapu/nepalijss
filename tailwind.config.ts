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
        khand: ["Khand", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
        poppins: ["Poppins", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
        fustat: ["Fustat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
        // legacy aliases
        display: ["Khand", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        body: ["Poppins", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        devanagari: ["Khand", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        // New palette — exact hex per spec
        primary: "#2D6B28",
        accent: "#22C55E",
        link: "#374151",
        "accent-dark": "#1E293B",
        "accent-red": "#DC2626",
        "accent-secondary": "#5CB85C",
        "accent-forest": "#15803D",
        "accent-taupe": "#6B7280",
        canvas: "#FFFFFF",
        "surface-alt": "#E5E7EB",
        ink: "#171717",
        body: "#111827",
        muted: "#525252",
        faint: "#4B5563",
        hairline: "#F3F4F6",
        "neutral-taupe": "#AAAEB5",
        // Legacy mappings kept for component compatibility
        border: "#F3F4F6",
        background: "#FFFFFF",
        foreground: "#111827",
        forest: {
          DEFAULT: "#2D6B28",
          deep: "#1E293B",
          soft: "#E5E7EB",
        },
        crimson: "#DC2626",
        gold: {
          DEFAULT: "#22C55E",
          bright: "#22C55E",
        },
        paper: "#FFFFFF",
        rule: "#F3F4F6",
        spain: {
          red: "#DC2626",
          yellow: "#FACC15",
        },
      },
      maxWidth: {
        site: "72rem",
      },
      keyframes: {
        "hero-pop": {
          "0%": { opacity: "0", transform: "translateY(28px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "hero-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "hero-pop": "hero-pop 760ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "hero-line": "hero-line 900ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
