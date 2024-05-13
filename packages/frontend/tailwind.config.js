/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'surface-border': 'rgb(var(--surface-border))',
                'surface-ground': 'rgb(var(--surface-ground))',
                'primary-50': 'rgb(var(--primary-50))',
                'primary-100': 'rgb(var(--primary-100))',
                'primary-200': 'rgb(var(--primary-200))',
                'primary-300': 'rgb(var(--primary-300))',
                'primary-400': 'rgb(var(--primary-400))',
                'primary-500': 'rgb(var(--primary-500))',
                'primary-600': 'rgb(var(--primary-600))',
                'primary-700': 'rgb(var(--primary-700))',
                'primary-800': 'rgb(var(--primary-800))',
                'primary-900': 'rgb(var(--primary-900))',
                'primary-950': 'rgb(var(--primary-950))',
                'surface-0': 'rgb(var(--surface-0))',
                'surface-50': 'rgb(var(--surface-50))',
                'surface-100': 'rgb(var(--surface-100))',
                'surface-200': 'rgb(var(--surface-200))',
                'surface-300': 'rgb(var(--surface-300))',
                'surface-400': 'rgb(var(--surface-400))',
                'surface-500': 'rgb(var(--surface-500))',
                'surface-600': 'rgb(var(--surface-600))',
                'surface-700': 'rgb(var(--surface-700))',
                'surface-800': 'rgb(var(--surface-800))',
                'surface-900': 'rgb(var(--surface-900))',
                'surface-950': 'rgb(var(--surface-950))'
            }
        }
    },
    safelist: [
        {
            pattern: /grid-(cols|rows)-(1|2|3|4|5|6|7|8|9|10|11|12)/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl']
        },
        {
            pattern: /gap-(x|y)-(0|1|2|3|4|5|6|7|8|9|10|11|12)/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl']
        },
        {
            pattern: /gap-(0|1|2|3|4|5|6|7|8|9|10|11|12)/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl']
        },
        {
            pattern: /justify-(start|center|end|between|around|evenly|stretch|normal)/
        },
        {
            pattern: /items-(start|center|end|stretch|baseline)/
        },
        {
            pattern: /order-(first|last|none|1|2|3|4|5|6|7|8|9|10|11|12)/
        },
        {
            pattern: /(row|col)-span-(1|2|3|4|5|6|7|8|9|10|11|12|full)/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl']
        },
        {
            pattern: /(row|col)-(start|end)-(1|2|3|4|5|6|7|8|9|10|11|12|13|auto)/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl']
        },
        {
            pattern: /grid-flow-(row|col|dense|row-dense|col-dense)/
        }
    ]
}
