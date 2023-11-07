import type { Config } from 'tailwindcss';
import colors from './constants/colors';
const {nextui} = require("@nextui-org/react");

const mainColor = '#08605F';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-color': mainColor,
        'secondary-color': 'white',
        'background-color': 'white',
        'light-color': '#81A3A2',
        'font-color': mainColor,
      },
      padding: {
        'standard': '6rem',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
