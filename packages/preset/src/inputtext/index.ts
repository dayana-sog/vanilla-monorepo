import type { InputTextPassThroughOptions } from "primevue/inputtext";

export default {
    root: ({ props, context, parent }) => ({
        class: [
            // Font
            "font-thin leading-6",
            "w-full",

            // Spacing
            "m-0",
            {
                "px-4 py-3 text-lg sm:text-md": props.size == "large",
                "px-2 py-1 sm:text-sm": props.size == "small",
                "py-2 px-3 sm:text-sm": props.size == null,
            },

            // Shape
            { "rounded-md": parent.instance.$name !== "InputGroup" },
            {
                "first:rounded-l-md rounded-none last:rounded-r-md":
                    parent.instance.$name == "InputGroup",
            },
            {
                "border-0 border-y border-l last:border-r":
                    parent.instance.$name == "InputGroup",
            },
            {
                "first:ml-0 ml-[-1px]":
                    parent.instance.$name == "InputGroup" &&
                    !parent.props.showButtons,
            },

            // Colors
            "text-surface-600 dark:text-surface-200",
            "placeholder:text-surface-400 dark:placeholder:text-surface-500",
            "bg-surface-0 dark:bg-surface-950",
            "border dark:border-surface-600",
            { "border border-rose-500": props.invalid },

            // States
            {
                "hover:border-primary-500 dark:hover:border-primary-400 dark:placeholder:text-surface-500":
                    !context.disabled,
                "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400":
                    !context.disabled,
                "opacity-60 select-none pointer-events-none cursor-default":
                    context.disabled,
            },

            // Interactions
            {
                "outline-none focus:ring-primary-500 dark:focus:ring-primary-400":
                    !context.disabled,
                "opacity-60 select-none pointer-events-none cursor-default":
                    context.disabled,
            },

            // Misc
            "appearance-none",
            "transition-colors duration-200",
        ],
    }),
} satisfies InputTextPassThroughOptions;
