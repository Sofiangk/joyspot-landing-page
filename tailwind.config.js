/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        display: ['Fredoka One', 'cursive'],
      },
      colors: {
        primary: {
          50: '#fef1f4',
          100: '#fee5eb',
          200: '#fcccd8',
          300: '#faa3ba',
          400: '#f66d91',
          500: '#e93e6c',
          600: '#d92d5d',
          700: '#b51f4a',
          800: '#951c41',
          900: '#7d1b3b',
        },
        secondary: {
          50: '#f0f7fc',
          100: '#e1eff9',
          200: '#bdddf2',
          300: '#88c3e7',
          400: '#4da3d7',
          500: '#2274a5',
          600: '#1b6291',
          700: '#1a4f75',
          800: '#1a4262',
          900: '#1a3853',
        },
        accent: {
          50: '#f0f7fc',
          100: '#e1eff9',
          200: '#bdddf2',
          300: '#88c3e7',
          400: '#4da3d7',
          500: '#2274a5',
          600: '#1b6291',
          700: '#1a4f75',
          800: '#1a4262',
          900: '#1a3853',
        },
      },
    },
  },
  plugins: [],
};
