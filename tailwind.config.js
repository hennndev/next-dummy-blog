module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        height: {
          xl: '400px'
        },
        gridTemplateColumns: {
          'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
          'auto-fill-sm': 'repeat(auto-fill, minmax(320px, 1fr))'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
