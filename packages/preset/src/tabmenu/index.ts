import type { TabMenuPassThroughOptions } from "primevue/tabmenu";

export default {
    root: {
        class: "overflow-x-auto",
    },
    menu: {
        class: [
            // Flexbox
            "flex flex-1",

            // Spacing
            "list-none",
            "p-0 m-0",

            // Colors
            "border-b border-surface-200 dark:border-surface-700",
            "text-surface-900 dark:text-surface-0/80",
        ],
    },
    menuitem: {
        class: "mr-0",
    },
    action: ({ context, state }) => ({
        class: [
            "relative",

            // Font
            "font-thin",
            "text-md uppercase",

            // Flexbox and Alignment
            "flex items-center",

            // Spacing
            "p-5",
            "-mb-[1px]",

            // Shape
            "border-b",
            "rounded-t-md",

            // Colors and Conditions
            {
                "border-surface-200 dark:border-surface-700":
                    state.d_activeIndex !== context.index,
                "text-surface-700 dark:text-surface-0/80":
                    state.d_activeIndex !== context.index,

                "border-primary-500 dark:border-primary-400":
                    state.d_activeIndex === context.index,
                "text-primary-500 dark:text-primary-400":
                    state.d_activeIndex === context.index,
            },

            // States
            "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset",
            "focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",

            // Transitions
            "transition-all duration-200",

            // Misc
            "cursor-pointer select-none text-decoration-none",
            "overflow-hidden",
            "user-select-none",
        ],
    }),
    icon: {
        class: "mr-2",
    },
} satisfies TabMenuPassThroughOptions;
