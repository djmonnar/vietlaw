import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          dark: '#9C7B2F',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
          elevated: '#161616',
          border: '#252525',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #9C7B2F 100%)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 28s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
      boxShadow: {
        'gold-sm': '0 4px 24px -4px rgba(201, 168, 76, 0.15)',
        'gold-md': '0 12px 40px -8px rgba(201, 168, 76, 0.22)',
        'gold-lg': '0 20px 60px -12px rgba(201, 168, 76, 0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
