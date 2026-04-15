/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3faf5',
          100: '#dff3e5',
          500: '#2f8f4e',
          600: '#277842',
          700: '#1e5d33',
        },
        accent: {
          500: '#c7372f',
          600: '#a82f28',
        },
        cream: '#fbfaf7',
        ink: '#111827',
      },
      boxShadow: {
        soft: '0 12px 40px -20px rgba(17, 24, 39, 0.25)',
        card: '0 18px 45px -24px rgba(15, 23, 42, 0.2)',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(135deg, rgba(17,24,39,0.78), rgba(47,143,78,0.35))',
        'promo-glow': 'linear-gradient(135deg, rgba(199,55,47,0.95), rgba(239,68,68,0.85))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
