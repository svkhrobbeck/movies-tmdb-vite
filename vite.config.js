import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "movie.html": resolve(__dirname, "movie.html"),
        "search.html": resolve(__dirname, "search.html"),
        "popular.html": resolve(__dirname, "popular.html"),
        "top-rated.html": resolve(__dirname, "top-rated.html"),
      },
    },
  },
});
