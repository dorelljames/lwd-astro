// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Noto Sans",
        cssVariable: "--font-noto-sans",
        weights: ["400", "500", "600", "700"],
      },
      // {
      //   provider: fontProviders.fontshare(),
      //   name: "Chubbo",
      //   cssVariable: "--font-chubbo",
      //   weights: ["400", "500", "600", "700"],
      // },
      // {
      //   provider: fontProviders.fontshare(),
      //   name: "Supreme",
      //   cssVariable: "--font-supreme",
      //   weights: ["400", "500", "600", "700"],
      // },
    ],
  },
});
