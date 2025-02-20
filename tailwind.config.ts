import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#000000',
        purpleAccent: '#5e548e',
        neon: '#39ff14',
        gold: '#d4af37',
        highlight: '#6fffe9',
        emphasis: '#5bc0be',
        cosmic_teal: '#34a0a4',
      },
      fontFamily: {
        title: ['YUniverse-B', 'sans-serif'],
        body: ['GmarketSansMedium', 'Nanum Gothic Coding', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        parallax: 'parallax 5s ease-in-out infinite',
        floatUp: 'floatUp 2s ease-in-out forwards',
        twinkle: 'twinkle 3s infinite ease-in-out', // 🌟 추가된 부분
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        parallax: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        floatUp: {
          '0%': { transform: 'translateY(50px)' },
          '100%': { transform: 'translateY(-50px)' },
        },
        twinkle: {
          // 🌟 추가된 부분
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
