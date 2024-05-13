<template>
    <div :class="classList">
        <slot />
    </div>
</template>
<script setup lang='ts'>
import { defineProps, withDefaults } from 'vue'

export type GRID_SIZES = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'
export type COLUMN_START_END = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 'auto'
export type FLEXORDER = 'first' | 'last' | 'none' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type GRID_RESPONSIVE = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type Props = {
    colSpan?: GRID_SIZES | { [key in GRID_RESPONSIVE]?: GRID_SIZES }
    rowSpan?: GRID_SIZES | { [key in GRID_RESPONSIVE]?: GRID_SIZES }
    order?: FLEXORDER | null
    colStart?: COLUMN_START_END | { [key in GRID_RESPONSIVE]?: COLUMN_START_END }
    colEnd?: COLUMN_START_END | { [key in GRID_RESPONSIVE]?: COLUMN_START_END }
    rowStart?: COLUMN_START_END | { [key in GRID_RESPONSIVE]?: COLUMN_START_END }
    rowEnd?: COLUMN_START_END | { [key in GRID_RESPONSIVE]?: COLUMN_START_END }
}

const props = withDefaults(defineProps<Props>(), {
    colSpan() { return {} },
    rowSpan() { return {} },
    order: null,
    colStart() { return {} },
    colEnd() { return {} },
    rowStart() { return {} },
    rowEnd() { return {} }
})

const classList = [
    generateClasses('colSpan', 'col-span'),
    generateClasses('rowSpan', 'row-span'),
    generateClasses('colStart', 'col-start'),
    generateClasses('colEnd', 'col-end'),
    generateClasses('rowStart', 'row-start'),
    generateClasses('rowEnd', 'row-end'),
    props.order ? `order-${props.order}` : '',

].filter(Boolean)

function generateClasses(property: keyof Props, prefix: string): string {
    const value = props[property]

    if (typeof value === 'number') {
        return `${prefix}-${value}`
    }
    if (typeof value === 'object' && value !== null) {
        const responsiveClasses = Object.entries(value).map(([size, sizeValue]) => {
            return `${size}:${prefix}-${sizeValue}`
        })

        return responsiveClasses.join(' ')
    }
    return ''
}
</script>