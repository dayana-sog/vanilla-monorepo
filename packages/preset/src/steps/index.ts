import type { StepsContext, StepsProps } from "primevue/steps"

export interface ISteps{
    props: StepsProps
    context: StepsContext
    state: any
}

export default {
    root: {
        class: "relative",
    },
    menu: {
        class: "p-0 m-0 list-none flex justify-center",
    },
    menuitem: {
        class: [
            // Flexbox and Position
            "relative",
            "flex",
            "justify-center",
        ],
    },
    action: ({ props, context, state }: ISteps) => ({
        class: [
            // Flexbox
            "flex items-center relative",
            "flex-col",

            // Transitions and Shape
            "transition-shadow",
            "rounded-md",

            // Spacing
            {
                "pr-4 min-[576px]:pr-32 md:pr-40":
                    props.model && props.model.length !== context.index + 1,
            },

            // Colors
            "bg-surface-0",
            "dark:bg-transparent",

            // Misc
            { "cursor-pointer": !props.readonly },

            // After
            "after:border-t-2",
            {
                "after:border-surface-100 after:dark:border-surface-700":
                    state.d_activeStep <= context.index,
            },
            {
                "after:border-primary-500 after:dark:border-primary-400":
                    state.d_activeStep > context.index,
            },
            "after:w-[80%]",
            "after:absolute",
            "after:top-1/2",
            "after:left-[72px]",
            "after:transform",
            "after:-mt-3",
            { "after:hidden": props.model && props.model.length == context.index + 1 },
        ],
    }),
    step: ({ context, props, state }: ISteps) => ({
        class: [
            // Flexbox
            "flex items-center justify-center",

            // Position
            "z-40",

            // Shape
            "rounded-full",
            "border-2",

            // Size
            "w-[2rem]",
            "h-[2rem]",
            "text-base",
            "leading-[2rem]",

            // Colors
            {
                "text-surface-400 dark:text-white/60":
                    !context.active && state.d_activeStep < context.index,
                "border-surface-100 dark:border-surface-700":
                    !context.active && state.d_activeStep < context.index,
                "bg-surface-0 dark:bg-surface-800 dark:border-surface-700":
                    state.d_activeStep <= context.index,
            },
            {
                "text-primary-500 dark:text-primary-300 dark:bg-black": context.active,
            },
            {
                "bg-primary-500 dark:bg-primary-400":
                    state.d_activeStep > context.index,
                "text-surface-0 dark:text-surface-900":
                    state.d_activeStep > context.index,
                "border-primary-500 dark:border-primary-400":
                    state.d_activeStep > context.index,
            },

            // States
            {
                "hover:border-surface-300 dark:hover:border-surface-500":
                    !context.active && !props.readonly,
            },

            // Transition
            "transition-colors duration-200 ease-in-out",
        ],
    }),
    label: ({ context }: ISteps) => ({
        class: [
            "relative",
            // Font
            "text-sm leading-none",
            { "font-bold": context.active },

            // Display
            "block",

            // Spacing
            "mt-2",

            // Colors
            {
                "text-surface-400 dark:text-white/60": !context.active,
                "text-primary-500 dark:text-primary-300": context.active,
            },

            // Text and Overflow
            "whitespace-nowrap",
            "overflow-ellipsis",
            "max-w-full",
        ],
    })
};
