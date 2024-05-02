export default {
    root: ({ props }: any) => ({
        class: [
            "first:rounded-t-8 first:rounded-b-8 rounded-0 last:rounded-b-8",

            // Sizes & Spacing
            "text-sm",
            // "rounded-md",
        ],
    }),
    button: {
        class: "rounded-0",
    },
};
