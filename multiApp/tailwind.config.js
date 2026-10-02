/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // Asegúrate de incluir las rutas a todos tus componentes/pantallas
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#49129C',
      },
    },
  },
  plugins: [],
};
