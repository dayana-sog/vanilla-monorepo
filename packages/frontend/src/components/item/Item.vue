<template>
    <div :class="safeListClasses">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const GRID_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const FLEXORDER = ['first', 'last', 'none', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const GRID_RESPONSIVE = ['sm', 'md', 'lg', 'xl', '2xl']

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Item',
    props: {
        colSpan: {
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
        rowSpan: {
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
        order: {
            type: [String, Number],
            validator: (value: number | string) => FLEXORDER.includes(value),
            default: null,
        }
    },
    setup(props) {
        const safeListClasses = ['box-border', 'm-0']

        const verifyResponsive = () => {
            const propsWithValues = Object.entries(props).filter(([key, value]) => value !== null)
            propsWithValues.forEach(([key, value]) => {
                const spanClasses = []

                switch (key) {
                    case 'colSpan':
                        if (typeof value === 'number') {
                            spanClasses.push(`col-span-${value}`)
                        } else {
                            const colSpanValue = value as { [key: string]: number }
                            spanClasses.push(...Object.keys(colSpanValue).map(size => `${size}:col-span-${colSpanValue[size]}`))
                        }
                        break
                    case 'rowSpan':
                        if (typeof value === 'number') {
                            spanClasses.push(`row-span-${value}`)
                        } else {
                            const rowSpanValue = value as { [key: string]: number }
                            spanClasses.push(...Object.keys(rowSpanValue).map(size => `${size}:row-span-${rowSpanValue[size]}`))
                        }
                        break
                    default:
                        break
                }

                safeListClasses.push(...spanClasses)
            })
        }

        const verifyOrder = () => {
            const propsWithValues = Object.entries(props).filter(([key, value]) => value !== null)
            propsWithValues.forEach(([key, value]) => {
                const flexClasses = generateFlexClasses(key, value)
                safeListClasses.push(...flexClasses)
            })
        }

        const generateFlexClasses = (key: string, value: unknown): string[] => {
            if (key === 'order') {
                return [`order-${value}`]
            }
            return []
        }

        verifyOrder()
        verifyResponsive()

        return {
            safeListClasses
        }
    }
})
</script>