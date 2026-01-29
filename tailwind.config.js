const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#F72685',      // Primary Brand Pink
          light: '#FFE9F4',     // Primary Background Pink
          dark: '#E61E78',      // Hover state
          border: '#F2E7EB',    // Soft Border
          text: '#000000',      // Primary Text
          secondary: '#475569'  // Secondary Text
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
