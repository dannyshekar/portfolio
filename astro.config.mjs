// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Netlify sets URL to the site's public address at build time.
  site: process.env.URL ?? 'http://localhost:4321',
  integrations: [sitemap()],
  vite: {
    // Emit every asset (incl. tiny font subsets) as a real file instead of a data: URL,
    // so the CSP can stay strict (font-src 'self').
    build: { assetsInlineLimit: 0 },
  },
  markdown: {
    // Prism uses CSS classes; Shiki's inline styles would be blocked by the CSP below.
    syntaxHighlight: 'prism',
  },
  // Content Security Policy: Astro hashes this site's own scripts and styles and
  // adds a <meta> CSP tag to every page. Everything else is self-hosted.
  // (frame-ancestors and other header-only rules live in netlify.toml.)
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
    },
  },
});
