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
        'mobile-s': '300px',
        'mobile': '540px',
        'tablet': '800px',
        'uiuxbreak': '1024px',
        'h2break': '1440px',

        laptop: { max: "1024px" },

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
        'aspekta': ['Aspekta', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '110%', letterSpacing: '-0.04em', fontWeight: '600' }],
        'h2': ['40px', { lineHeight: 'auto', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: 'auto', letterSpacing: '-1%', fontWeight: '500' }],
        'p1': ['20px', { lineHeight: '160%', letterSpacing: '-1%', fontWeight: '400' }],
        'p2': ['18px', { lineHeight: '160%', letterSpacing: '-1%', fontWeight: '500' }],
        'p3': ['16px', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '500' }],
        'p4': ['14px', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '400' }],
        'h4': ['14px', { lineHeight: 'auto', letterSpacing: '0', fontWeight: '400' }],
        'mh1': ['36px', { lineHeight: '120%', letterSpacing: '-0.03em', fontWeight: '600' }],
        'mh2': ['32px', { lineHeight: 'auto', letterSpacing: '-0.03em', fontWeight: '600' }],
        'm-h3': ['18px', { lineHeight: 'auto', letterSpacing: '-1%', fontWeight: '500' }],
        'm-p1': ['18px', { lineHeight: '160%', letterSpacing: '-1%', fontWeight: '400' }],
        'mp2': ['16px', { lineHeight: '160%', letterSpacing: '-1%', fontWeight: '500' }],
        'm-p3': ['14px', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '500' }],
        'm-p4': ['12px', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '400' }],
        'm-h4': ['12px', { lineHeight: 'auto', letterSpacing: '0', fontWeight: '400' }],
        'sh1': ['32px', { lineHeight: '120%', letterSpacing: '-0.03em', fontWeight: '600' }],
        'sh2': ['28px', { lineHeight: '120%', letterSpacing: '-0.03em', fontWeight: '600' }],
        'xsh1': ['32px', { lineHeight: '120%', letterSpacing: '-0.03em', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
