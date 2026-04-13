import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Lean Crowd Manifest',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/lakruzz/lean-crowd-manifest',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Example Reference', slug: 'reference/example' },
          ],
        },
      ],
    }),
  ],
});
