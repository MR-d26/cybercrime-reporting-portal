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
        gov: {
          navy: '#0F2540',
          navyHover: '#1A365D',
          navyDark: '#0A182B',
          saffron: '#D9480F',
          saffronDark: '#B83200',
          saffronLight: '#FFF4EB',
          green: '#1B5E20',
          greenLight: '#E8F5E9',
          cream: '#FAF9F6',
          creamCard: '#FFFFFF',
          border: '#E2E8F0',
          textMain: '#1E293B',
          textMuted: '#475569',
          gold: '#D97706'
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans"', '"Noto Sans Devanagari"', '"Noto Sans Bengali"', '"Noto Sans Tamil"', '"Noto Sans Telugu"', 'sans-serif'],
      },
      boxShadow: {
        'gov': '0 4px 20px -2px rgba(15, 37, 64, 0.08), 0 2px 6px -1px rgba(15, 37, 64, 0.04)',
        'gov-lg': '0 10px 30px -5px rgba(15, 37, 64, 0.12), 0 4px 10px -2px rgba(15, 37, 64, 0.06)',
      }
    },
  },
  plugins: [],
}
