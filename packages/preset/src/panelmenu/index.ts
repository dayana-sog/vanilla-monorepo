export interface PanelMenuProps {
    context: PanelMenuContextProps;
    instance: any;
    collapse: String;
}

interface PanelMenuContextProps {
    item: any;
    index: Number;
    active: Boolean;
    focused: Boolean;
    disabled: Boolean;
}

export default {
    panel: {
        class: "mb-1",
    },
    header: {
        class: [
            "rounded-md",
            "outline-none",
            "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
        ],
    },
    headercontent: ({ context, instance }: PanelMenuProps) => ({
        class: [
            // Shape
            "rounded-md",
            {
                "rounded-br-md rounded-bl-md":
                    !context.active || instance.activeItem?.items === undefined,
                "rounded-br-0 rounded-bl-0":
                    context.active && instance.activeItem?.items !== undefined,
            },

            // Color

            context.active &&
                "text-primary-500 bg-primary-50 dark:text-surface-0 dark:bg-surface-0/10",
            !context.active &&
                "text-surface-600 hover:bg-primary-50 dark:hover:bg-surface-0/10 dark:bg-surface-800 dark:hover:text-surface-0 dark:text-surface-0",
            // Transition
            "transition duration-200 ease-in-out",
            "transition-shadow duration-200",

            // Font
            "text-sm",
        ],
    }),
    headeraction: ({ collapse }: PanelMenuProps) => ({
        class: [
            "relative",

            // Font
            "font-normal",
            "text-sm",
            "leading-none",

            // Flex & Alignments
            "flex items-center",

            // Spacing
            "px-3 py-2",

            // Misc
            "select-none cursor-pointer no-underline",

            // Collapsed
            { "flex-col": collapse },
        ],
    }),
    headerlabel: ({ collapse }: PanelMenuProps) => ({
        class: [
            "leading-none",

            // Font
            "text-sm",

            // Collapsed
            { "text-xs": collapse },
        ],
    }),
    headerIcon: {
        class: ["mr-2 text-sm"],
    },
    submenuicon: ({ collapse }: PanelMenuProps) => ({
        class: [
            "ml-auto order-last text-sm",

            // Collapsed
            { hidden: collapse },
        ],
    }),
    menucontent: {
        class: [
            // Spacing
            "pl-9 mt-1",

            // Shape
            "rounded-t-none rounded-br-md rounded-bl-md",

            // Color
            "text-surface-700 dark:text-white/80",
            "bg-surface-0 dark:bg-surface-800",
            "border-surface-200 dark:border-surface-700"
        ],
    },
    menu: {
        class: ["outline-none", "m-0 p-0 list-none"],
    },
    content: {
        class: [
            //Font
            "font-normal text-sm",

            // Shape
            "border-none rounded-none",

            // Color
            "text-surface-600/80 dark:text-white/70 hover:text-surface-900 dark:hover:text-white",

            // Transition
            "transition-shadow duration-200",
        ],
    },
    action: ({ context, collapse }: PanelMenuProps) => ({
        class: [
            "relative",

            // Font
            "text-sm leading-none font-normal",

            // Flex & Alignments
            "flex items-center",

            // Spacing
            "py-2 px-3",

            // Color
            "text-surface-700 dark:text-white/80",

            // States
            context.focused
                ? "bg-surface-200 text-surface-700 dark:text-white/80 dark:bg-surface-600/90"
                : "hover:bg-primary-500 hover:text-surface-700 dark:hover:bg-surface-700/80 dark:hover:text-white/80",
            // Misc
            "cursor-pointer no-underline",
            "select-none overflow-hidden",

            // Collapse
            { "pl-4 text-center": collapse },
        ],
    }),
    icon: {
        class: "mr-2",
    },
    submenu: {
        class: "p-0 pl-4 m-0 list-none",
    },
    transition: {
        enterFromClass: "max-h-0",
        enterActiveClass:
            "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
        enterToClass: "max-h-[1000px]",
        leaveFromClass: "max-h-[1000px]",
        leaveActiveClass:
            "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
        leaveToClass: "max-h-0",
    },
};
