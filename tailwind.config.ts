import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xxxxs': '300px',
      'xxxs': '350px',
      'xxs': '400px',
      'xs': '580px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'display': ['Bowlby One'],
      'body': ['Share Tech Mono'],
    },
    fontSize: {
      'xxs': ['12px', '16px'],
      'xs': ['14px', '20px'],
      's': ['16px', '24px'],
      'm': ['20px', '28px'],
      'l': ['24px', '32px'],
      'xl': ['28px', '36px'],
      'xxl': ['32px', '40px'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
