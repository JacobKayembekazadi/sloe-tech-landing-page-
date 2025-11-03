/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        paper: "#F5F1E8",
        graphite: "#1C1C1C",
        ash: "#6A6A6A",
        mist: "#D7D7D7",
        "signal-green": "#7AFF6B",
        "electric-blue": "#00A3FF",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        code: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 12px 32px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      maxWidth: {
        "content": "1200px",
      },
    },
  },
  plugins: [],
}

