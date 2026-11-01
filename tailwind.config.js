/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#003D2E',
          50: '#E6F0ED',
          100: '#CCE1DB',
          200: '#99C3B7',
          300: '#66A593',
          400: '#33876F',
          500: '#003D2E',
          600: '#003125',
          700: '#00251C',
          800: '#001913',
          900: '#000D0A',
        },
        natural: {
          DEFAULT: '#4B8B2C',
          50: '#EFF5EB',
          100: '#DFEBD7',
          200: '#BFD7AF',
          300: '#9FC387',
          400: '#7FAF5F',
          500: '#4B8B2C',
          600: '#3C6F23',
          700: '#2D531A',
          800: '#1E3711',
          900: '#0F1B09',
        },
        golden: {
          DEFAULT: '#E5A313',
          50: '#FDF5E6',
          100: '#FBEBCC',
          200: '#F7D799',
          300: '#F3C366',
          400: '#EFAF33',
          500: '#E5A313',
          600: '#B7820F',
          700: '#89620B',
          800: '#5B4108',
          900: '#2D2104',
        },
        cream: '#F3F7F1',
        darktext: '#17251E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
