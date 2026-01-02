import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hoya4humanity.github.io',
  base: '/EarthSmart-Solar/',
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
});
