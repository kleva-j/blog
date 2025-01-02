import type { ArticleStyleVariants, ArticleStyle } from "@/types";

export const ArticleVariants: Record<ArticleStyleVariants, ArticleStyle> = {
  compact: {
    containerStyle: "flex gap-x-4 justify-start items-center",
    titleStyle: "font-bold text-base order-2",
    dateStyle: "text-base order-1",
  },
  default: {
    containerStyle:
      "group flex flex-col justify-between gap-1.5 rounded-lg text-muted-foreground transition-all duration-200 hover:scale-[1.005] active:scale-[1] cursor-pointer",
    titleStyle:
      "font-bold text-lg dark:text-purple-200/50 text-purple-950/50 group-hover:text-purple-600 dark:group-hover:text-purple-500 transition-colors duration-200 font-grund capitalize truncate",
    bodyStyle:
      "text-muted-foreground text-sm font-sans line-clamp-2",
  },
  full: {
    containerStyle: "flex flex-col gap-y-4",
    bodyStyle: "text-sm text-muted-foreground line-clamp-2 order-3",
    titleStyle: "font-bold text-lg order-1",
    dateStyle: "text-xs text-purple-950 order-2 dark:text-purple-300",
  },
};

export type Option = { value: ArticleStyleVariants; label: string };

const radioOptions: Option[] = [
  { value: "compact", label: "Compact" },
  { value: "default", label: "Default" },
  { value: "full", label: "Full" },
];

export const defaultOption = radioOptions.find(
  ({ value }) => value === "full",
) as Option;
