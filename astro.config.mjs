import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://exanmoncher.com',
  build: {
    inlineStylesheets: 'never',
  },
});