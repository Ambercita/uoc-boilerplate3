/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Monaco", "monospace"],
        serif: ["ui-serif", "Georgia"],
      },
      colors: {
        primary: "#dc2626",
        secondary: "#b91c1c",
        text: "#1f2937",
        subtext: "#374151",
        fondo: "#e2e8f0",
        border: "#fca5a5",
      },
    },
  },
  plugins: [],
};
