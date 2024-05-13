<template>
    <div :class="classList">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

export type GRID_SPACING = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type GRID_SIZE = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type GRID_RESPONSIVE = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type GRID_ALIGNMENT = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type GRID_DIRECTION = 'row' | 'row-reverse' | 'col' | 'col-reverse'
export type GRID_JUSTIFY = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'stretch' | 'normal'
export type GRID_WRAP = 'nowrap' | 'wrap' | 'wrap-reverse'
export type GRID_AUTO_FLOW = 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense'
export type GRID_GROW = 'grow' | 'grow-0'

export type Props = {
    grid?: boolean
    flex?: boolean
    spacing?: GRID_SPACING | { [key in GRID_RESPONSIVE]?: GRID_SPACING }
    columns?: GRID_SIZE | { [key in GRID_RESPONSIVE]?: GRID_SIZE }
    rows?: GRID_SIZE | { [key in GRID_RESPONSIVE]?: GRID_SIZE }
    rowSpacing?: GRID_SIZE | { [key in GRID_RESPONSIVE]?: GRID_SIZE }
    columnSpacing?: GRID_SIZE | { [key in GRID_RESPONSIVE]?: GRID_SIZE }
    flow?: GRID_AUTO_FLOW | null
    alignItems?: GRID_ALIGNMENT | null
    direction?: GRID_DIRECTION | null
    justifyContent?: GRID_JUSTIFY | null
    wrap?: GRID_WRAP | null
    grow?: GRID_GROW | null
}

const props = withDefaults(defineProps<Props>(), {
    grid: false,
    flex: false,
    spacing() { return {} },
    columns() { return {} },
    rows() { return {} },
    rowSpacing() { return {} },
    columnSpacing() { return {} },
    flow: null,
    alignItems: null,
    direction: null,
    justifyContent: null,
    wrap: null,
    grow: null
})

const classList = [
    props.grid ? 'grid' : 'flex',
    generateClasses('columns', 'grid-cols'),
    generateClasses('rows', 'grid-rows'),
    generateGapClasses('spacing', 'gap'),
    generateGapClasses('rowSpacing', 'gap-y'),
    generateGapClasses('columnSpacing', 'gap-x'),
    props.flow ? `grid-flow-${props.flow}` : '',
    props.justifyContent ? `justify-${props.justifyContent}` : '',
    props.direction ? `flex-${props.direction}` : '',
    props.alignItems ? `items-${props.alignItems}` : '',
    props.grow === 'grow' ? 'grow' : (props.grow === 'grow-0' ? 'grow-0' : '')
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

function generateGapClasses(property: keyof Props, prefix: string): string {
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
