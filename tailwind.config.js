/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        edspert: '#152A46',
        button: '#FF6161',
        main: '#EFF4FA',
        ungu: '#2A61A8',
        secondary: '#FCBC30',
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
        secondary: '#FCBC30',
        hijau: '#0ACF83',
        biru: '#197BFF',
        surface: '#F1F7FF',
        subdued: '#6D7175',
        three: '#FF6A28',
        dark: '#2B3E58',
        grey: '#868686',
      },
    },
    plugins: [],
  },
};
