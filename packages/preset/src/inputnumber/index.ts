import type { InputNumberProps } from "primevue/inputnumber";
import type { InputTextPassThroughMethodOptions } from "primevue/inputtext";

export interface IInputNumberProps {
    props: InputNumberProps
    parent: any
}

export default {
    root: ({ props, parent }: IInputNumberProps) => ({
        class: [
            // Flex
            "inline-flex",
            {
                "flex-col":
                    props.showButtons && props.buttonLayout == "vertical",
            },
            { "flex-1 w-[1%]": parent.instance.$name == "InputGroup" },

            //Sizing
            { "!w-16": props.showButtons && props.buttonLayout == "vertical" },

            // Shape
            { "border border-rose-500": props.invalid },
            {
                "first:rounded-l-md rounded-none last:rounded-r-md":
                    parent.instance.$name == "InputGroup" && !props.showButtons,
            },
            {
                "border-0 border-y border-l last:border-r border-surface-200 dark:border-surface-600":
                    parent.instance.$name == "InputGroup" && !props.showButtons,
            },
            {
                "border-0 ": parent.instance.$name !== "InputGroup",
            },
            "rounded-md",
        ],
    }),
    input: {
        root: ({ parent, context }: InputTextPassThroughMethodOptions) => ({
            class: [
                // Display
                "flex flex-auto",

                //Text
                "sm:text-sm",
                {
                    "text-center":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "vertical",
                },

                // Spacing
                "m-0",
                "py-2 px-3",

                // Shape
                "rounded-md",
                { "rounded-tr-none rounded-br-none": parent.props.showButtons },
                {
                    "rounded-tl-none rounded-bl-none":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "horizontal",
                },
                {
                    "rounded-none":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "vertical",
                },

                // Colors
                "text-surface-600 dark:text-surface-200",
                "placeholder:text-surface-400 dark:placeholder:text-surface-500",
                "bg-surface-0 dark:bg-surface-950",
                "border dark:border-surface-600",
                { "border border-rose-500": parent.props.invalid },

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

                //Position
                {
                    "order-2":
                        parent.props.buttonLayout == "horizontal" ||
                        parent.props.buttonLayout == "vertical",
                },
            ],
        }),
    },

    buttongroup: {
        class: ["flex", "flex-col"],
    },

    incrementbutton: {
        root: ({ parent }: IInputNumberProps) => ({
            class: [
                // Display
                "flex flex-auto",

                // Alignment
                "items-center",
                "justify-center",
                "text-center align-bottom",

                //Position
                "relative",
                {
                    "order-3":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "horizontal",
                },
                {
                    "order-1":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "vertical",
                },

                //Color
                "text-surface-0 dark:text-surface-400",
                "bg-primary-500 dark:bg-surface-800",

                // Sizing
                {
                    "px-2.5 py-1.5":
                        parent.props.showButtons &&
                        parent.props.buttonLayout !== "stacked",
                },
                {
                    "p-0":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "stacked",
                },
                {
                    "w-full":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "vertical",
                },

                // Shape
                "rounded-md",
                {
                    "rounded-tl-none rounded-br-none rounded-bl-none":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "stacked",
                },
                {
                    "rounded-bl-none rounded-tl-none":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "horizontal",
                },
                {
                    "rounded-bl-none rounded-br-none":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "vertical",
                },

                //States
                "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus:dark:ring-primary-500",
                "hover:bg-primary-400 dark:hover:bg-primary-700",

                //Misc
                "cursor-pointer overflow-hidden select-none",
            ],
        }),
        label: {
            class: "h-0 w-0",
        },
    },
    decrementbutton: {
        root: ({ parent }: IInputNumberProps) => ({
            class: [
                // Display
                "flex flex-auto",

                // Alignment
                "items-center",
                "justify-center",
                "text-center align-bottom",

                //Position
                "relative",
                {
                    "order-1":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "horizontal",
                },
                {
                    "order-3":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "vertical",
                },

                //Color
                "text-surface-0 dark:text-surface-400",
                "bg-primary-500 dark:bg-surface-800",

                // Sizing
                "w-[2rem]",
                {
                    "px-2.5 py-1.5":
                        parent.props.showButtons &&
                        parent.props.buttonLayout !== "stacked",
                },
                {
                    "p-0":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "stacked",
                },
                {
                    "w-full":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "vertical",
                },

                // Shape
                "rounded-md",
                {
                    "rounded-tr-none rounded-tl-none rounded-bl-none":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "stacked",
                },
                {
                    "rounded-tr-none rounded-br-none ":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "horizontal",
                },
                {
                    "rounded-tr-none rounded-tl-none ":
                        parent.props.showButtons &&
                        parent.props.buttonLayout == "vertical",
                },

                //States
                "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus:dark:ring-primary-500",
                "hover:bg-primary-400 dark:hover:bg-primary-700",

                //Misc
                "cursor-pointer overflow-hidden select-none",
            ],
        }),
        label: {
            class: "h-0 w-0",
        },
    },
};
