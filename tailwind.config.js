/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'primary-color': '#E55300',
        'orange-100-color': '#FAD2BB',
        'orange-80-color': '#FCECE2',
        'orange-50-color': '#FFF6F2',
        'grey-500-color': '#999999',
        'light-grey-color': '#F0F0F0',
        'light-orange-color': '#FFF6F2',
        'teal-100-color': '#9BD4DE',
        'teal-50-color': '#F2FDFF',
        'teal-color': '#F2FDFF',
        'white-color': '#FFF',
        'tosca-800-color': '#00262E',
        'tosca-default-color': '#006677',
        'red-color': '#E50000',
      },
    },
  },
  plugins: [],
};
