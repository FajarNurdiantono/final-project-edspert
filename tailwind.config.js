/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        edspert: '#152A46',
        button: '#FF6161',
        main: '#EFF4FA',
      },
      fontFamily: {
        vietnam: ['Be Vietnam Pro', 'sans-serif'],
        Mulish: ['Mulish', 'sans-serif'],
      },
      fontWeight: {
        navbar: '700',
        500: '500',
        600: '600',
        400: '400',
        700: '700',
        800: '800',
      },
      colors: {
        abu: '#A3A3A3',
        kuning: '#FFCD29',
        hijau: '#0ACF83',
      },
    },
    plugins: [],
  },
};
