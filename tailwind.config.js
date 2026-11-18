/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* Brand palette lifted from the existing webbiezinfotech.in stylesheet */
        brand: {
          50:  '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#1E8975',
          600: '#177263',
          700: '#115C50',
          800: '#0C443C',
          900: '#07191B'
        },
        ink: { DEFAULT: '#07191B', 900: '#07191B', 800: '#0B2724', 700: '#113B36' },
        amber: { brand: '#FCB045' },
        violet: { brand: '#833AB4' },
        rose: { brand: '#FD1D1D' }
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        brand: ['"Inknut Antiqua"', 'Georgia', 'serif']
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(30,137,117,0.55)',
        'glow-lg': '0 0 120px -20px rgba(30,137,117,0.65)'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg,#1E8975 0%,#2DD4BF 45%,#FCB045 100%)',
        'ink-gradient': 'linear-gradient(160deg,#07191B 0%,#0B2724 55%,#113B36 100%)',
        'insta-gradient': 'linear-gradient(45deg,#833AB4 0%,#FD1D1D 50%,#FCB045 100%)'
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-rev': 'marquee-rev 38s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        shimmer: 'shimmer 2.6s linear infinite'
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'marquee-rev': { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        aurora: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '.75' },
          '33%': { transform: 'translate3d(6%,-4%,0) scale(1.15)', opacity: '.95' },
          '66%': { transform: 'translate3d(-5%,5%,0) scale(1.05)', opacity: '.8' }
        },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } }
      }
    }
  },
  plugins: []
=======
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inknut Antiqua', 'serif'],
        serif: ['Inknut Antiqua', 'serif'],
      },
    },
  },
  plugins: [],
>>>>>>> origin/main
}
