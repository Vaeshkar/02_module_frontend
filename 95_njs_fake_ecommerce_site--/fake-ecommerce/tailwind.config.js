/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        fake_ecommerce: {
          primary: '#FF6633', 
          'primary-content': '#ffffff',
          secondary: '#303030', 
          accent: '#FF9966', 
          neutral: '#787878',
          'base-100': '#F9FAFB',
        },
      },
    ],
  },
}