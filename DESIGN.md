# Design System Strategy: The Editorial Monolith

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Atelier."** 

This system moves away from the "app-like" rigidity of standard SaaS interfaces and instead draws inspiration from high-fashion editorial spreads and architectural blueprints. It is characterized by high-contrast typography, aggressive use of white space, and a rejection of traditional UI boundaries. We achieve a premium feel not through complexity, but through **intentional asymmetry** and **tonal depth**. The layout should feel "curated" rather than "generated," utilizing the tension between classic serif elegance and modern geometric precision.

---

## 2. Colors & Surface Architecture
The palette is rooted in a deep, nocturnal foundation punctuated by a singular, organic Forest Green.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To separate content, designers must use background color shifts or the spacing scale.
*   *Example:* A `surface-container-low` (#f3f3f4) section sitting on a `surface` (#f9f9f9) background creates a sophisticated boundary that feels architectural rather than digital.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers. Use the `surface-container` tiers to define importance:
*   **Base Layer:** `surface` (#f9f9f9) for the primary canvas.
*   **In-Page Containers:** Use `surface-container-lowest` (#ffffff) for high-contrast "cards" or `surface-container-high` (#e8e8e8) for recessed utility areas.
*   **The "Glass & Gradient" Rule:** For floating navigation or modal overlays, use a semi-transparent `surface-container-lowest` with a `backdrop-blur` (20px+). This creates a "frosted glass" effect that allows the underlying high-contrast typography to bleed through softly.

### Signature Textures
Main CTAs or Hero backgrounds should utilize a subtle linear gradient from `primary` (#000000) to `primary-container` (#1a1b21). This adds a "weighted" feel to the dark elements, preventing them from looking "flat" or "cheap."

---

## 3. Typography: The Editorial Voice
Our typography is the primary vehicle for the brand's "Modern Precision" identity.

*   **The Power of Display:** Use `hero-title` (Playfair Display) for hero statements. It conveys authority and heritage.
*   **The Italic Accent:** Use `hero-italic` for single highlight words within hero text — italic serif at a slightly larger scale.
*   **The Section Voice:** Use `section-title` for all section-level headings — same serif family, tighter scale.
*   **The Technical Body:** `small-label` (Geist Sans) provides the "modern" counterbalance. Wide tracking gives it a luxury "engraved" look.

### Utility Classes

| Class | Font | Size | Style | Intent |
| :--- | :--- | :--- | :--- | :--- |
| `hero-title` | Playfair Display | clamp(3rem, 8vw, 8rem) | Light, normal | Hero headlines |
| `hero-italic` | Playfair Display | clamp(3.5rem, 9vw, 9.5rem) | Light, italic | Highlight words in hero |
| `section-title` | Playfair Display | clamp(2rem, 3.5vw, 3.5rem) | Light, normal | Section headings |
| `small-label` | Geist Sans | 0.6875rem | Regular, uppercase | Nav tags, metadata, corner labels |

### Typography Rules
- Letter-spacing: tight (`-0.02em`) on large serif, wide (`0.2em`) on small labels
- Line-height: `1.05` for display, `1.15` for section titles
- Never mix serif weights — use italic style for emphasis, not bold
- `small-label` is always uppercase with wide tracking — never sentence case

---

## 4. Elevation & Depth
In this system, depth is a whisper, not a shout.

*   **Tonal Layering:** Avoid shadows where possible. Instead, place a `surface-container-lowest` (#ffffff) element atop a `surface-container` (#eeeeee). The 2% shift in brightness is enough to signal hierarchy.
*   **Ambient Shadows:** If a floating state is required (e.g., a dropdown), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(26, 28, 28, 0.04)`. Note the use of the `on-surface` color (#1a1c1c) for the shadow tint to maintain naturalism.
*   **The "Ghost Border":** For input fields or essential containment, use the `outline-variant` token at **15% opacity**. Never use a 100% opaque border; it breaks the "editorial" flow.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (#000000) background, `on-primary` (#ffffff) text. No border radius (`0px`).
*   **Secondary:** `secondary` (#4b6450) background. Use this for "Action" items that require an organic feel.
*   **Tertiary:** Ghost style. No background, `primary` text with a `0.35rem` underline that appears on hover.

### Input Fields
*   **Architecture:** Bottom-border only (the "Ghost Border" at 20% opacity).
*   **Labels:** Use `small-label` in `on-surface-variant` (#46464b), positioned above the input.
*   **States:** On focus, the bottom border transitions to `secondary` (#4b6450).

### Cards & Lists
*   **Rule:** Forbid the use of divider lines.
*   **Execution:** Use the Spacing Scale `10` (3.5rem) or `12` (4rem) to separate list items. Use background color shifts (`surface-container-low`) to group related card content.

### Signature Component: The "Editorial Reveal"
A specialized hover state for image cards where the `hero-title` is partially obscured by a `surface-variant` (#e2e2e2) overlay, revealing fully only on interaction. This encourages user "crafting" of the experience.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins. Offsetting a text block to the right while leaving the left column empty creates a high-fashion aesthetic.
*   **Do** use the Forest Green (`secondary`) sparingly. It is a "gemstone" accent; overusing it devalues the premium feel.
*   **Do** leverage the `0px` roundedness scale religiously. Sharp corners denote precision and custom tailoring.

### Don't
*   **Don't** use standard 16px padding. Use the spacing scale — prefer `8` (2.75rem) or `12` (4rem) for internal container padding to give content room to "breathe."
*   **Don't** use pure grey for shadows. Always tint shadows with the `on-surface` (#1a1c1c) hue.
*   **Don't** use icons unless absolutely necessary. Prefer `small-label` (all caps, wide tracking) for a more sophisticated navigation experience.
