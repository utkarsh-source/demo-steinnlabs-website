import { nextui } from '@nextui-org/react';

import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [nextui()],
  theme: {
    extend: {
      fontFamily: {
        spacegrotesk: ['var(--font-spacegrotesk-sans)', 'sans'],
        satoshi: ['var(--font-satoshi-sans)', 'sans'],
      },
      colors: {
        steinnlabs: {
          orange: {
            DEFAULT: '#FD461E',
            100: '#FFEDE9',
            500: '#FD461E',
          },
          grey: {
            DEFAULT: '#121212',
            200: '#D7D7D7',
            300: '#575757',
            400: '#101828',
            500: '#121212',
          },
          white: '#FFFFFF',
          black: '#000000',
        },
      },
    },
  },
};
// eslint-disable-next-line import/no-default-export
export default config;
