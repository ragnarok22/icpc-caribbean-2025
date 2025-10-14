# Contributing to ICPC Caribbean 2025

Thank you for your interest in contributing to the ICPC Caribbean 2025 website! We welcome contributions from the community.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please create an issue with the following information:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots if applicable
- Your environment (browser, OS, Node.js version)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please create an issue with:

- A clear and descriptive title
- Detailed description of the proposed feature
- Why this enhancement would be useful
- Examples of how it would work

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Follow the coding standards (see below)
5. Test your changes thoroughly
6. Commit your changes with clear, descriptive messages
7. Push to your fork
8. Open a Pull Request

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/) package manager

### Installation

```sh
# Clone your fork
git clone https://github.com/YOUR-USERNAME/icpc-caribbean-2025.git
cd icpc-caribbean-2025

# Install dependencies
pnpm install
```

### Development Workflow

```sh
# Start the development server
pnpm dev

# Run linting
pnpm lint

# Run formatting check
pnpm format:check

# Format code
pnpm format

# Run all checks
pnpm check

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Coding Standards

### Code Style

- This project uses [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) is used for linting
- Run `pnpm format` before committing to ensure consistent formatting
- Run `pnpm lint` to check for linting errors

### TypeScript

- Use TypeScript for type safety where applicable
- Avoid using `any` types
- Document complex types with comments

### Components

- Use meaningful component names that describe their purpose
- Keep components focused on a single responsibility
- Add comments for complex logic
- Use Astro components for static content
- Use React components only when interactivity is needed

### Commits

- Write clear, descriptive commit messages
- Use present tense ("Add feature" not "Added feature")
- Reference issues when applicable (e.g., "Fix #123")
- Keep commits atomic and focused

#### Commit Message Format

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:

```
feat: add team registration form

Implement a new registration form component that allows
teams to register for the event.

Closes #42
```

## Testing

Before submitting a pull request:

1. Ensure the development server runs without errors
2. Test your changes in multiple browsers if possible
3. Verify the production build works: `pnpm build && pnpm preview`
4. Run all checks: `pnpm check`

## Project Structure

```text
/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and media
│   ├── components/  # Astro and React components
│   ├── layouts/     # Page layouts
│   └── pages/       # Route pages
└── package.json
```

## Questions?

If you have questions about contributing, feel free to:

- Open an issue for discussion
- Check existing issues and pull requests
- Review the project documentation

## License

By contributing to this project, you agree that your contributions will be licensed under the GNU General Public License v3.0.

Thank you for contributing!
