# ICPC Caribbean 2025

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

## 📄 License

MIT
