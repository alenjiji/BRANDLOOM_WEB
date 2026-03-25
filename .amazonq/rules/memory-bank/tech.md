# Tech: BrandLoom Website

## Stack
| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js | 16.2.1 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 |
| PostCSS | @tailwindcss/postcss | ^4 |
| Linting | ESLint + eslint-config-next | ^9 / 16.2.1 |
| Runtime | Node.js | ^20 (types) |

## Fonts (next/font/google)
- **Geist** — Primary sans-serif; CSS var `--font-geist-sans`
- **Geist Mono** — Monospace; CSS var `--font-geist-mono`
- **Playfair Display** — Serif display; CSS var `--font-playfair`; weights 400 & 500, normal + italic styles

## TypeScript Configuration
- Target: `ES2017`
- Module resolution: `bundler`
- Strict mode: enabled
- Path alias: `@/*` → `./*` (project root)
- JSX: `react-jsx`

## Tailwind CSS v4 Setup
- Imported via `@import "tailwindcss"` in `globals.css` (no `tailwind.config.js` file)
- Theme extended via `@theme inline { }` block in `globals.css`
- PostCSS configured in `postcss.config.mjs`

## Development Commands
```bash
npm run dev      # Start dev server (Turbopack) at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Key Configuration Notes
- `next.config.ts` — Minimal config, no custom options currently set
- `tsconfig.json` — `incremental: true` for faster rebuilds; `noEmit: true` (Next.js handles emit)
- ESLint uses flat config format (`eslint.config.mjs`)
- `.next/` build output uses Turbopack (dev cache in `.next/dev/cache/turbopack/`)
