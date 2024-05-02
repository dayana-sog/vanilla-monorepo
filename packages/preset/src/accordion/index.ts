import type { AccordionTabProps } from "primevue/accordiontab"

export interface IAccordionTab{
    props: AccordionTabProps
}

export default {
    root:{
        class:[
            '[&>div:first-child>div]:border-t-0'
        ]
    },
    accordiontab: {
        header: ({ props }: IAccordionTab) => ({
            class: [
                // Shape
                "border-x-0 border-b-0",

                // Color
                "border border-surface-200 dark:border-surface-700",

                // State
                {
                    "select-none pointer-events-none cursor-default opacity-60":
                        props?.disabled,
                },
            ],
        }),
        headerAction: {
            class: [
                //Font
                "font-semibold",

                // Alignments
                "flex items-center justify-between flex-row-reverse",
                "relative",

                //Sizing
                "p-4",

                // Shape
                "rounded-md",

                // Color
                "bg-transparent",
                "text-surface-500 dark:text-surface-200/90",

                // States
                "hover:text-surface-900 dark:hover:text-surface-0",
                "focus:outline-none focus:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-600 ring-inset dark:focus-visible:ring-primary-500", // Focus

                // Misc
                "cursor-pointer no-underline select-none",
            ],
        },
        headerIcon: {
            class: "inline-block ml-2",
        },
        headerTitle: {
        },
        content: {
            class: [
                // Spacing
                "px-4 pb-4",

                // Color
                "text-surface-600 dark:text-surface-0/70",
            ],
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
    },
};
