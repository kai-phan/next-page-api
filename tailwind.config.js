const plugin = require('tailwindcss/plugin');

const { colorsPlugin, modePlugin } = require('./tw');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
        phone: { raw: '(max-width: 767px)' },
        tablet: { raw: '(min-width: 768px) and (max-width: 1023px)' },
        desktop: { raw: '(min-width: 1024px)' },
      },
    }
  },
  plugins: [colorsPlugin, modePlugin],
};
