import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hollis36.github.io',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      assetsInlineLimit: 4096,
    },
  },
});
