import { getCollection, type CollectionEntry } from "astro:content";

export const getArticles = async (max?: number) => {
  return (await getCollection("article"))
    .filter((article: CollectionEntry<"article">) => !article.data.draft)
    .sort(
      (a: CollectionEntry<"article">, b: CollectionEntry<"article">) =>
        b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    )
    .slice(0, max);
};

export function sortItemsByDateDesc(
  itemA: CollectionEntry<"article">,
  itemB: CollectionEntry<"article">,
) {
  return (
    new Date(itemB.data.pubDate).getTime() -
    new Date(itemA.data.pubDate).getTime()
  );
}
