/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        BtnS: '5.875rem',
        BtnL: '24.375rem',
      },
      height: {
        BtnS: '3.125rem',
        BtnL: '4.504rem',
      },
      colors: {
        'c-black': '#101010',
        'input-black': '#393939',
        modalBack: '#1F1F1F',
        skelleton: '#3A3A3A',
        quitBtn: '#4F4F4F',
        mainB: '#26D9FD',
        mainR: '#F76969',
      },
      borderRadius: {
        unifyR: '5px',
      },
      keyframes: {},
    },
  },
  plugins: [],
};
