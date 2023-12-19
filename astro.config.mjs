import { defineConfig } from 'astro/config';
// TODO uncomment to initiate Matomo
// import matomo from "@jop-software/astro-matomo";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // matomo({
    //   baseUrl: "https://matomo.ramoshe.com/",
    //   siteId: 3
    // })
  ],
});