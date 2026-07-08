# Talent Collective

Talent Collective is a Next.js app for AI evaluation platform guides, community pages, and resource content.

## Tech Stack

- Next.js 16.2.9 with the App Router and Turbopack
- React 19
- Tailwind CSS 4
- Markdown platform guides loaded from `platform-content/`
- Framer Motion and Lucide React for UI motion and icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
```

Start the production build:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Project Structure

- `src/app/` - App Router pages and route files.
- `src/components/` - Shared UI components.
- `src/data/` - Static UI copy, resources, and translations.
- `src/lib/platforms.ts` - Platform guide loader and Markdown parsing.
- `platform-content/` - Source content for platform guide pages.
- `public/` - Static assets.

Each platform folder in `platform-content/` contains:

- `guide.md` - Markdown guide body and frontmatter.
- `metadata.yaml` - SEO metadata, slug, pay range, difficulty, and listing fields.
- `schema.json` - JSON-LD schema data.
- `internal-links.md` - Related platform, career, comparison, and resource links.

## Next.js 16 Note

This repo uses Next.js 16.2.9. Before changing Next APIs, routing behavior, or config, read the relevant local docs in:

```text
node_modules/next/dist/docs/
```

The app also sets `turbopack.root` in `next.config.ts`. This is intentional for this Windows workspace because there is a parent lockfile above the repo. Changing it can break either platform guide routing or dev-server module resolution.

If `next dev` reports React Client Manifest errors or missing generated `@swc/helpers-*` modules, stop the dev server and remove only the generated dev cache:

```powershell
Remove-Item -LiteralPath .next\dev -Recurse -Force
npm run dev
```

Do not delete source files or `node_modules` for that issue unless the dependency install is actually corrupted.
