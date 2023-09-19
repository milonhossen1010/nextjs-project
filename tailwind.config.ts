/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodyColor: '#F2F2F2',
        primeColor: '#168C61',
        greenLight: '#24A681',
        darkGreen: '#06403D',
      },
    },
  },
  plugins: [],
};
export default config;
