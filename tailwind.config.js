/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefaf5',
          100: '#fdf5eb',
          200: '#fae6cd',
          300: '#f7d7af',
          400: '#f1b973',
          500: '#eb9b37',
          600: '#d48c32',
          700: '#b1752a',
          800: '#8e5e22',
          900: '#744d1c',
        },
        brown: {
          50: '#f8f6f4',
          100: '#f1ede9',
          200: '#ddd2c8',
          300: '#c9b7a7',
          400: '#a08165',
          500: '#774b23',
          600: '#6b4420',
          700: '#59391b',
          800: '#472e16',
          900: '#3a2612',
        },
      },
    },
  },
  plugins: [],
};
