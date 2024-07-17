/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./src"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Ejemplo de extensión de fuentes
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
        '7xl': '5rem', // Ejemplo de extensión de tamaño de fuente
      },
    },
  },
  plugins: [
    // Aquí puedes habilitar plugins adicionales de Tailwind CSS si los necesitas
  ],
};


