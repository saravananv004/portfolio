/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#dcf2fe',
          200: '#bee6fd',
          300: '#90d4fb',
          400: '#5abdf7',
          500: '#33a3f2',
          600: '#1d86e5',
          700: '#166ec9',
          800: '#165ba2',
          900: '#174c82',
          950: '#123053',
        },
        navy: {
          800: '#0f172a',
          850: '#0d1527',
          900: '#0b1120',
          950: '#070b14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
