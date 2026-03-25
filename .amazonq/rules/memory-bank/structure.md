# Structure: BrandLoom Website

## Directory Layout
```
web/
├── app/                    # Next.js App Router root
│   ├── layout.tsx          # Root layout — font loading, metadata, html/body shell
│   ├── page.tsx            # Home page — composes section components
│   ├── globals.css         # Global styles, CSS custom properties, typography utilities
│   └── favicon.ico
├── components/             # Shared UI components (Server Components by default)
│   ├── HeroSection.tsx     # Full-viewport hero with brand assets and headline
│   └── AboutSection.tsx    # Studio about/narrative section
├── public/
│   └── hero/               # Brand SVG assets (logo.svg, loom.svg, pc.svg)
├── workspace/
│   └── prompt.md           # Internal AI/agent workspace notes
├── .amazonq/rules/memory-bank/  # Amazon Q memory bank documentation
├── DESIGN.md               # Design system specification ("The Editorial Monolith")
├── AGENTS.md               # Agent/AI collaboration guidelines
├── CLAUDE.md               # Claude-specific AI guidelines
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS config (Tailwind v4)
└── eslint.config.mjs       # ESLint flat config
```

## Core Components & Relationships
- `app/layout.tsx` — Loads Geist Sans, Geist Mono, and Playfair Display via `next/font/google`; injects CSS variables; wraps all pages
- `app/page.tsx` — Home page; imports and composes `HeroSection` and `AboutSection`
- `components/HeroSection.tsx` — Primary visual component; uses `hero-title`/`hero-italic` typography classes and SVG assets from `public/hero/`
- `components/AboutSection.tsx` — Secondary content section; uses `section-title` typography class
- `app/globals.css` — Single source of truth for design tokens (CSS custom properties) and typography utility classes

## Architectural Patterns
- **Next.js App Router** — File-based routing under `app/`; all components are React Server Components unless marked `"use client"`
- **No client components yet** — Current codebase is fully server-rendered
- **Path alias** — `@/*` maps to project root (e.g., `@/components/HeroSection`)
- **Tailwind CSS v4** — Utility-first styling via `@import "tailwindcss"` in globals.css; configured through `@theme inline` block
- **CSS custom properties as design tokens** — Colors and fonts defined as `--variable` tokens, consumed by both Tailwind theme and raw CSS classes
- **Component-per-section pattern** — Each page section is its own file in `components/`
