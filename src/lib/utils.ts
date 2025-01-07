import getReadingTime from "reading-time";

import { toString as MakeString } from "mdast-util-to-string";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export function remarkReadingTime() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (tree: unknown, { data }: any) => {
    const textOnPage = MakeString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
