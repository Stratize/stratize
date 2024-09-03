/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enables dark mode using a class
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#ff5722',
        muted: '#b0b0b0',
        card: '#211f1b',
        card1: '#0d0d0d',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};