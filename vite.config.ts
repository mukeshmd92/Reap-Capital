import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  publicDir: "public",
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
