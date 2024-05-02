import type { TagProps } from "primevue/tag"

export interface ITag{
    props: TagProps
}

export default {
    root: ({ props }: ITag) => ({
        class: [
            //Font
            "text-xs font-bold",

            //Alignments
            "inline-flex items-center justify-center",

            //Spacing
            "px-2 py-1",

            //Shape
            {
                "rounded-md": !props.rounded,
                "rounded-full": props.rounded,
            },

            //Colors
            {
                "text-surface-500 dark:text-white": props.severity == "secondary",
                "dark:text-black": props.severity == "contrast",
                "text-white": 
                    props.severity == null ||
                    props.severity == "primary" || 
                    props.severity == "success" ||
                    props.severity == "info" ||
                    props.severity == "warning" ||
                    props.severity == "danger" ||
                    props.severity == "contrast"
            },
            {
                "bg-primary-500 dark:bg-primary-400":
                    props.severity == null || props.severity == "primary",
                "bg-surface-100/70 dark:bg-surface-100/10": props.severity == "secondary",
                "bg-green-500 dark:bg-green-400": props.severity == "success",
                "bg-blue-500 dark:bg-blue-400": props.severity == "info",
                "bg-orange-500 dark:bg-orange-400": props.severity == "warning",
                "bg-red-500 dark:bg-red-400": props.severity == "danger",
                "bg-black dark:bg-white": props.severity == "contrast"
            },
        ],
    }),
    value: {
        class: "leading-normal",
    },
    icon: {
        class: "mr-1 text-sm",
    },
};
