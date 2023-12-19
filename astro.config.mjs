import { defineConfig } from 'astro/config';
import matomo from "@jop-software/astro-matomo";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [matomo({
    baseUrl: "https://matomo.ramoshe.com/",
    siteId: 3
  })],
  output: "server",
  adapter: netlify()
});