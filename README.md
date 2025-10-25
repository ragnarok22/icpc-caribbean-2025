# The 2025 ICPC Caribbean Final - Cuban Site

[![CI](https://github.com/ragnarok22/icpc-caribbean-2025/actions/workflows/ci.yml/badge.svg)](https://github.com/ragnarok22/icpc-caribbean-2025/actions/workflows/ci.yml)

Official website the 2025 ICPC Caribbean Finals (Cuban Site), hosted by Universidad de Holguín, Cuba. The ICPC is a prestigious regional programming competition that brings together the best teams from the Caribbean region to compete in algorithmic problem-solving.

## 🛠️ Tech Stack

- **[Astro 5](https://astro.build)** - Modern static site generator with excellent performance
- **[React 19](https://react.dev)** - Interactive UI components (CountDown, TeamFilter, etc.)
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework via Vite plugin
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development experience
- **[Vercel](https://vercel.com/)** - Deployment and hosting platform

## 📁 Project Structure

```text
/
├── public/              # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Astro and React components
│   │   ├── teams/     # Team-related components (filter, card, list)
│   │   ├── About.astro
│   │   ├── CountDown.tsx
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Sponsors.astro
│   │   └── Timeline.astro
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with SEO and meta tags
│   ├── lib/
│   │   ├── data/           # Static data exports (teams, sponsors, schedule)
│   │   └── definitions.ts  # TypeScript type definitions
│   ├── pages/              # File-based routing
│   │   ├── index.astro    # Homepage
│   │   └── teams.astro    # Teams listing page
│   └── styles/
│       └── global.css     # Global styles and Tailwind imports
├── astro.config.mjs       # Astro configuration
├── eslint.config.js       # ESLint flat config
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/) package manager

### Installation

```sh
pnpm install
```

### Development

```sh
pnpm dev
```

The site will be available at `http://localhost:4321`

### Build

```sh
pnpm build
```

The production build will be output to `./dist/`

### Preview

```sh
pnpm preview
```

Preview the production build locally before deploying.

## 📝 Available Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm format`          | Format code with Prettier                        |
| `pnpm format:check`    | Check code formatting without writing            |
| `pnpm lint`            | Run ESLint to check for issues                   |
| `pnpm lint:fix`        | Fix ESLint issues automatically                  |
| `pnpm check`           | Run format:check and lint together               |
| `pnpm astro check`     | Type-check Astro files                           |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Features

- **Event Information** - Comprehensive details about the ICPC Caribbean Finals 2025
- **Live Countdown** - Real-time countdown timer to the competition start
- **Interactive Timeline** - Event schedule with detailed agenda
- **Team Directory** - Searchable and filterable team listings with university information
- **Sponsors Showcase** - Display of event sponsors and partners
- **Responsive Design** - Optimized for all devices and screen sizes
- **SEO Optimized** - OpenGraph, Twitter Cards, structured data, and sitemap generation
- **Performance Focused** - Built with Astro for optimal loading speeds

## 🏗️ Development

### Code Quality

This project uses automated code quality tools:

- **Prettier** for consistent code formatting
- **ESLint** with TypeScript, React, and Astro plugins
- **TypeScript** for type safety
- **GitHub Actions CI** for automated checks on PRs

Run `pnpm check` before committing to ensure your code meets all quality standards.

### Project Configuration

- **Path Aliases**: Use `@/*` to import from `src/` (e.g., `import Layout from '@/layouts/Layout.astro'`)
- **Prettier Plugins**: Includes Astro and Tailwind CSS plugins for optimal formatting
- **ESLint Config**: Flat config format with React 19, Astro, and accessibility rules

## 🎨 Credits

Icons used in this project are from [SVG Repo](https://www.svgrepo.com).

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) to learn how to get started.

## 🔒 Security

For information about reporting security vulnerabilities, please see our [Security Policy](SECURITY.md).

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

Copyright (C) 2025 ICPC Caribbean

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
