import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hollis36.github.io',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      assetsInlineLimit: 4096,
    },
  },
});
