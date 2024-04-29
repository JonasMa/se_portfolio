/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2-auto': 'repeat(2, auto)',
      },
    },
    colors: {
      'blue-dark': '#023047',
      'blue-light': '#8ECAE6',
      white: '#FFF',
      yellow: '#FFB703',
      'yellow-light': '#FFB7031A',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Mono', 'serif'],
    },
  },
  plugins: [],
};
