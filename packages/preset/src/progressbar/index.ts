import type { ProgressBarProps } from "primevue/progressbar"

export interface IProgressBar{
    props: ProgressBarProps
}

export default {
    root: ({ props }: IProgressBar) => ({
        class: [
            // Position and Overflow
            "relative overflow-hidden",

            // Shape and Size
            "border-0",
            "rounded-md",
            "bg-surface-100 dark:bg-surface-700",
            {
                "h-2": props.mode == "indeterminate" || !props.showValue,
                "h-5": props.mode !== "indeterminate" && props.showValue
            },

            // Before & After (!indeterminate)
            {
                "before:absolute before:w-full before:rounded-md before:h-5 before:top-[1.25rem] before:left-0 before:bottom-0 before:bg-surface-100 dark:before:bg-surface-700":
                    props.mode !== "indeterminate"
            }
        ]
    }),
    value: ({ props }: IProgressBar) => ({
        class: [
            // Flexbox & Overflow & Position
            {
                "absolute flex items-center justify-center":
                    props.mode !== "indeterminate",
            },

            // Colors
            "bg-primary-500 dark:bg-primary-400",

            // Spacing & Sizing
            "m-0",
            { "h-5 w-0": props.mode !== "indeterminate" },

            // Shape
            "border-0 rounded-md",

            // Transitions
            {
                "transition-width duration-1000 ease-in-out":
                    props.mode !== "indeterminate",
                "progressbar-value-animate": props.mode == "indeterminate",
            },

            // Before & After (indeterminate)
            {
                "before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit ":
                    props.mode == "indeterminate",
                "after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000":
                    props.mode == "indeterminate",
            }
        ]
    }),
    label: {
        class: [
            // Flexbox
            "inline-flex justify-end",
            "absolute",

            // Font and Text
            "text-xs text-white",
            "leading-none",
        ]
    }
}
