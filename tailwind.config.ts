import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '768px',
        lg: '1280px',
      },
      zIndex: {
        modal: '10',
      },
      colors: {
        primary: '#9935ff',

        'purple-10': '#f8f0ff',
        'purple-20': '#dcb9ff',
        'purple-30': '#9935ff',
        'purple-40': '#6e0ad1',

        'red-10': '#FFEBE7',
        'red-20': '#FFAF9B',
        'red-30': '#FF8D72',
        'red-40': '#FF4040',

        'blue-10': '#cce6ff',
        'blue-20': '#0080ff',

        'green-10': '#d4f7d4',
        'green-20': '#20a81e',

        'gray-05': '#fafafa',
        'gray-10': '#f2f2f3',
        'gray-20': '#e5e4e7',
        'gray-30': '#cbc9cf',
        'gray-40': '#a4a1aa',
        'gray-50': '#7d7986',

        white: '#ffffff',
        black: '#111322',
      },
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
