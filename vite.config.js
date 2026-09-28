import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    minify: "terser",
    terserOptions: { keep_classnames: true, keep_fnames: true },
  },
});
