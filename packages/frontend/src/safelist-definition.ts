export const safelist = [
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
        pattern: /(row|col)-span-(0|1|2|3|4|5|6|7|8|9|10|11|12|full)/,
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
