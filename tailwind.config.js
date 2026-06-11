/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pitch-green': '#0a2a12',
        'electric-lime': '#ccff00',
        'charcoal': '#121212',
        'board-dark': '#121414',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'pitch-stripes': 'repeating-linear-gradient(0deg, transparent, transparent 10%, rgba(255, 255, 255, 0.03) 10%, rgba(255, 255, 255, 0.03) 20%)',
      }
    },
  },
  plugins: [],
}
