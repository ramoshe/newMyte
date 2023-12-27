import { defineConfig } from 'astro/config';
// TODO uncomment to initiate Matomo
// import matomo from "@jop-software/astro-matomo";

import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://new.myte.site',
  integrations: [robotsTxt(), sitemap()]
  // matomo({
  //   baseUrl: "https://matomo.ramoshe.com/",
  //   siteId: 3
  // })
});