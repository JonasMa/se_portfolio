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
      animation: {
        'typewriter-6': "typewriter 2s steps(6) forwards",
      }, 
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      }
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
