// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.learnwithdorell.com",
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
        weights: ["400", "500", "600", "700"],
      },
      {
        provider: fontProviders.google(),
        name: "Roboto Serif",
        cssVariable: "--font-roboto-serif",
        weights: ["400", "500", "600", "700"],
      },
    ],
  },
});
