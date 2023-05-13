/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: "'Barlow Condensed', sans-serif",
        handdrawn: "'Delicious Handrawn', cursive",
        merriweather: "'Merriweather', serif",
        maven: "'Maven Pro', sans-serif",
        yanone: "'Yanone Kaffeesatz', sans-serif",
        cormorant: "'Cormorant Garamond', serif",
        spacemono: "'Space Mono', monospace",
      },
    },
  },
  plugins: [],
};
