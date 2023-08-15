import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-60': 'linear-gradient(180deg, #000 60%, #fff 0)',
      },
      colors: {
        'livella-light-tan': '#EEEDE9',
        'livella-red': '#CB363A',
        'livella-tan': '#E4E1DA',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
export default config
