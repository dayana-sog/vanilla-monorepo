import type { TooltipContext } from "primevue/tooltip";

export interface ITooltip {
    context: TooltipContext;
}

export default {
    root: ({ context }: ITooltip) => ({
        class: [
            // Position
            "absolute",

            // Spacing
            {
                "px-1.5":
                    context?.right ||
                    context?.left ||
                    (!context?.right &&
                        !context?.left &&
                        !context?.top &&
                        !context?.bottom),
                "py-1.5": context?.top || context?.bottom,
            },
        ],
    }),
    arrow: ({ context }: ITooltip) => ({
        class: [
            // Position

            "absolute",

            // Size
            "w-0",
            "h-0",

            // Shape
            "border-transparent",
            "border-solid",
            {
                "border-y-[0.5rem] border-r-[0.5rem] border-l-0 border-r-surface-900":
                    context?.right ||
                    (!context?.right &&
                        !context?.left &&
                        !context?.top &&
                        !context?.bottom),
                "border-y-[0.5rem] border-l-[0.5rem] border-r-0 border-l-surface-600":
                    !!context?.left,
                "border-x-[0.5rem] border-t-[0.5rem] border-b-0 border-t-surface-600":
                    !!context?.top,
                "border-x-[0.5rem] border-b-[0.5rem] border-t-0 border-b-surface-600":
                    !!context?.bottom,
            },

            // Spacing
            {
                "-mt-2":
                    context?.right ||
                    (!context?.right &&
                        !context?.left &&
                        !context?.top &&
                        !context?.bottom),
                "-mt-1": context?.left,
                "-ml-2": context?.top || context?.bottom,
            },
        ],
    }),
    text: {
        class: [
            // Size
            "text-xs leading-none",

            // Spacing
            "p-2",

            // Shape
            "rounded-md",

            // Color
            "text-surface-0 dark:text-surface-0/80",
            "bg-surface-900 dark:bg-surface-900",
            "ring-1 ring-inset ring-surface-800 dark:ring-surface-800 ring-offset-0",

            // Misc
            "whitespace-pre-line",
            "break-words",
        ],
    },
};
