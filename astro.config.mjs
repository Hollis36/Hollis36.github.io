import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      assetsInlineLimit: 4096,
    },
  },
});
