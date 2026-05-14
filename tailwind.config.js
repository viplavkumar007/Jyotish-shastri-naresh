/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fff8e6',
          100: '#fcedbf',
          200: '#f7dd8a',
          300: '#efc55a',
          400: '#e0b44a',
          500: '#D4AF37',
          600: '#c4963c',
          700: '#B8860B',
          800: '#8f6321',
          900: '#6d4519',
        },
        dark: {
          900: '#fffaf0',
          800: '#f7ecd8',
          700: '#efdec0',
          600: '#dfc7a0',
        },
        cream: '#4b2f1a',
        maroon: '#9b5e3c',
      },
      fontFamily: {
        hindi: ['"Tiro Devanagari Hindi"', 'serif'],
        display: ['"Cinzel Decorative"', 'serif'],
        body: ['"EB Garamond"', 'serif'],
        sans: ['"Nunito"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
        'dark-gradient': 'linear-gradient(135deg, #fffaf0 0%, #efdec0 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.4)' },
          '50%': { boxShadow: '0 0 50px rgba(212,175,55,0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'gold': '0 10px 35px rgba(212,175,55,0.22)',
        'gold-lg': '0 22px 70px rgba(184,134,11,0.24)',
        'card': '0 16px 40px rgba(109,69,25,0.12)',
      },
    },
  },
  plugins: [],
}
