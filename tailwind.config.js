/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#55A7DE',
        secondary: '#FFFFFF',
        accent: '#2B4C7E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #55A7DE, #2B4C7E)',
      },
    },
  },
  plugins: [],
};
