/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
          wiggle: 'wiggle 2s linear infinite',
      },
      keyframes: {
        wiggle: {
          'from': { transform: 'scale(0.9)' },
          'to': { transform: 'scale(0.8)' },      
        }
      },
    },
  },
  plugins: [],
};
