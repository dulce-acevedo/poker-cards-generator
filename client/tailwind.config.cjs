/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins']
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#E96D7B',

          secondary: '#A992F7',

          accent: '#88DCDD',

          neutral: '#27302E',

          'base-100': '#82D4C1',

          info: '#2463EB',

          success: '#16A249',

          warning: '#DB7706',

          error: '#DC2828'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
