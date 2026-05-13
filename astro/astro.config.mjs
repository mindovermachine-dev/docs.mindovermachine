import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeExternalLinks from "rehype-external-links";
import { collectFrontmatterRedirects } from "./src/config/frontmatter-redirects.mjs";

const frontmatterRedirects = collectFrontmatterRedirects({
  docsRoot: new URL("./src/content/docs", import.meta.url),
  localePrefixes: ["da", "en"],
  onConflict: ({ source, existing, incoming, filePath }) => {
    console.warn(
      `[redirect-from] Skipping conflicting source '${source}' from '${filePath}'. Already mapped to '${existing}' and ignored '${incoming}'.`,
    );
  },
});

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          protocols: ["https"],
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
  vite: {
    server: {
      host: true,
      allowedHosts: true,
    },
  },
  integrations: [
    starlight({
      title: "Regenerative Software Foundation",
      favicon: "/mom-favicon.ico",
      logo: {
        src: "./src/assets/mom-logo-text-transparent.png",
      },
      customCss: ["./src/styles/custom.scss"],
      defaultLocale: "da",
      locales: {
        da: {
          label: "Dansk",
          lang: "da",
        },
        en: {
          label: "English",
          lang: "en",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/mindovermachine-dev",
        },
      ],
      sidebar: [
        {
          label: "Vision & Mission",
          translations: { da: "Vision & Mission" },
          items: [
            {
              label: "The Manifesto",
              translations: { da: "Manifestet" },
              slug: "vision/manifesto",
            },
            {
              label: "The C.R.O.W.D. Values",
              translations: { da: "C.R.O.W.D. Værdierne" },
              slug: "vision/crowd-values",
            },
          ],
        },
        {
          label: "About Us",
          translations: { da: "Om Os" },
          items: [
            {
              label: "Contact",
              translations: { da: "Kontakt" },
              slug: "about/contact",
            },
            {
              label: "Founder's Story",
              translations: { da: "Founder's Story" },
              slug: "about/founder-story",
            },
          ],
        },
        {
          label: "Organization",
          translations: { da: "Organisation" },
          items: [
            {
              label: "The Three Pillars",
              translations: { da: "De tre Søjler" },
              slug: "governance/three-pillars",
            },
            {
              label: "The Regenerative Charter",
              translations: { da: "Det regenerative Charter" },
              slug: "governance/charter",
            },
            {
              label: "Statutes",
              translations: { da: "Vedtægter" },
              slug: "governance/statutes",
            },
            {
              label: "Rules of Procedure",
              translations: { da: "Forretningsorden" },
              slug: "governance/rules-of-procedure",
            },
            {
              label: "Annual Cycle",
              translations: { da: "Årshjul" },
              slug: "governance/annual-cycle",
            },
            {
              label: "Representative Council",
              translations: { da: "Repræsentantskab" },
              slug: "governance/representative-council",
            },
            {
              label: "Instructions",
              translations: { da: "Instrukser" },
              slug: "governance/instructions",
            },
            {
              label: "Ethical Assessment",
              translations: { da: "Årlig etisk gennemgang" },
              slug: "governance/ethical-assessment",
            },
          ],
        },
        {
          label: "Methodology",
          translations: { da: "Metoder" },
          items: [
            {
              label: "Collaboration",
              translations: { da: "Samarbejde" },
              slug: "methodology/collaboration",
            },
            {
              label: "How We Work",
              translations: { da: "Sådan arbejder vi" },
              slug: "methodology/how-we-work",
            },
            //            {
            //              label: "The Toyota Way",
            //              translations: { da: "Toyota-vejen" },
            //              slug: "methodology/toyota-way",
            //            },
            //            {
            //              label: "Participatory Design",
            //              translations: { da: "Deltagende Design" },
            //              slug: "methodology/participatory-design",
            //            },
            //            {
            //              label: "Developer Experience (DevX)",
            //              translations: { da: "Udvikler Erfaring (DevX)" },
            //              slug: "methodology/devx",
            //            },
          ],
        },
      ],
    }),
  ],
  redirects: {
    "/": "/da/",
    ...frontmatterRedirects,
  },
});
