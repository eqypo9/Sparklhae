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
      },
    },
  },
  plugins: [],
} satisfies Config;
