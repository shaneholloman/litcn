import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import packageJson from "../package.json";

export default defineConfig({
   plugins: [tailwindcss(), react()],
   define: {
      __LITCN_VERSION__: JSON.stringify(packageJson.version),
   },
   resolve: {
      alias: {
         lucide: resolve(__dirname, "node_modules/lucide/dist/esm/lucide/src/lucide.js"),
      },
      dedupe: ["lit", "@lit/reactive-element", "lit-element", "lit-html"],
   },
});
