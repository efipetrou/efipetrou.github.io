const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    aspectRatio: {
      9: '9',
      16: '16',
    },
    extend: {
      colors: {
        'cognizant': '#F9F8F7',
        'cognizant-pharma': '#F3F0FF',
        'cognizant-ecommerce': '#EFEDEA',
        'mesogheo22': '#39412F',
        'mesogheo92': '#EBEEE7',
        'efi': '#F53994',
        'eat': '#F4BAC8',
        'tat': '#FDF6E3',
        'tat2': '#859900'
      },
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'xxxs': '.5rem',
        'xxs': '.6rem',
        '1.5xl': '1.375rem'
      },
      inset: {
        '1/12': '8.333333%'
      },
      margin: {
        '26': '6.5rem',
      },
      screens: {
        //   sm: '640px',
        //   md: '768px',
        //   lg: '1024px',
        //   xl: '1280px',
        //'2xl': '1536px',
        '3xl': '1921px',
        '4xl': '2048px'
      },
      spacing: {
        '22': '5.5rem',
        '1/12vh': '8.333333vh',
      },
      textColor: {
        'hover': '#F53994',
        'tat': '#586E75',
      },
      width: {
        '7/8': '87.5%',
        '86/100': '87.5%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
