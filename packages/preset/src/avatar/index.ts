import type { AvatarPassThroughAttributes, AvatarProps } from "primevue/avatar"

export interface IAvatar{
    props: AvatarProps
    parent: AvatarPassThroughAttributes
}

export default {
    root: ({ props, parent }: IAvatar) => ({
        class: [
            // Font
            {
                "text-sm": props.size == null || props.size == "normal",
                "text-xl": props.size == "large",
                "text-3xl": props.size == "xlarge",
            },

            // Alignments
            "inline-flex items-center justify-center",
            "shrink-0",
            "relative",

            // Sizes
            {
                "h-8 w-8": props.size == null || props.size == "normal",
                "w-10 h-10": props.size == "large",
                "w-14 h-14": props.size == "xlarge",
            },
            { "-ml-4": parent.instance.$style?.name == "avatargroup" },

            // Shapes
            {
                "rounded-lg": props.shape == "square",
                "rounded-full": props.shape == "circle",
            },
            { "border-2": parent.instance.$style?.name == "avatargroup" },

            // Colors
            { "bg-surface-100 dark:bg-surface-700" : !props.image },
            {
                "border-white dark:border-surface-800":
                    parent.instance.$style?.name == "avatargroup",
            },

            "cursor-pointer"

        ],
    }),
    image: {
        class: "h-full w-full",
    },

};
