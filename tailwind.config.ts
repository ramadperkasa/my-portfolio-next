import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
     "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      primary: '#FF004E'
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
