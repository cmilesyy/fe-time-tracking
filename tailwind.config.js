/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      colors: {
'primary-blue': '#5847eb',
'primary-light-red-work': '#ff8c66',
'primary-soft-blue-play': '#56c2e6',
'primary-light-red-study': '#ff5c7c',
'primary-lime-green-exercise': '#4acf81',
'primary-violet-social': '#7536d3',
'primary-soft-orange-selfcare' : '#f1c65b',
'neutral-very-dark-blue': '#0f1424',
'neutral-dark-blue':  '#1c1f4a',
'neutral-desaturated-blue':  '#6f76c8',
'neutral-pale-blue': '#bdc1ff'
      }
    },
  },
  plugins: [],
}

