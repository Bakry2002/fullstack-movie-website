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
            backgroundImage: {
                'opacity-layer':
                    'linear-gradient(180deg, rgba(4, 21, 45, 0), #04152d 79.17%)',
                'button-gradient':
                    'linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)',
            },
        },
    },
    plugins: [],
}
export default config
