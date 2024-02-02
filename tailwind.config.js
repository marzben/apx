/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'custom-red': '#FF0000',
      },
      padding: {
        '5px': '5px',
      },
      width: {
        'custom-width': '576px',
        'select-width': '236px',
        'select-width-1': '496px'
      },
      height: {
        'custom-height': '663px',
        'select-height': '54px',
      },
      
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

