import type { BadgeProps } from "primevue/badge"
import type { BadgeContext } from "primevue/badgedirective"

export interface IBadge {
    props: BadgeProps
    context: BadgeContext
}

export default {
    root: ({ props }: IBadge) => ({
        class: [
            // Font
            "font-medium",
            {
                "text-xs leading-[1.5rem]": props.size == null,
                "text-lg leading-[2.25rem]": props.size == "large",
                "text-2xl leading-[3rem]": props.size == "xlarge",
            },

            // Alignment
            "text-center inline-block",

            // Size
            "p-0 px-1",
            {
                "min-w-[1.5rem] h-[1.5rem]": props.size == null,
                "min-w-[2.25rem] h-[2.25rem]": props.size == "large",
                "min-w-[3rem] h-[3rem]": props.size == "xlarge",
            },

            // Shape
            "rounded-full",

            // Color
            "text-white",
            {
                "bg-primary-500 dark:bg-primary-400":
                    props.severity == null || props.severity == "primary",
                "bg-surface-300 dark:bg-surface-700":
                    props.severity == "secondary",
                "bg-green-500 dark:bg-green-400": props.severity == "success",
                "bg-blue-500 dark:bg-blue-400": props.severity == "info",
                "bg-orange-500 dark:bg-orange-400": props.severity == "warning",
                "bg-purple-500 dark:bg-purple-400": props.severity == "help",
                "bg-red-500 dark:bg-red-400": props.severity == "danger",
                "bg-black dark:bg-white dark:text-black": props.severity == "contrast"
            },
        ],
    })
};
