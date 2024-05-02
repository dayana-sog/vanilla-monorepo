<template>
    <div :class="safeListClasses">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const GRID_SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const GRID_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const GRID_RESPONSIVE = ['sm', 'md', 'lg', 'xl', '2xl']
const GRID_ITEMS_ALIGNMENT = ['start', 'center', 'end', 'stretch', 'baseline']
const GRID_DIRECTION = ['row', 'row-reverse', 'col', 'col-reverse']
const GRID_JUSTIFICATION = ['start', 'center', 'end', 'between', 'around', 'evenly', 'stretch', 'normal']
const GRID_WRAP = ['nowrap', 'wrap', 'wrap-reverse']
const GRID_AUTO_FLOW = ['row', 'col', 'dense', 'row-dense', 'col-dense']
const GRID_GROW = ['grow', 'grow-0']
const teste = ['grow', 'grow-0']

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Grid',
    props: {
        grid: { // Display grid
            type: Boolean,
            default: false,
        },
        flex: { // Display flex
            type: Boolean,
            default: false,
        },
        spacing: { // gap-*
            type: [Object, Number],
            validator: (value: { [key: string]: number } | number) => {
                if (typeof value === 'number') {
                    return GRID_SPACINGS.includes(value)
                } else if (typeof value === 'object') {
                    const keys = Object.keys(value)
                    const isValidSizes = keys.every((size) => GRID_RESPONSIVE.includes(size))
                    const isValidValues = keys.every(size => GRID_SIZES.includes(value[size]))
                    return isValidSizes && isValidValues
                } else {
                    return false
                }
            },
            default: () => ({})
        },
        columns: { // grid-cols-*
            type: [Object, Number],
            validator: (value: { [key: string]: number } | number) => {
                if (typeof value === 'number') {
                    return GRID_SIZES.includes(value)
                } else if (typeof value === 'object') {
                    const keys = Object.keys(value)
                    const isValidSizes = keys.every((size) => GRID_RESPONSIVE.includes(size))
                    const isValidValues = keys.every(size => GRID_SIZES.includes(value[size]))
                    return isValidSizes && isValidValues
                } else {
                    return false
                }
            },
            default: () => ({})
        },
        rows: { // grid-rows-*
            type: [Object, Number],
            validator: (value: { [key: string]: number } | number) => {
                if (typeof value === 'number') {
                    return GRID_SIZES.includes(value)
                } else if (typeof value === 'object') {
                    const keys = Object.keys(value)
                    const isValidSizes = keys.every((size) => GRID_RESPONSIVE.includes(size))
                    const isValidValues = keys.every(size => GRID_SIZES.includes(value[size]))
                    return isValidSizes && isValidValues
                } else {
                    return false
                }
            },
            default: () => ({})
        },
        rowSpacing: { // gap-y-*
            type: [Object, Number],
            validator: (value: { [key: string]: number } | number) => {
                if (typeof value === 'number') {
                    return GRID_SIZES.includes(value)
                } else if (typeof value === 'object') {
                    const keys = Object.keys(value)
                    const isValidSizes = keys.every((size) => GRID_RESPONSIVE.includes(size))
                    const isValidValues = keys.every(size => GRID_SIZES.includes(value[size]))
                    return isValidSizes && isValidValues
                } else {
                    return false
                }
            },
            default: () => ({})
        },
        columnSpacing: { // gap-x-*
            type: [Object, Number],
            validator: (value: { [key: string]: number } | number) => {
                if (typeof value === 'number') {
                    return GRID_SIZES.includes(value)
                } else if (typeof value === 'object') {
                    const keys = Object.keys(value)
                    const isValidSizes = keys.every((size) => GRID_RESPONSIVE.includes(size))
                    const isValidValues = keys.every(size => GRID_SIZES.includes(value[size]))
                    return isValidSizes && isValidValues
                } else {
                    return false
                }
            },
            default: () => ({})
        },
        flow: { // grid-flow-*
            type: String,
            validator: (value: string) => GRID_AUTO_FLOW.includes(value),
            default: null
        },
        alignItems: {
            type: String,
            validator: (value: string) => GRID_ITEMS_ALIGNMENT.includes(value),
            default: null
        },
        direction: {
            type: String,
            validator: (value: string) => GRID_DIRECTION.includes(value),
            default: null
        },
        justifyContent: {
            type: String,
            validator: (value: string) => GRID_JUSTIFICATION.includes(value),
            default: null
        },
        wrap: {
            type: String,
            validator: (value: string) => GRID_WRAP.includes(value),
            default: null
        },
        grow: {
            type: String,
            validator: (value: string) => GRID_GROW.includes(value),
            default: null
        }
    },
    setup(props) {
        const safeListClasses = ['']

        const verifyGridType = () => {
            if (props.grid) {
                safeListClasses.push('grid')
                verifyResponsive()
                verifyGap()
                verifyGridFlow(safeListClasses)
            } else {
                safeListClasses.push('flex')
                setFlexClasses()
                verifyGrow(safeListClasses)
            }
        }

        const handleGridClasses = (property: keyof typeof props, prefix: string, classes: string[]) => {
            if (typeof props[property] === 'number') {
                classes.push(`${prefix}-${props[property]}`)
            } else if (typeof props[property] === 'object' && props[property] !== null) {
                const propObject = props[property] as { [key: string]: number }
                const propKeys = Object.keys(propObject)
                const propClasses = propKeys.map(size => `${size}:${prefix}-${propObject[size]}`)
                classes.push(...propClasses)
            }
        }

        const verifyResponsive = () => {
            handleGridClasses('columns', 'grid-cols', safeListClasses)
            handleGridClasses('rows', 'grid-rows', safeListClasses)
        }

        const verifyGap = () => {
            const propsWithValues = Object.entries(props).filter(([key, value]) => value !== null)
            propsWithValues.forEach(([key, value]) => {
                const spacingClasses = []
                switch (key) {
                    case 'spacing':
                        if (typeof value === 'number') {
                            spacingClasses.push(`gap-${value}`)
                        } else {
                            const spacingValue = value as { [key: string]: number }
                            spacingClasses.push(...Object.keys(spacingValue).map(size => `${size}:gap-${spacingValue[size]}`))
                        }
                        break
                    case 'rowSpacing':
                        if (typeof value === 'number') {
                            spacingClasses.push(`gap-y-${value}`)
                        } else {
                            const rowSpacingValue = value as { [key: string]: number }
                            spacingClasses.push(...Object.keys(rowSpacingValue).map(size => `${size}:gap-y-${rowSpacingValue[size]}`))
                        }
                        break
                    case 'columnSpacing':
                        if (typeof value === 'number') {
                            spacingClasses.push(`gap-x-${value}`)
                        } else {
                            const columnSpacingValue = value as { [key: string]: number }
                            spacingClasses.push(...Object.keys(columnSpacingValue).map(size => `${size}:gap-x-${columnSpacingValue[size]}`))
                        }
                        break
                    default:
                        break
                }
                safeListClasses.push(...spacingClasses)
            })
        }

        const verifyGridFlow = (classes: string[]) => {
            if (props.flow) {
                classes.push(`grid-flow-${props.flow}`)
            }
        }

        // Flex
        const setFlexClasses = () => {
            const propsWithValues = Object.entries(props).filter(([key, value]) => value !== null)
            propsWithValues.forEach(([key, value]) => {
                const flexClasses = generateFlexClasses(key, String(value))
                safeListClasses.push(...flexClasses)
            })
        }

        const generateFlexClasses = (key: string, value: string): string[] => {
            switch (key) {
                case 'justifyContent':
                    return [`justify-${value}`]
                case 'direction':
                    return [`flex-${value}`]
                case 'alignItems':
                    return [`items-${value}`]
                default:
                    return []
            }
        }

        const verifyGrow = (classes: string[]) => {
            if (props.grow) {
                if (props.grow === 'grow') {
                    classes.push('grow')
                } else {
                    classes.push('grow-0')
                }
            }
        }

        return {
            safeListClasses,
            verifyGridType,
        }
    },
    created() {
        this.verifyGridType()
    },
})
</script>