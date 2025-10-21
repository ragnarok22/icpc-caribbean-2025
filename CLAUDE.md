# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static website for the Final Caribeña 2025 del ICPC event, hosted by Universidad de Holguín, Cuba. The site features event information, countdown timer, schedule, team listings, and sponsor sections.

## Tech Stack

- **Astro 5** - Static site generator with content collections
- **React 19** - Interactive components (CountDown, TeamListWithFilter, TeamCard, etc.)
- **Tailwind CSS 4** - Styling (configured via Vite plugin, no standalone config file)
- **TypeScript** - Type safety throughout
- **Vercel** - Deployment platform

## Common Commands

### Development

```bash
pnpm install              # Install dependencies
pnpm dev                  # Start dev server (http://localhost:4321)
pnpm build                # Build for production
pnpm preview              # Preview production build
```

### Code Quality

```bash
pnpm check                # Run both format:check and lint
pnpm format               # Format all files with Prettier
pnpm format:check         # Check formatting without writing
pnpm lint                 # Run ESLint
pnpm lint:fix             # Fix ESLint issues automatically
pnpm astro check          # Type-check Astro files
```

### CI/CD

The project uses GitHub Actions for CI (`.github/workflows/ci.yml`) which runs:

1. Prettier format check
2. ESLint
3. Build verification

## Project Architecture

### Directory Structure

```
src/
├── components/          # Astro and React components
│   ├── teams/          # Team-related components (filter, card, list)
│   ├── Header.astro
│   ├── Hero.astro
│   ├── CountDown.tsx   # React component for countdown
│   └── ...
├── layouts/
│   └── Layout.astro    # Base layout with SEO, meta tags, structured data
├── lib/
│   ├── data/           # Static data exports (schedule, sponsors, teams, socials)
│   │   └── index.ts    # Re-exports all data + EVENT_DATE constant
│   └── definitions.ts  # TypeScript type definitions
├── pages/              # File-based routing
│   ├── index.astro     # Homepage
│   └── teams.astro     # Teams listing page
└── styles/
    └── global.css      # Global styles and Tailwind imports
```

### Key Architecture Patterns

1. **Data Management**: All static data is centralized in `src/lib/data/` as TypeScript exports. Types are defined in `src/lib/definitions.ts`. Import via `@/lib/data` barrel export.

2. **Component Strategy**:
   - Use `.astro` components for static content and layout
   - Use `.tsx` React components for interactive features (filtering, countdown, etc.)
   - React components are configured with `jsx: "react-jsx"` in tsconfig.json

3. **Styling**:
   - Tailwind CSS 4 configured via `@tailwindcss/vite` plugin in `astro.config.mjs`
   - No separate tailwind.config file needed
   - Prettier plugin for Tailwind class sorting (`.prettierrc.json`)
   - Custom CSS properties defined in `global.css` (e.g., `--color-blue`)

4. **Path Aliases**:
   - `@/*` maps to `./src/*` (configured in tsconfig.json)
   - Always use path aliases for imports

5. **SEO & Meta Tags**:
   - Handled in `Layout.astro` with OpenGraph, Twitter Cards, and structured data (JSON-LD)
   - Sitemap auto-generated via `@astrojs/sitemap` integration

### Important Type Definitions

Key types in `src/lib/definitions.ts`:

- `Team`: Team information with participants, university, and picture
- `Participant`: Team member with name and type (MEMBER/COACH)
- `University`: Name and logo
- `Sponsor`: Logo, name, and URL
- `Social`: Social media links with platform type

### Configuration Files

- **astro.config.mjs**: Astro config with React, Sitemap, Vercel adapter, and Tailwind Vite plugin
- **eslint.config.js**: Flat config with TypeScript, Astro, React, React Hooks, and jsx-a11y rules
- **.prettierrc.json**: Prettier with Astro and Tailwind plugins
- **tsconfig.json**: Extends Astro strict config, adds `@/*` path alias

## Development Notes

- Event date is defined in `src/lib/data/index.ts` as `EVENT_DATE`
- Default images for teams and universities are provided as constants
- The site is in Spanish (`lang="es"`)
- Package manager is pnpm (specified in package.json)
- React 19 doesn't require `import React` in JSX files
- TypeScript is used for prop validation instead of prop-types
