/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        slate: {
          100: "#f0f4f8",
          200: "#d9e2ec",
          300: "#bcd8e8",
          400: "#9fbce2",
          500: "#83a0dc",
          600: "#6884d6",
          700: "#4d68d0",
          800: "#324cc9",
          900: "#182fc3",
        },
      },
      fontSize: {
        '7xl': '5rem',
        '500px': '500px', 
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
