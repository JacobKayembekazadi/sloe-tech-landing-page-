/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        surface: "#181818",
        "surface-2": "#1F1F1F",
        "surface-3": "#272727",
        "surface-4": "#313131",
        paper: "#F5F1E8",
        ash: "#9B9B9B",
        "signal-green": "#4ADE80",
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
        code: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        "content": "1200px",
      },
      transitionTimingFunction: {
        fluid: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
}
