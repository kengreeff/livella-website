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
        'black-60': 'linear-gradient(180deg, #1f1914 60%, #fff 0)',
      },
      colors: {
        'livella-red': '#CB363A',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
export default config
