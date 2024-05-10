import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), svgr({})],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      external: [/^node:\w+/],
    },
  },
});
