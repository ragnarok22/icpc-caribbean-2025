// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://icpc-caribbean-2025.vercel.app",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        picocolors: fileURLToPath(
          new URL("./src/lib/picocolors-shim.js", import.meta.url),
        ),
      },
    },
  },

  integrations: [react(), sitemap()],
  adapter: vercel(),
});
