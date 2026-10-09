import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#080B20",
          light: "#0F1438",
          dark: "#040612",
          card: "rgba(15, 20, 56, 0.65)",
        },
        rose: {
          romantic: "#FF6B9A",
          blush: "#FFD5E2",
          deep: "#E63973",
        },
        lavender: {
          DEFAULT: "#B9A6FF",
          light: "#DDD4FF",
          dark: "#8468E8",
        },
        gold: {
          warm: "#FFD89A",
          glow: "#FFE7BE",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "Cambria", "serif"],
        script: ["var(--font-dancing)", "Brush Script MT", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "glow-heart": "glowHeart 2.5s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(3deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(15px) rotate(-3deg)" },
        },
        glowHeart: {
          "0%, 100%": {
            transform: "scale(1)",
            filter: "drop-shadow(0 0 12px rgba(255, 107, 154, 0.6))",
          },
          "50%": {
            transform: "scale(1.08)",
            filter: "drop-shadow(0 0 25px rgba(255, 107, 154, 0.95))",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "romantic-sunset":
          "linear-gradient(180deg, #080B20 0%, #1a0f35 25%, #42183c 50%, #70264b 75%, #a83d5a 90%, #d8686e 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
