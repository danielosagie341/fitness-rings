/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '250px',
      // => @media (min-width: 250px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2000px',
      // => @media (min-width: 1600px) { ... }
    },
    boxShadow: {
      '3xl': '2px 2px 68px -12px',
      '2xl': '2px 2px 62px -8px rgba(0, 0, 0, 0.14)',
      'xl': '2px 2px 20px -15px',
      'progressBar': '4px 4px 6px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(225, 225, 225, 0.7)',
      'progressBar2': 'inset 4px 4px 6px -1px rgba(0, 0, 0, 0.15), inset -6px -6px 10px -1px rgba(225, 225, 225, 0.7), -0.5px -0.5px 0px rgba(225, 225, 225, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05)'
     },
    extend: {},
  },
  plugins: [],
}
