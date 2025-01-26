import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'break': '825px',
        'mobile': '496px',
      },
      colors: {
        white: '#FFFFFF',
        'bg-white': '#FCFCFC',
        orange: '#EA3D25',
        yellow: '#FFE45B',
        black: '#000000',
        'bg-black': '#0A0A0A',
        grey: '#3D3D3D',
        'light-grey': '#CCCCCC',
      },
      fontFamily: {
        'tt-hoves': ['TT Hoves', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: 'auto', letterSpacing: '-3%', fontWeight: '600' }],
        'h2': ['40px', { lineHeight: 'auto', letterSpacing: '-2%', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: 'auto', letterSpacing: '-1%', fontWeight: '500' }],
        'p1': ['20px', { lineHeight: '160%', letterSpacing: '-1%', fontWeight: '400' }],
        'p2': ['18px', { lineHeight: '160%', letterSpacing: '-1%', fontWeight: '400' }],
        'p3': ['16px', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '500' }],
        'p4': ['14px', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '400' }],
        'h4': ['14px', { lineHeight: 'auto', letterSpacing: '0', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
