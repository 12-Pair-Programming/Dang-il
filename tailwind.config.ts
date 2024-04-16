import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'Purple-10': '#f8f0ff',
      'Purple-20': '#ecd9ff',
      'Purple-30': '#dcb9ff',
      'Purple-40': '#c894fd',
      'Purple-50': '#ab57ff',
      'Purple-60': '#9935ff',
      'Purple-70': '#861dee',
      'Purple-80': '#6e0ad1',
      'Purple-90': '#5603a7',

      'Red-10': '#FFEBE7',
      'Red-20': '#FFAF9B',
      'Red-30': '#FF8D72',
      'Red-40': '#FF4040',

      'Blue-10': '#cce6ff',
      'Blue-20': '#0080ff',

      'Green-10': '#d4f7d4',
      'Green-20': '#20a81e',

      'Gray-05': '#fafafa',
      'Gray-10': '#f2f2f3',
      'Gray-20': '#e5e4e7',
      'Gray-30': '#cbc9cf',
      'Gray-40': '#a4a1aa',
      'Gray-50': '#7d7986',

      White: '#ffffff',
      Black: '#111322',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
