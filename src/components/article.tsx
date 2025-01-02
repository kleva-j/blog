import type { ArticleType, ArticleStyleVariants } from "@/types";

import { Text } from "@/components/ui/typography";
import { ArticleVariants } from "@/consts";
import { cn } from "@/lib/utils";

type ArticleProps = {
  article: ArticleType;
  style: ArticleStyleVariants;
};

const formatOptions: Record<ArticleStyleVariants, Intl.DateTimeFormatOptions> =
  {
    compact: { month: "short", day: "numeric" },
    default: { month: "short", day: "numeric", year: "numeric" },
    full: { month: "short", day: "numeric", year: "numeric", weekday: "long" },
  };

export const Article = ({ article, style }: ArticleProps) => {
  const variant = ArticleVariants[style];

  const { title, body } = article;

  return (
    <div
      className={cn(
        "group w-full rounded-lg border border-neutral-300 dark:border-neutral-700 p-4 transition-all duration-200 hover:scale-[1.005] hover:border-purple-300/40 hover:bg-purple-600/5 active:scale-[1] cursor-pointer dark:bg-primary/[0.03] dark:hover:bg-primary/10",
        variant.containerStyle,
      )}
    >
      <Text
        className={cn(
          "font-bold text-lg dark:text-purple-200/50 text-purple-950/50 group-hover:text-purple-600 dark:group-hover:text-purple-500 transition-colors duration-200 font-grund capitalize truncate",
          variant.titleStyle,
        )}
      >
        {title}
      </Text>
      {variant.bodyStyle && (
        <Text
          variant="span"
          className={cn(
            "text-muted-foreground text-sm font-sans line-clamp-2",
            variant.bodyStyle,
          )}
        >
          {body.charAt(0).toUpperCase() + body.slice(1)}
        </Text>
      )}
      {variant.dateStyle && (
        <Text
          variant="span"
          className={cn(
            "text-muted-foreground text-xs font-sans",
            variant.dateStyle,
          )}
        >
          {new Date().toLocaleDateString("en-US", formatOptions[style])}
        </Text>
      )}
    </div>
  );
};
