/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
          wiggle: 'wiggle 0.5s alternate infinite',
      },
      keyframes: {
        wiggle: {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(0.9)' },      
        }
      },
    },
  },
  plugins: [],
};
