import type { SelectButtonPassThroughOptions } from "primevue/selectbutton";

export default {
    root: ({ props }) => ({
        class: [
            // Colors
            "bg-surface-100 dark:bg-surface-950",

            // Shape
            "px-1.5 py-1.5",
            "[&>*]:rounded-md",
            "rounded-md",

            // Position
            "space-x-2",

            {
                "opacity-60 select-none pointer-events-none cursor-default":
                    props.disabled,
            },
        ],
    }),
    button: ({ context }: any) => ({
        class: [
            "relative",
            // Font
            "text-sm",
            "leading-none",

            // Flex Alignment
            "inline-flex items-center align-bottom text-center",

            // Spacing
            "px-2.5 py-1.5",

            // Color
            {
                "bg-surface-0 dark:bg-surface-950": !context.active,
                "text-surface-700 dark:text-white/80": !context.active,
                "bg-surface-100 dark:bg-surface-700": context.active,
            },

            // States
            "hover:bg-surface-200 dark:hover:bg-surface-600/80",
            {
                "opacity-60 select-none pointer-events-none cursor-default":
                    context.disabled,
            },

            // Transition
            "transition duration-200",

            // Misc
            "cursor-pointer select-none overflow-hidden",
        ],
    }),
    label: {
        class: "font-semibold",
    },
} satisfies SelectButtonPassThroughOptions;
