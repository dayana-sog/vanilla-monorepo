import type { PaginatorContext, PaginatorProps, PaginatorState } from "primevue/paginator"

export interface IPaginator{
    props: PaginatorProps
    context: PaginatorContext
    state: PaginatorState
    instance: IPaginator
    parent: IPaginator
}

export default {
    root: {
        class: [
            // Flex & Alignment
            "flex items-center justify-center flex-wrap gap-2",

            // Spacing
            "px-4 py-2",
            "[&>span:first-child]:absolute [&>span:first-child]:left-0 [&>span:first-child]:mx-2",

            // Shape
            "border-t rounded-b-lg",

            // Color
            "bg-surface-0 dark:bg-surface-800",
            "text-surface-500 dark:text-white/60",
            "border-surface-200 dark:border-surface-700"
        ],
    },
    pages:{
        class:[
            "flex gap-1"
        ]
    },
    paginatorwrapper: {
        class: "mt-[-1px]",
    },
    firstpagebutton: ({ context }: IPaginator) => ({
        class: [
            "relative",

            // Font
            "text-sm font-medium",

            // Flex & Alignment
            "inline-flex items-center justify-center",

            // Shape
            "border-t-2 border-transparent rounded-sm",

            // Size
            "min-w-[2rem] h-9 mt-[-1px]",

            // Color
            "text-surface-500 dark:text-white/60",

            // State
            {
                "hover:bg-primary-500 hover:text-white dark:hover:bg-surface-100/10 border-transparent":
                    !context.disabled,
                "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
                    !context.disabled,
            },

            // Transition
            "transition duration-200",

            // Misc
            "user-none overflow-hidden",
            {
                "cursor-default pointer-events-none opacity-60":
                    context.disabled,
            },
        ],
    }),
    previouspagebutton: ({ context }: IPaginator) => ({
        class: [
            "relative",

            // Font
            "text-sm font-medium",

            // Flex & Alignment
            "inline-flex items-center justify-center",

            // Shape
            "border-t-2 border-transparent rounded-sm",

            // Size
            "min-w-[2rem] h-9 mt-[-1px]",

            // Color
            "text-surface-500 dark:text-white/60",

            // State
            {
                "hover:bg-primary-500 hover:text-white dark:hover:bg-surface-100/10 border-transparent":
                    !context.disabled,
                "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
                    !context.disabled,
            },

            // Transition
            "transition duration-200",

            // Misc
            "user-none overflow-hidden",
            {
                "cursor-default pointer-events-none opacity-60":
                    context.disabled,
            },
        ],
    }),
    nextpagebutton: ({ context }: IPaginator) => ({
        class: [
            "relative",

            // Font
            "text-sm font-medium",

            // Flex & Alignment
            "inline-flex items-center justify-center",

            // Shape
            "border-t-2 border-transparent rounded-sm",

            // Size
            "min-w-[2rem] h-9 mt-[-1px]",

            // Color
            "text-surface-500 dark:text-white/60",

            // State
            {
                "hover:bg-primary-500 hover:text-white dark:hover:bg-surface-100/10 border-transparent":
                    !context.disabled,
                "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
                    !context.disabled,
            },

            // Transition
            "transition duration-200",

            // Misc
            "user-none overflow-hidden",
            {
                "cursor-default pointer-events-none opacity-60":
                    context.disabled,
            },
        ],
    }),
    lastpagebutton: ({ context }: IPaginator) => ({
        class: [
            "relative",

            // Font
            "text-sm font-medium",

            // Flex & Alignment
            "inline-flex items-center justify-center",

            // Shape
            "border-t-2 border-transparent rounded-sm",

            // Size
            "min-w-[2rem] h-9 mt-[-1px]",

            // Color
            "text-surface-500 dark:text-white/60",

            // State
            {
                "hover:bg-primary-500 hover:text-white dark:hover:bg-surface-100/10 border-transparent":
                    !context.disabled,
                "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
                    !context.disabled,
            },

            // Transition
            "transition duration-200",

            // Misc
            "user-none overflow-hidden",
            {
                "cursor-default pointer-events-none opacity-60":
                    context.disabled,
            },
        ],
    }),
    pagebutton: ({ context }: IPaginator) => ({
        class: [
            "relative",

            // Font
            "text-sm font-medium",

            // Flex & Alignment
            "inline-flex items-center justify-center",

            // Size
            "min-w-[2rem] h-9 mt-[-1px]",

            //Shape
            "rounded-sm",

            // Color
            {
                "text-surface-500 dark:text-white/60 hover:bg-primary-500 hover:text-white dark:hover:bg-surface-100/10 border-transparent":
                    !context.active,
                "bg-primary-500 dark:border-primary-400 text-surface-0 rounded-sm dark:text-surface-0":
                    context.active,
            },

            // State
            {
                "hover:border-surface-300 dark:hover:border-surface-200/30":
                    !context.disabled && !context.active,
                "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
                    !context.disabled,
            },

            // Transition
            "transition duration-200",

            // Misc
            "user-none overflow-hidden",
            {
                "cursor-default pointer-events-none opacity-60":
                    context.disabled,
            },
        ],
    }),
    rowperpagedropdown: {
        root: ({ props, state }: any) => ({
            class: [
                // Display and Position
                "inline-flex",
                "absolute right-0",

                // Shape
                "h-10",
                "rounded-md",

                // Spacing
                "mx-2",

                // Color and Background
                "bg-transparent",
                "border",

                // Transitions
                "transition-all",
                "duration-200",

                // States
                {
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500":
                        !state.focused,
                },

                // Misc
                "cursor-pointer",
                "select-none",
                {
                    "opacity-60": props.disabled,
                    "pointer-events-none": props.disabled,
                    "cursor-default": props.disabled,
                },
            ],
        }),
        input: {
            class: [
                //Font
                "font-sans",
                "leading-6",
                "sm:text-sm",

                // Display
                "block",
                "flex-auto",
                "flex items-center",

                // Color and Background
                "bg-transparent",
                "border-0",
                "text-surface-800 dark:text-white/80",

                // Sizing and Spacing
                "w-[1%]",
                "py-2 px-2 pr-0",

                //Shape
                "rounded-none",

                // Transitions
                "transition",
                "duration-200",

                // States
                "focus-visible:outline-none focus-visible:shadow-none",

                // Misc
                "relative",
                "cursor-pointer",
                "overflow-hidden overflow-ellipsis",
                "whitespace-nowrap",
                "appearance-none",
            ],
        },
        trigger: {
            class: [
                //Font
                "sm:text-sm",

                // Flexbox
                "flex items-center justify-center",
                "shrink-0",

                // Color and Background
                "bg-transparent",
                "text-surface-500 dark:text-white/60",

                // Size
                "w-12",
                "h-9",

                // Shape
                "rounded-tr-md",
                "rounded-br-md",
            ],
        },
        dropdownicon: {
            class: "",
        },
        panel: {
            class: [
                // Position
                "absolute",
                "mt-1",

                // Shape
                "border-0",
                "rounded-md",
                "shadow-md",

                // Color
                "bg-surface-0 dark:bg-surface-800",
                "text-surface-800 dark:text-white/80",
                "ring-1 ring-inset ring-surface-300 dark:ring-surface-700",
            ],
        },
        wrapper: {
            class: [
                // Sizing
                "max-h-[15rem]",

                // Misc
                "overflow-auto",
            ],
        },
        list: {
            class: "py-1 list-none m-0",
        },
        item: ({ context }: any) => ({
            class: [
                // Font
                "sm:text-sm",
                "leading-none",
                {
                    "font-normal": !context.selected,
                    "font-bold": context.selected,
                },

                // Position
                "relative",

                // Shape
                "border-0",
                "rounded-none",

                // Spacing
                "m-0",
                "py-2 px-4",

                // Color
                {
                    "text-surface-700 dark:text-white/80":
                        !context.focused && !context.selected,
                },
                {
                    "bg-primary-500 dark:bg-surface-100/10 text-white":
                        context.focused && context.selected,
                },
                {
                    "bg-transparent text-surface-700 dark:text-white/80":
                        !context.focused && context.selected,
                },

                //States
                "hover:bg-primary-500 dark:hover:bg-surface-100/10 hover:text-white",

                // Misc
                "cursor-pointer",
                "overflow-hidden",
                "whitespace-nowrap",
            ],
        }),
    },
    jumptopageinput: {
        root: {
            class: "inline-flex mx-2",
        },
        input: {
            root: {
                class: [
                    "relative",

                    //Font
                    "font-sans",
                    "leading-6",
                    "sm:text-sm",

                    // Display
                    "block",
                    "flex-auto",

                    // Color and Background
                    "bg-transparent",
                    "border-0",
                    "text-surface-800 dark:text-white/80",
                    "ring-1 ring-inset ring-surface-300 dark:ring-surface-700",
                    // Sizing and Spacing
                    "w-[1%] max-w-[3rem]",
                    "py-1.5 px-3",

                    //Shape
                    "rounded-md",

                    // Transitions
                    "transition",
                    "duration-200",

                    // States
                    "hover:border-primary-500 dark:hover:border-primary-400",
                    "focus-visible:outline-none focus-visible:shadow-none",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500",
                    // Misc
                    "cursor-pointer",
                    "overflow-hidden overflow-ellipsis",
                    "whitespace-nowrap",
                    "appearance-none",
                ],
            },
        },
    },
    jumptopagedropdown: {
        root: ({ props, state }: any) => ({
            class: [
                // Display and Position
                "inline-flex",
                "relative",

                // Shape
                "h-8",
                "rounded-md",

                // Spacing
                "mx-2",

                // Color and Background
                "bg-transparent",

                // Transitions
                "transition-all",
                "duration-200",

                // States
                {
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500":
                        !state.focused,
                },

                // Misc
                "cursor-pointer",
                "select-none",
                {
                    "opacity-60": props.disabled,
                    "pointer-events-none": props.disabled,
                    "cursor-default": props.disabled,
                },
            ],
        }),
        input: {
            class: [
                //Font
                "font-sans",
                "leading-6",
                "sm:text-sm",

                // Display
                "block",
                "flex-auto",
                "flex items-center",

                // Color and Background
                "bg-transparent",
                "border-0",
                "text-surface-800 dark:text-white/80",

                // Sizing and Spacing
                "w-[1%]",
                "py-1.5 px-3 pr-0",

                //Shape
                "rounded-none",

                // Transitions
                "transition",
                "duration-200",

                // States
                "focus-visible:outline-none focus-visible:shadow-none",

                // Misc
                "relative",
                "cursor-pointer",
                "overflow-hidden overflow-ellipsis",
                "whitespace-nowrap",
                "appearance-none",
            ],
        },
        trigger: {
            class: [
                //Font
                "sm:text-sm",

                // Flexbox
                "flex items-center justify-center",
                "shrink-0",

                // Color and Background
                "bg-transparent",
                "text-surface-500",

                // Size
                "w-12",
                "h-8",

                // Shape
                "rounded-tr-md",
                "rounded-br-md",
            ],
        },
        panel: {
            class: [
                // Position
                "absolute top-0 left-0",
                "mt-1",

                // Shape
                "border-0",
                "rounded-md",
                "shadow-md",

                // Color
                "bg-surface-0 dark:bg-surface-800",
                "text-surface-800 dark:text-white/80",
                "ring-1 ring-inset ring-surface-300 dark:ring-surface-700",
            ],
        },
        wrapper: {
            class: [
                // Sizing
                "max-h-[15rem]",

                // Misc
                "overflow-auto",
            ],
        },
        list: {
            class: "py-1 list-none m-0",
        },
        item: ({ context }: any) => ({
            class: [
                // Font
                "sm:text-sm",
                "leading-none",
                {
                    "font-normal": !context.selected,
                    "font-bold": context.selected,
                },

                // Position
                "relative",

                // Shape
                "border-0",
                "rounded-none",

                // Spacing
                "m-0",
                "py-2 px-4",

                // Color
                {
                    "text-surface-700 dark:text-white/80":
                        !context.focused && !context.selected,
                },
                {
                    "bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700":
                        context.focused && context.selected,
                },
                {
                    "bg-transparent text-surface-700 dark:text-white/80":
                        !context.focused && context.selected,
                },

                //States
                "hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700",

                // Misc
                "cursor-pointer",
                "overflow-hidden",
                "whitespace-nowrap",
            ],
        }),
    },
};
