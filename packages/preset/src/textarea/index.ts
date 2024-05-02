import type { TextareaProps, TextareaContext } from "primevue/textarea"

export interface ITextareaProps {
    props: TextareaProps
    context: TextareaContext
}

export default {
    root: ({ props, context }: ITextareaProps) => ({
        class: [
            // Font
            "font-thin leading-6",
            "sm:text-sm",

            // Spacing
            "m-0",
            "py-1.5 px-3",

            // Shape
            "rounded-md",
            "appearance-none",
            { "border border-rose-500": props.invalid },

            // Colors
            "text-surface-600 dark:text-surface-200",
            "placeholder:text-surface-400 dark:placeholder:text-surface-500",
            "border dark:border-surface-600",
            "bg-surface-0 dark:bg-surface-950",

            // States
            {
                "hover:border-primary-500 dark:hover:border-primary-400":
                    !context.disabled,
                "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400":
                    !context.disabled,
                "opacity-60 select-none pointer-events-none cursor-default":
                    context.disabled,
            },

            // Misc
            "appearance-none",
            "transition-colors duration-200",
        ],
    }),
};
