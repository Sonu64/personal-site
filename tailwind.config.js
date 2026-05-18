/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          bg: "#0C0C0C",
          surface: "#161616",
          border: "#333333",
        },
        orange: {
          primary: "#FF7A3D",
          dim: "#CC5F28",
          glow: "rgba(255,122,61,0.25)",
        },
        mint: {
          primary: "#7EC8A4",
          dim: "#5AA880",
          glow: "rgba(126,200,164,0.2)",
        },
        lilac: {
          primary: "#B48EE0",
          dim: "#8C6CB8",
          glow: "rgba(180,142,224,0.2)",
        },
        cream: "#FAF7F0",
        ash: "#888888",
        // Light mode (vintage blueprint)
        parchment: {
          bg: "#F5F0E8",
          surface: "#EDE8DC",
          border: "#C8BFA8",
        },
        blueprint: {
          ink: "#1A1A2E",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        hand: ["Caveat", "cursive"],
      },
      boxShadow: {
        comic: "4px 4px 0px #333333",
        "comic-orange": "4px 4px 0px #FF7A3D",
        "comic-mint": "4px 4px 0px #7EC8A4",
        "comic-lilac": "4px 4px 0px #B48EE0",
        "glow-orange": "0 0 20px rgba(255,122,61,0.35)",
        "glow-mint": "0 0 20px rgba(126,200,164,0.3)",
        "glow-lilac": "0 0 20px rgba(180,142,224,0.3)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "draw-in": "drawIn 1.5s ease-out forwards",
        blink: "blink 1.2s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drawIn: {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "grain-texture":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
