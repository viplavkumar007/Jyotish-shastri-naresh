/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#D4AF37',
          600: '#C9A84C',
          700: '#B8860B',
          800: '#92650a',
          900: '#78350f',
        },
        dark: {
          900: '#0a0802',
          800: '#110e03',
          700: '#1a1505',
          600: '#241c07',
        },
        cream: '#F5F0E8',
        maroon: '#7B1F1F',
      },
      fontFamily: {
        hindi: ['"Tiro Devanagari Hindi"', 'serif'],
        display: ['"Cinzel Decorative"', 'serif'],
        body: ['"EB Garamond"', 'serif'],
        sans: ['"Nunito"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0a0802 0%, #1a1505 100%)',
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
        'gold': '0 4px 30px rgba(212,175,55,0.35)',
        'gold-lg': '0 8px 60px rgba(212,175,55,0.5)',
        'card': '0 8px 32px rgba(10,8,2,0.25)',
      },
    },
  },
  plugins: [],
}
