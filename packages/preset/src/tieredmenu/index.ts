import type { TieredMenuContext } from "primevue/tieredmenu"

export default {
    root: {
        class: [
            // Shape
            "rounded-lg",

            // Size
            "w-auto",

            // Colors
            "bg-surface-0 dark:bg-surface-700",
            "ring-1 ring-surface-200 dark:ring-surface-700",
            "text-surface-600 dark:text-white"
        ],
    },
    menu: {
        class: [
            // Spacings and Shape
            "list-none",
            "m-0",
            "p-0",
            "outline-none",

            //Border-radius on first and last items
            "[&>li:first-child>div]:rounded-t-lg",
            "[&>li:last-child>div]:rounded-b-lg"
        ],
    },
    menuitem: {
        class: [
            "relative first:mt-0 mt-1"
        ],
    },
    content: ({ focused, active }: TieredMenuContext) => ({
        class: [
            //  Colors
            {
                // "text-surface-600 dark:text-white/70":
                //     !context.focused && !context.active,
                // "text-primary-500 dark:text-white/70 bg-primary-50 dark:bg-black/70":
                //     context.focused && !context.active,
                "text-primary-500 dark:text-surface-0/80 bg-primary-50 dark:bg-black/70":
                    focused && active
                // 'text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70': !context.focused && context.active   =====> Verify
            },

            
            // Hover States
            "hover:bg-primary-50 hover:!text-primary-500 dark:hover:bg-surface-0/10 dark:hover:!text-white",
            // {
            //     "hover:bg-primary-50 dark:hover:bg-surface-800":
            //         !context.active,
            //     "hover:bg-primary-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80":
            //         context.active
            // },

            // Transitions
            "transition-shadow",
            "duration-200"
        ],
    }),
    action: {
        class: [
            "relative",

            // Font
            "font-semibold",

            // Flexbox
            "flex",
            "items-center",

            // Spacing
            "py-2",
            "px-3",

            // Misc
            "no-underline",
            "overflow-hidden",
            "cursor-pointer",
            "select-none",
        ],
    },
    icon: {
        class: [
            // Spacing
            "mr-2",
            "leading-6",
            "text-sm"
        ],
    },
    label: {
        class: ["leading-none", "text-sm"],
    },
    submenuicon: {
        class: [
            // Position
            "ml-auto",
        ],
    },
    submenu: {
        class: [
            // Size
            "w-full sm:w-48",

            // Spacing
            "p-1.5",
            "m-0 mx-1.5",
            "list-none",

            // Shape
            "shadow-none sm:shadow-md",
            "border-0",

            // Position
            "static sm:absolute",
            "z-10",

            // Color
            "bg-surface-0 dark:bg-surface-700",
        ],
    },
    separator: {
        class: "border-t border-surface-200 dark:border-surface-600 my-1",
    },
};
