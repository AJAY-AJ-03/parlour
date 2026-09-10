/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0B0B0B',
          card: '#171717',
          deep: '#241E1B',
        },
        ivory: '#F7F4EE',
        cream: '#EFE9DE',
        champagne: '#E4D2AF',
        gold: {
          DEFAULT: '#C9A227',
          light: '#D6B85A',
          deep: '#A9824C',
        },
        charcoal: '#241E1B',
        text: {
          dark: '#1A1A1A',
          muted: '#6B665D',
          light: '#FFFFFF',
        },
        brown: {
          DEFAULT: '#241E1B',
          deep: '#171717',
        },
        rose: {
          DEFAULT: '#C9A227',
          light: '#D6B85A',
          dark: '#A9824C',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1360px',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        progressLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        progressLine: 'progressLine 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards',
      },
    },
  },
  plugins: [],
}

