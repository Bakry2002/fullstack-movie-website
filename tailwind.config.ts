import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#da2f68',
                secondary: '#f89e00',
                screen: '#04152d',
                'screen-light': '#343d4d',
            },
        },
    },
    plugins: [],
}
export default config
