## Repo quickstart for AI coding agents

This repository is a Vite + React + TypeScript portfolio scaffold (shadcn-ui + Tailwind). Use these notes to be immediately productive when making edits, creating components, or debugging builds.

- Project entry: `src/main.tsx` → `src/App.tsx` (React Router routes). Pages live in `src/pages/*` and are mounted in `App.tsx`.
- Component conventions: reusable UI primitives live under `src/components/ui/*` (shadcn wrappers). App-specific components are in `src/components/*`.
- Import alias: `@` is mapped to `./src` (see `vite.config.ts`). Use imports like `@/components/Navbar`.

- Build & dev commands (from `package.json`):
  - Install: `npm i`
  - Dev server: `npm run dev` (Vite server binds to host `::` on port `8080` per `vite.config.ts`)
  - Build: `npm run build`
  - Build (development mode): `npm run build:dev`
  - Preview: `npm run preview`
  - Lint: `npm run lint`

- Key runtime patterns:
  - React Query is used site-wide (`@tanstack/react-query`). The `QueryClientProvider` is set in `App.tsx`.
  - Routing: React Router v6; add a new page file in `src/pages` and a `<Route path="/my" element={<MyPage/>} />` in `App.tsx`.
  - UI: many components are thin wrappers around Radix/shadcn primitives located in `src/components/ui` — prefer editing those for consistent styling.
  - Notifications: `Toaster` and `Sonner` are mounted in `App.tsx` under `src/components/ui`.

- Tooling and integrations to be aware of:
  - `lovable-tagger` plugin is enabled in development (see `vite.config.ts`). It may add dev-only metadata to components.
  - `@emailjs/browser` is in dependencies (used for contact/email flows).
  - `tailwind.config.ts` lists content globs; update them if you add non-standard source locations.
  - Static/public assets: `public/` (includes `lovable-uploads/`).

- Conventions discovered in code:
  - Files use TypeScript + .tsx extensions and PascalCase component names.
  - Route names map to page filenames (e.g., `/projects` → `src/pages/References.tsx`).
  - Absolute alias imports use `@/` (e.g., `@/components/ui/toaster`).

- Debugging & developer hints:
  - Dev server port: 8080 — useful to know when checking dev previews or container ports.
  - If a component import fails, check `vite.config.ts` alias and `tsconfig.*` paths (project uses `@` alias).
  - No test runner detected; use linting (`npm run lint`) for static checks.

If you want me to merge a different README or preserve parts of an existing `.github/copilot-instructions.md`, point me to the file and I will merge relevant sections. Anything unclear or missing that you'd like added? Mention specific areas (routing, CI, deployment, theme, third-party integrations) and I'll expand.
