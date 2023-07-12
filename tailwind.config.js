/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "primary-50-color": "#3071B9",
        "primary-100-color": "#112B55",
        "primary-200-color": "#31ABE8",
        "primary-300-color": "#FCECE2",
        "supporting-50-color": "#112B55",
        "supporting-100-color": "#00262E",
        "supporting-200-color": "#F0F0F0",
        "supporting-300-color": "#E50000",
        "supporting-400-color": "#999999",
        "additional-50-color": "#F0F2F5",
        "additional-100-color": "#FFFFFF",
        "additional-200-color": "#FFFFFF",
        "additional-300-color": "#000000",
        "additional-400-color": "#112b55",
        "white-color": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
