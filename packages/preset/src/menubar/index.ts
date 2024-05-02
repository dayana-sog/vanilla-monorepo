import type { MenubarContext, MenubarPassThroughOptions, MenubarState } from "primevue/menubar"

export interface IMenubar{
    props: MenubarPassThroughOptions
    context: MenubarContext
    state: MenubarState
}

export default {
    root: {
        class: [
            "relative",

            // Flexbox
            "flex",
            "items-center",
            "gap-6",

            // Spacing
            "px-6",
            "min-h-[4rem]",

            // Color
            "bg-surface-0 dark:bg-surface-900",
            "ring-1 ring-inset ring-surface-100 dark:ring-surface-800 ring-offset-0",
        ],
    },
    menu: ({ state }: IMenubar) => ({
        class: [
            // Flexbox
            "sm:flex sm:row-gap-2 sm:col-gap-4",
            "items-center",
            "flex-wrap",
            "flex-col sm:flex-row",
            { hidden: !state?.mobileActive, flex: state?.mobileActive },

            // Position
            "absolute sm:relative",
            "top-full left-0",
            "sm:top-auto sm:left-auto",

            // Size
            "w-full sm:w-auto",

            // Spacing
            "m-0 ",
            "py-2 px-1.5 sm:py-0 sm:p-0 sm:py-1.5",
            "list-none",

            // Shape
            "shadow-md sm:shadow-none",
            "border-0",
            "sm:rounded-none rounded-md",

            // Color
            "bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent",

            // Misc
            "outline-none",
        ],
    }),
    menuitem: {
        class: [
            "sm:relative sm:w-auto w-full static",
        ],
    },
    content: ({ props, context }: IMenubar) => ({
        class: [
            "flex items-center gap-2 px-3 py-2 cursor-pointer",

            // Shape
            { "rounded-md": props.root },

            //  Colors
            {
                "text-surface-500 dark:text-white/70":
                    !context.focused && !context.active,
                "text-primary-500 bg-primary-50 dark:text-white dark:bg-surface-0/20":
                    context.focused && !context.active,
                "text-primary-500 bg-primary-100 dark:bg-surface-0/10 dark:text-white":
                    context.focused && context.active
            },

            // Hover States
            {
                "hover:bg-primary-50 hover:text-primary-500 dark:hover:bg-surface-0/10 dark:hover:text-white":
                    !context.active,
                "hover:bg-primary-100 text-primary-500 dark:text-white":
                    context.active,
            },

            // Transitions
            "transition-all",
            "duration-200",
        ],
    }),
    action: ({ context }: IMenubar) => ({
        class: [
            "relative",

            // Font
            "sm:text-sm font-normal",

            // Flexbox
            "flex",
            "items-center",

            // Spacing
            "py-2",
            "px-3",
            "my-1 sm:my-0",

            // Size
            {
                "pl-5 sm:pl-3": context.level === 1,
                "pl-7 sm:pl-3": context.level === 2,
            },

            // Misc
            "select-none",
            "cursor-pointer",
            "no-underline ",
            "overflow-hidden",
        ],
    }),
    icon: {
        class: "mr-2",
    },
    submenuicon: ({ props }: IMenubar) => ({
        class: [
            {
                "ml-auto sm:ml-2": props.root,
                "ml-auto": !props.root,
            },
        ],
    }),
    submenu: ({ props }: any) => ({
        class: [
            //Border-radius on first and last items
            "[&>li:first-child>div]:rounded-t-lg",
            "[&>li:last-child>div]:rounded-b-lg",

            // Size
            "w-full sm:w-48",
            
            // Spacing
            "m-0 ",
            "list-none",
            
            // Shape
            "rounded-lg",
            "shadow-none",
            "border",

            // Position
            "static sm:absolute",
            "z-10",
            { "sm:absolute sm:left-full sm:top-0": props.level > 1 },

            // Color
            "bg-surface-0 dark:bg-surface-900",
        ],
    }),
    separator: {
        class: "border-t border-surface-200 dark:border-surface-600 my-1",
    },
    button: {
        class: [
            // Flexbox
            "flex sm:hidden",
            "items-center justify-center",

            // Size
            "w-8",
            "h-8",

            // Shape
            "rounded-full",
            // Color
            "text-surface-500 dark:text-white/80",

            // States
            "hover:text-surface-600 dark:hover:text-white/60",
            "hover:bg-surface-50 dark:hover:bg-surface-800/80",
            "focus:outline-none focus:outline-offset-0",
            "focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400",

            // Transitions
            "transition duration-200 ease-in-out",

            // Misc
            "cursor-pointer",
            "no-underline",
        ],
    },
    end: {
        class: "ml-auto self-center",
    },
};
