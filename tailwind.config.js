/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          mint: '#D1E8E2',
          teal: '#116466',
        },
        accent: {
          peach: '#FFCB9A',
          sand: '#D9B08C',
          olive: '#2C3531',
        },
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out'
      }
    },
  },
  plugins: [],
};