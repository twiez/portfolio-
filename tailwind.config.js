/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Noto Sans Mono"', 'monospace'],
      },
      colors: {
        terminal: {
          black: '#0A0A0A',
          gray: '#7F7F7F',
          text: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
};