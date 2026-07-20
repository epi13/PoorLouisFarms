import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://epi13.github.io',
  base: isGitHubPages ? '/PoorLouisFarms' : '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
