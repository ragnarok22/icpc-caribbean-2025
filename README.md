# ICPC Caribbean 2025

[![CI](https://github.com/ragnarok22/icpc-caribbean-2025/actions/workflows/ci.yml/badge.svg)](https://github.com/ragnarok22/icpc-caribbean-2025/actions/workflows/ci.yml)

Website for the ICPC Caribbean Finals 2025 event.

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[React](https://react.dev)** - Interactive components
- **[Tailwind CSS](https://tailwindcss.com)** - Styling

## 📁 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.astro
│   │   ├── CountDown.tsx
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Sponsors.astro
│   │   ├── Teams.astro
│   │   └── Timeline.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
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
| `pnpm prettier`        | Format code with Prettier                        |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Features

- Event information and details
- Countdown timer to the event
- Schedule timeline
- Team information
- Sponsor section
- Responsive design

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) to learn how to get started.

## 🔒 Security

For information about reporting security vulnerabilities, please see our [Security Policy](SECURITY.md).

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

Copyright (C) 2025 ICPC Caribbean

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
