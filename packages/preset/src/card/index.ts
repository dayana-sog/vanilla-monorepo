export default {
    root: {
        class: [
            //Shape
            'rounded-lg',
            'border',

            //Color
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    header: {
        class: ['border-b border-surface-200 dark:border-surface-700']
    },
    body: {
        class: [
            'p-5',

            //Alignment
            'flex flex-col gap-4',
        ]
    },
    caption:{
        class:[
            //Alignment
            'flex flex-col gap-2',
        ]
    },
    title: {
        class: 'text-lg font-medium font-semibold'
    },
    subtitle: {
        class: [
            //Color
            'text-surface-400 dark:text-surface-0/60'
        ]
    },
    content: {
    },
    footer: {
    }
};
