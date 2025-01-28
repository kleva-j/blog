// @ts-check
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
      shikiConfig: { theme: "synthwave-84" },
      remarkRehype: { footnoteLabel: "Footnotes" },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkToc, remarkGemoji],
    remarkRehype: { footnoteLabel: "Footnotes" },
  },
});
