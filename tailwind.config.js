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
        'efi': '#F53994',
        'tat': '#FDF6E3',
        'tat2': '#859900'
      },
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat']
      },
      height: {
        '1/12vh': '8.333333vh'
      },
      screens: {
        //   sm: '640px',
        //   md: '768px',
        //   lg: '1024px',
        //   xl: '1280px',
        //'2xl': '1536px',
        '3xl': '1921px'
      },
      textColor: {
        'hover': '#F53994',
        'tat': '#586E75',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
