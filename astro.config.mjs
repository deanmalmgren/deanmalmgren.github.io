import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When a custom domain is set up, change `site` and add public/CNAME.
export default defineConfig({
  site: 'https://deanmalmgren.github.io',
  integrations: [sitemap()],
});
