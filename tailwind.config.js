/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'model-S': "url('/src/images/model-s.jpg')",
        'model-3': "url('/src/images/model-3.jpg')",
        'model-X': "url('/src/images/model-x.jpg')",
        'model-Y': "url('/src/images/model-y.jpg')",
      },
      colors: {
        'left-btn': 'rgba(23, 26, 32, 0.8)',
      },
    },
  },
  plugins: [],
};
