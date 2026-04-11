# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — dev server
- `pnpm build` — type-check + build (`astro check && astro build`)
- `pnpm preview` — preview production build
- `pnpm format` — prettier
- `pnpm prepare` — panda css codegen (runs on install)

## Architecture

Astro 5 static site (French portfolio/research website). Panda CSS for styling, content collections for markdown content.

### Styling

Panda CSS with custom theme tokens defined in `panda.config.ts`. Generated output lives in `styled-system/` (not committed). Use `css()` from `styled-system/css` for styles, `cx()` for merging classes. Custom fluid text styles (body, heading-1–6, small, caption) and color tokens based on open-color variables. Global styles in `src/style.css`.

### Content Collections

7 collections (articles, publications, expositions, hommages, colloques, memoires, livredor) all sharing the same schema: `{ title: string, date: date }`. Markdown files in `content/`. Config in `src/content.config.ts`.

### Interactive Components

Custom Web Components (`<c-dropdown>`, `<c-hamburger>`, `<c-transition-progress>`) handle client-side interactivity. Focus trap for mobile nav accessibility. Page transitions via Astro's `ClientRouter`.

### Imports

Use `#` path alias for `src/` (e.g., `import Button from '#components/button.astro'`). Type-safe routes via `astro-typesafe-routes`.

### Navigation

Config in `src/features/navigation/config/navigation-config.ts`. Split into desktop and mobile components under `src/features/navigation/components/`.
