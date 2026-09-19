import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://agentos.homes",
  integrations: [sitemap()],
  compressHTML: true,
});
