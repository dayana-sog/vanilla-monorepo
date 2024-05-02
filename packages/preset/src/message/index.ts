import type { MessageProps, MessageState } from "primevue/message"

export interface IMessage{
    props: MessageProps
    state: MessageState
}

export default {
    root: ({ props }: IMessage) => ({
        class: [
            // Spacing and Shape
            "my-2 mx-0",
            "rounded-md",
            "ring-1 ring-inset ring-offset-0",

            // Colors
            {
                "bg-blue-50 dark:bg-blue-800/20 text-blue-500 dark:text-blue-300 ring-blue-200 dark:ring-blue-700": props.severity == "info" || props.severity == null,
                "bg-green-50 ring-green-200 text-green-500 dark:bg-green-800/20 dark:ring-green-700":
                    props.severity == "success",
                "bg-orange-50 ring-orange-200 text-orange-500 dark:bg-orange-800/20 dark:ring-orange-700":
                    props.severity == "warn",
                "bg-red-50 ring-red-200 text-red-500 dark:bg-red-800/20 dark:ring-red-700": props.severity == "error",
                "bg-surface-50 ring-surface-200 text-surface-500 dark:bg-surface-800/20 dark:ring-surface-500":
                    props.severity == "secondary",
                "bg-black ring-surface-600 text-white dark:bg-white":
                    props.severity == "contrast",
            }
        ],
    }),
    wrapper: {
        class: [
            // Flexbox
            "flex items-center",

            // Spacing
            "px-3 py-2"
        ],
    },
    icon: {
        class: [
            // Sizing and Spacing
            "w-5 h-5",
            "mr-3 shrink-0"
        ],
    },
    text: ({ props }: IMessage) => ({
        class: [
            // Font and Text
            "text-sm leading-none",
            "font-medium",
            {
                "dark:text-blue-300":
                    props.severity == "info" || props.severity == null,
                "dark:text-green-300":
                    props.severity == "success",
                "dark:text-orange-300":
                    props.severity == "warn",
                "dark:text-red-300": props.severity == "error",
                "dark:text-surface-200":
                    props.severity == "secondary",
                "dark:text-black":
                    props.severity == "contrast",
            }
        ],
    }),
    button: ({ props }: IMessage) => ({
        class: [
            // Flexbox
            "flex items-center justify-center",

            // Size
            "w-6 h-6",

            // Spacing and Misc
            "ml-auto relative",

            // Shape
            "rounded-full",

            // Colors
            "bg-transparent",

            {
                "text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-700/30"
                    :props.severity == "info" || props.severity == null,
                "text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-700/30"
                    :props.severity == 'success',
                "text-orange-700 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-700/30"
                    :props.severity == 'warn',
                "text-red-700 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-700/30"
                    :props.severity == 'error',
                "text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-700"
                    :props.severity == 'secondary',
                "text-surface-200 dark:text-black hover:bg-surface-700 dark:hover:bg-surface-100"
                    :props.severity == 'contrast'
            },

            // Transitions
            "transition duration-200 ease-in-out",

            // States
            "outline-none focus:ring-1 focus:ring-inset",
            "focus:ring-primary-500 dark:focus:ring-primary-400",

            // Misc
            "overflow-hidden"
        ],
    }),
    closeicon: {
        class: [
            // Sizing and Spacing
            "w-3 h-3",
            "shrink-0"
        ],
    },
    transition: {
        enterFromClass: "opacity-0",
        enterActiveClass: "transition-opacity duration-300",
        leaveFromClass: "max-h-40",
        leaveActiveClass: "overflow-hidden transition-all duration-300 ease-in",
        leaveToClass: "max-h-0 opacity-0 !m-0"
    }
};
