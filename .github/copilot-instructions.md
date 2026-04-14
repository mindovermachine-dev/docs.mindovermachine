# Copilot Instructions

## Project Overview

This is the **Lean Crowd Manifest** — a static documentation website for a Commercial Foundation combining a think-tank and consultancy focused on non-profit long-term system thinking.

The site is built with [Astro Starlight](https://starlight.astro.build/) and deployed to GitHub Pages.

## Repository Structure

```txt
.
├── package.json            # Repo-level scripts (dev/build/preview) and tooling
├── astro/                  # Astro app root
│   ├── astro.config.mjs    # Astro + Starlight configuration
│   ├── package.json        # Astro app dependencies
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── public/             # Static assets (favicon, etc.)
│   └── src/
│       ├── env.d.ts
│       ├── assets/         # Images and media used in content
│       └── content/
│           └── docs/       # All documentation pages (Markdown/MDX)
│               ├── index.mdx          # Home / splash page
│               ├── guides/            # How-to guides
│               └── reference/         # Reference documentation
├── .devcontainer/
│   └── devcontainer.json   # VS Code / GitHub Codespaces dev environment
└── .github/
    ├── copilot-instructions.md
    └── workflows/
        ├── copilot-setup-steps.yml   # Copilot coding agent setup
        └── stage.yml                 # Build and deploy to GitHub Pages
```

## Development

Use repo-root scripts for normal development:

| Command                 | Action                                                             |
| :---------------------- | :----------------------------------------------------------------- |
| `npm run install:astro` | Install Astro app dependencies into `astro/node_modules`           |
| `npm run dev`           | Start local dev server (binds host `0.0.0.0`, default port `4321`) |
| `npm run build`         | Build production site to `astro/dist/`                             |
| `npm run preview`       | Preview built site with host binding for devcontainer forwarding   |

Direct Astro CLI usage is also supported from repo root via `npm run astro -- <args>`.

## Content Guidelines

- All documentation pages live under `astro/src/content/docs/`
- Pages use Markdown (`.md`) or MDX (`.mdx`) with YAML frontmatter
- Required frontmatter fields: `title`, `description`
- The home page (`index.mdx`) uses `template: splash` for a hero layout
- Sidebar navigation is configured in `astro/astro.config.mjs`

## Coding Conventions

- TypeScript strict mode is enabled
- Use Astro components (`.astro`) for custom UI elements
- Follow the [Starlight component overrides](https://starlight.astro.build/guides/overriding-components/) pattern when customising the theme
- Keep content in Markdown/MDX; reserve `.astro` files for structural/UI concerns
