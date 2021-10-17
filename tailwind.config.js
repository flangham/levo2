module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '16/9': '56.25%',
        '4/3' : '75%'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1160px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {
      margin: ['hover', 'group-hover'],
      borderStyle: ['last']
    },
  },
  plugins: [],
};
