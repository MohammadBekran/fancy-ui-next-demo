# Fancy UI Next.js Demo

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
![License: Private](https://img.shields.io/badge/License-Private-lightgrey.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A modern, performant, and accessible Next.js application showcasing the `@mohammadbekran/fancy-ui` component library, built with TypeScript and styled with Tailwind CSS.

</div>

## Overview

Fancy UI Next.js Demo is a production-ready web application designed to highlight the capabilities of the `@mohammadbekran/fancy-ui` component library. Built with Next.js 15.3.3, React 19, and TypeScript, it adopts a feature-based structure for scalability and maintainability. Styled with Tailwind CSS and managed with PNPM, this project delivers a responsive, accessible, and optimized landing page, deployed on Vercel for real-world demonstration.

### Key Features

- 🎨 **Seamless UI Integration**: Leverages `@mohammadbekran/fancy-ui` for modern, consistent components
- ♿ **Accessibility Focused**: WCAG 2.1 compliant with keyboard and screen reader support
- 🚀 **Performance Optimized**: Next.js App Router, Turbopack, and efficient builds
- 🛠️ **Developer Friendly**: TypeScript, ESLint, and feature-based structure for clarity
- 🌐 **Live Deployment**: Hosted on Vercel for instant preview

## Live Demo

Explore the deployed application: [Fancy UI Next.js Demo on Vercel](https://fancy-ui-next-demo.vercel.app)

## Getting Started

### Installation

Install dependencies using PNPM:

```bash
pnpm install
```

### Configuration

#### Tailwind CSS Setup

1. Tailwind CSS is integrated via `@tailwindcss/postcss`.
2. Add to `styles/globals.css` or `app/globals.css`:

```css
@import "tailwindcss";
@source "../../node_modules/@mohammadbekran/fancy-ui/**/*.{js,ts,jsx,tsx}";
@import "../../node_modules/@mohammadbekran/fancy-ui/dist/fancy-ui.css";
```

### Usage

Import and use components from the feature-based structure:

```tsx
import Home from "@/features/landing/components";

const HomePage = () => {
  return <Home />;
};

export default HomePage;
```

### Deployment

- Deployed on Vercel: [https://fancy-ui-next-demo.vercel.app](https://fancy-ui-next-demo.vercel.app)
- To deploy your own:
  ```bash
  pnpm run build
  vercel deploy
  ```

## Development

### Prerequisites

- Node.js 18+
- PNPM 8+
- Git
- A modern browser

### Setup

```bash
# Clone the repository
git clone https://github.com/MohammadBekran/fancy-ui-next-demo.git
cd fancy-ui-next-demo

# Install dependencies
pnpm install

# Start development server with Turbopack
pnpm run dev
```

### Available Scripts

| Script           | Description                     |
| ---------------- | ------------------------------- |
| `pnpm run dev`   | Start dev server with Turbopack |
| `pnpm run build` | Build for production            |
| `pnpm run start` | Run production build locally    |
| `pnpm run lint`  | Run ESLint for code quality     |

## Project Structure

```
fancy-ui-next-demo/
├── src/
│   ├── app/                    # Next.js App Router for pages and layouts
│   ├── features/              # Feature-based structure
│   │   ├── landing/           # Landing feature
│   │   │   ├── components/    # Landing-specific components
│   │   │   │   └── index.tsx  # Landing page content
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## Dependencies

- **Core**:
  - next: 15.3.3
  - react: ^19.0.0
  - react-dom: ^19.0.0
- **Custom**:
  - @mohammadbekran/fancy-ui: ^0.18.0
- **Dev Dependencies**:
  - @eslint/eslintrc: ^3
  - @tailwindcss/postcss: ^4
  - @types/node: ^20
  - @types/react: ^19
  - @types/react-dom: ^19
  - eslint: ^9
  - eslint-config-next: 15.3.3
  - tailwindcss: ^4.1.8
  - typescript: ^5

## TypeScript Support

- Fully typed components via `@mohammadbekran/fancy-ui`.
- Robust type safety and IDE support for development.

## Performance

- Tree-shakeable components for minimal bundle size.
- Next.js optimizations with Turbopack and App Router.
- Tailwind CSS purged for efficient styling.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

- **Install Issues**: Check Node.js/PNPM versions and `@mohammadbekran/fancy-ui` registry.
- **Port Conflict**: Next.js auto-resolves if `3000` is taken.
- **Build Errors**: Verify TypeScript types and dependencies.
- See Next.js (https://nextjs.org/docs) or Tailwind (https://tailwindcss.com) docs.

## Contributing

1. Fork the repo.
2. Create a branch: `git checkout -b feature/new-feature`
3. Commit: `git commit -m 'feat: add new feature'`
4. Push: `git push origin feature/new-feature`
5. Open a Pull Request

---

Built with ❤️ by [Mohammad Bekran](https://github.com/MohammadBekran)
