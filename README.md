# Codefloxx — Marketing Website

A modern, responsive marketing website for Codefloxx — a software company focused on web & mobile solutions. Built with React, Vite and TailwindCSS, this repo provides a production-ready front-end template with reusable UI primitives and page sections.

Key files and components

- Entry & routing
  - [`src/main.jsx`](src/main.jsx) — app bootstrap
  - [`src/App.jsx`](src/App.jsx) — React Router setup and layout
  - [`src/pages/home/index.jsx`](src/pages/home/index.jsx) — homepage composition
- Reusable UI & layout
  - [`Navbar`](src/components/Navbar.jsx)
  - [`Footer`](src/components/Footer.jsx)
  - [`SectionHeader`](src/components/SectionHeader.jsx)
  - UI primitives under [`src/components/ui`](src/components/ui)
- Utilities & hooks
  - [`cn`](src/lib/utils.js) — className merge helper
  - [`useMediaQuery`](src/hooks/use-media-query.js)

Technologies

- React (v19)
- Vite
- TailwindCSS
- Radix primitives for accessible UI
- Framer Motion for micro-interactions
- React Router for routing

Features

- Composable, section-driven homepage: hero, features, process, portfolio, testimonials, FAQ, contact.
- Reusable UI primitives (Button, Card, Input, Tabs, etc.) in `src/components/ui`.
- Responsive navigation with mobile drawer & dropdowns (`Navbar`).
- Tailwind + utility helpers (`cn`) for consistent styling.
- Data-driven sections using `src/constants` for projects, testimonials, and FAQ.

Getting started

1. Install dependencies

```sh
npm install
```

2. Development server

```sh
npm run dev
```

Opens locally and watches for changes. The app root is served from [`index.html`](index.html) which mounts [`src/main.jsx`](src/main.jsx).

Build & preview

- Build for production:

```sh
npm run build
```

- Preview the production build:

```sh
npm run preview
```

Scripts (see [package.json](package.json))

- dev — vite development server
- build — production build
- preview — serve built files locally
- lint — run ESLint

Configuration

- Vite config: [vite.config.js](vite.config.js)
- Tailwind config: [tailwind.config.js](tailwind.config.js)
- Path aliases are defined in [jsconfig.json](jsconfig.json) and used across the app (e.g. `@/components`, `@/lib`).

Project structure (important folders)

- src/
  - components/ — global components (Navbar, Footer, SectionHeader)
  - components/ui/ — design primitives (Button, Card, Input, Tabs, etc.)
  - pages/home/ — homepage and its sections (`HeroSection`, `WhyChooseUs`, `Portfolio`, ...)
  - constants/ — static data (projects, testimonials, faq)
  - hooks/ — small custom hooks (e.g. `use-media-query`)
  - lib/ — helpers (`cn`)

Extending the site

- Add new pages under `src/pages/` and wire them into routing in [`src/App.jsx`](src/App.jsx).
- Add or update UI primitives in `src/components/ui` to keep design consistent.
- Update static content/data in `src/constants` to change project/testimonial/FAQ lists.

Design tokens & styles

- Global tokens and theme variables are in `src/index.css`.
- Components rely on Tailwind utility classes and CSS variables (dark mode supported via `.dark`).

Contributing

- Follow consistent commit messages.
- Linting: `npm run lint`
- Keep UI primitives generic & composable; prefer data-driven page sections.

License & contact

- Add your LICENSE file or change this section to reflect your licensing.
- For questions about this repo contact the maintainers or the Codefloxx team.

Notes

- The project uses Radix primitives and shadcn-style components for accessibility.
- If adding TypeScript, update ESLint config and types in
