// @ts-check
import {
  transformerNotationHighlight,
  transformerNotationFocus,
  transformerMetaHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import { defineConfig } from "astro/config";

import rehypePresetMinify from "rehype-preset-minify";
import pageInsight from "astro-page-insight";
import remarkGemoji from "remark-gemoji";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import mdx from "@astrojs/mdx";

import { remarkReadingTime } from "./src/lib/utils";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    pageInsight(),
    mdx({
      syntaxHighlight: "shiki",
      rehypePlugins: [rehypePresetMinify],
      remarkRehype: { footnoteLabel: "Footnotes" },
      shikiConfig: {
        theme: "synthwave-84",
        transformers: [
          transformerNotationDiff({ matchAlgorithm: "v3" }),
          transformerNotationFocus({ matchAlgorithm: "v3" }),
          transformerNotationHighlight({ matchAlgorithm: "v3" }),
          transformerMetaHighlight(),
        ],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkToc, remarkGemoji],
    remarkRehype: { footnoteLabel: "Footnotes" },
  },
});
