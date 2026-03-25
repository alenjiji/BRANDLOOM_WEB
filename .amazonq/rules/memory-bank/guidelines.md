# Guidelines: BrandLoom Development Standards

## Code Quality Standards

### Component Structure
- All components are **React Server Components** by default — never add `"use client"` unless interactivity is required
- One component per file; filename matches the exported function name (PascalCase)
- Default exports only — no named component exports
- No props interfaces yet; add typed props only when a component accepts external data

### Import Order Convention
```tsx
import Image from "next/image";          // 1. Next.js built-ins
import SomeComponent from "@/components/..."; // 2. Internal components via @/ alias
import "./globals.css";                  // 3. Styles last
```

### Path Aliases
Always use `@/` alias for internal imports — never use relative `../` paths:
```tsx
// ✅ correct
import HeroSection from "@/components/HeroSection";
// ❌ avoid
import HeroSection from "../components/HeroSection";
```

---

## Styling Patterns

### Tailwind v4 Usage
- Tailwind utilities are the primary styling mechanism — no CSS Modules, no styled-components
- Arbitrary values are acceptable and common: `bg-[#f5f5f5]`, `text-[clamp(3rem,8vw,8rem)]`, `tracking-[0.2em]`
- Responsive prefix pattern: `px-12 md:px-16`, `py-16 md:py-20`

### Typography — Use CSS Utility Classes for Display Text
Prefer the global CSS utility classes over raw Tailwind for display typography:
```tsx
// ✅ preferred for section headings
<h2 className="section-title text-white">...</h2>

// ✅ preferred for hero headlines
<h1 className="hero-title">...</h1>
<span className="hero-italic">experiences</span>

// ✅ preferred for nav/metadata labels
<span className="small-label text-[#171717]/50">socials</span>
```

However, the current codebase uses inline Tailwind equivalents directly — both approaches are valid. When adding new typography, prefer the utility classes for consistency.

### Inline Typography Pattern (current codebase style)
```tsx
// Hero display text
className="font-serif text-[clamp(3rem,8vw,8rem)] font-light tracking-tight text-[#171717]"

// Hero italic accent
className="font-serif italic text-[clamp(3.5rem,9vw,9.5rem)] font-light tracking-tight text-[#171717]"

// Section heading
className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.15] tracking-tight text-white"

// Small label / metadata
className="text-[11px] tracking-[0.2em] uppercase text-[#171717]/50"
```

### Color Usage
Use raw hex values as Tailwind arbitrary values — no separate color config file:
```tsx
bg-[#f5f5f5]   // light surface (hero background)
bg-[#1a1a1a]   // dark surface (about section)
bg-[#2a2a2a]   // recessed container on dark surface
text-[#171717] // primary text on light
text-white     // text on dark surfaces
text-white/40  // muted text on dark (40% opacity)
text-[#171717]/50 // muted text on light (50% opacity)
```

### The "No-Line" Rule
Never use borders to separate sections. Use background color shifts instead:
```tsx
// ✅ section separation via background shift
<section className="bg-[#f5f5f5]">...</section>
<section className="bg-[#1a1a1a]">...</section>

// ❌ avoid
<hr /> or border-b border-gray-200
```

### Border Radius
Always `0px` (no rounding) for structural elements — sharp corners are intentional:
```tsx
// ✅ no rounding on buttons, cards, containers
className="bg-black text-white px-8 py-4"  // no rounded-*

// Exception: circular badge/avatar elements use rounded-full
className="rounded-full border border-[#171717]/30"
```

### Shadows
Use ultra-diffused shadows only when floating state is required:
```tsx
// ✅ ambient shadow with on-surface tint
style={{ boxShadow: "0 20px 40px rgba(26, 28, 28, 0.04)" }}

// ❌ avoid standard Tailwind shadow utilities (shadow-md, shadow-lg)
```

---

## Layout Patterns

### Section Structure
Each section is full-width, typically `min-h-screen` or `h-screen`:
```tsx
<section className="w-full min-h-screen bg-[#1a1a1a] grid grid-cols-1 md:grid-cols-2">
```

### Absolute Positioning for Peripheral Elements
Corner labels, badges, and navigation anchors use absolute positioning within a `relative` section:
```tsx
<section className="relative w-full h-screen ...">
  <div className="absolute top-6 right-6 ...">badge</div>
  <span className="absolute bottom-8 left-8 ...">socials</span>
  <span className="absolute bottom-8 right-8 ...">email</span>
</section>
```

### Two-Column Grid (About pattern)
```tsx
<section className="grid grid-cols-1 md:grid-cols-2">
  <div className="flex flex-col justify-between px-12 py-16 md:px-16 md:py-20">
    {/* top content */}
    {/* main content */}
    {/* bottom content */}
  </div>
  <div className="flex flex-col justify-between px-12 py-16 md:px-16 md:py-20">
    {/* image fills flex-1 */}
    {/* bottom paragraph */}
  </div>
</section>
```

### Spacing Scale
Prefer generous spacing — avoid standard 16px (p-4) padding for containers:
- Internal container padding: `px-12 py-16` → `md:px-16 md:py-20`
- Gap between inline elements: `gap-4` to `gap-6`
- Bottom margin before closing text: `mt-8`

---

## Image Usage

Always use `next/image` — never `<img>`:
```tsx
// Fixed dimensions
<Image src="/hero/logo.svg" alt="Brandloom" width={140} height={32} className="h-8 w-auto" />

// Fluid sizing via clamp
<Image src="/hero/loom.svg" alt="loom" width={64} height={64} className="w-[clamp(2rem,4vw,4rem)] h-auto" />

// Fill container (relative parent required)
<div className="relative w-full flex-1 min-h-[400px]">
  <Image src="/hero/pc.svg" alt="..." fill className="object-cover opacity-40" />
</div>

// Invert for dark backgrounds
<Image src="/hero/logo.svg" alt="Brandloom" width={120} height={28} className="h-7 w-auto invert" />
```

---

## Design Token Reference

### Surfaces (light mode)
| Token | Value | Use |
|---|---|---|
| Primary canvas | `#f9f9f9` | Page background |
| Hero background | `#f5f5f5` | Hero section |
| High-contrast card | `#ffffff` | Elevated cards |
| Recessed utility | `#e8e8e8` | Utility areas |

### Surfaces (dark mode)
| Token | Value | Use |
|---|---|---|
| Dark canvas | `#1a1a1a` | Dark sections |
| Recessed container | `#2a2a2a` | Image/media containers |

### Brand Colors
| Token | Value | Use |
|---|---|---|
| Primary | `#000000` | CTAs, primary buttons |
| Secondary (Forest Green) | `#4b6450` | Accent — use sparingly |
| On-primary | `#ffffff` | Text on primary |

---

## Do's and Don'ts

### Do
- Use `select-none` on decorative display text that shouldn't be selected
- Use `overflow-hidden` on sections with absolute-positioned elements
- Use `invert` Tailwind class to adapt light SVGs for dark backgrounds
- Use `opacity-*` suffixes (`text-white/40`, `text-[#171717]/50`) for muted states
- Use `em` italic (`<em className="not-italic italic">`) for semantic italic within body copy

### Don't
- Don't add `rounded-*` to structural UI elements — 0px radius is intentional
- Don't use `border-*` for section separation — use background color shifts
- Don't use icons from icon libraries — prefer `small-label` text labels
- Don't bold serif text — use italic style for emphasis (`font-light italic`)
- Don't use `shadow-*` Tailwind utilities — use custom `box-shadow` with `rgba(26,28,28,...)` tint
- Don't use `p-4` (16px) for container padding — use `px-12 py-16` minimum
