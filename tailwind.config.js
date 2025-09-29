/** @type {import('tailwindcss').Config} */
import relumeTailwind from '@relume_io/relume-tailwind';

export default {
  content: [
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [relumeTailwind],
};
