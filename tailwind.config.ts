import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1e1e1e",
        sidebar: "#252526",
        activity: "#333333",
        panel: "#252526",
        accent: "#007acc",
        tabbar: "#2d2d2d",
        tabActive: "#1e1e1e",
        statusbar: "#007acc",
        text: "#d4d4d4",
        textMuted: "#858585",
        border: "#3c3c3c",
        hover: "#2a2d2e",
        selected: "#37373d",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "Menlo", "monospace"],
        sans: ['"Segoe UI"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
