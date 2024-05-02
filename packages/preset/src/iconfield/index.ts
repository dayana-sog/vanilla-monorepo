import type { IconFieldProps } from "primevue/iconfield";

export interface IIconField {
    props: IconFieldProps;
}

export default {
    root: ({ props }: IIconField) => ({
        class: [
            "relative",
            "[&>*:first-child]:absolute",
            "[&>*:first-child]:top-6",
            "[&>*:first-child]:-mt-4",
            "[&>*:first-child]:text-surface-900/60 dark:[&>*:first-child]:text-white/60",
            {
                "[&>*:first-child]:right-3": props.iconPosition === "right",
                "[&>*:first-child]:left-3": props.iconPosition === "left",
            },
            {
                "[&>*:last-child]:pr-10": props.iconPosition === "right",
                "[&>*:last-child]:pl-10": props.iconPosition === "left",
            },
        ],
    }),
};
