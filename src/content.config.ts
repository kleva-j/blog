import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const article = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    author: z.string(),
  }),
});

export const collections = { article };
