// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Change this to your real domain once the site is live.
  site: 'https://example.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
