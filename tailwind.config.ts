import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        belmav: {
          black: "#000000",
          gold: "#FEC802",
          red: "#DD161C",
          white: "#FFFFFF",
          charcoal: "#0A0A0A",
          ink: "#171717",
          mist: "#F5F4F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "arc-gold-red": "linear-gradient(90deg, #FEC802 0%, #DD161C 100%)",
        "arc-black-gold": "linear-gradient(90deg, #000000 0%, #FEC802 100%)",
        "arc-full": "linear-gradient(90deg, #000000 0%, #FEC802 50%, #DD161C 100%)",
        "arc-black-red": "linear-gradient(90deg, #000000 0%, #DD161C 100%)",
      },
      keyframes: {
        "draw-arc": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-square": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-24" },
        },
      },
      animation: {
        "draw-arc": "draw-arc 2.2s ease-out forwards",
        "pulse-square": "pulse-square 2.4s ease-in-out infinite",
        marquee: "marquee 18s linear infinite",
        "dash-flow": "dash-flow 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
