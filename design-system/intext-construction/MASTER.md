# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Intext Construction
**Generated:** 2026-07-20 16:52:50
**Category:** B2B Service
**Design Dials:** Variance 3/10 (Centered / Minimal) | Motion 3/10 (Subtle) | Density 3/10 (Spacious)

---

## Global Rules

### Color Palette

**Finalized 2026-07-20** — sampled and contrast-verified during the redesign design pass (see `design/PLAN.md` Section 5). Replaces the generic placeholder palette below.

| Role | Hex | CSS Variable | Contrast |
|------|-----|--------------|----------|
| Navy (primary) | `#1B2340` | `--navy` | White text on navy: 15.43:1 |
| Red (accent — sparing use) | `#CA2621` | `--red` | White text on red: 5.51:1 |
| Background | `#FAFAF9` | `--bg` | — |
| Surface | `#FFFFFF` | `--surface` | — |
| Ink (headings) | `#0B1219` | `--ink` | On bg: 18.04:1 |
| Body text | `#3F4A54` | `--body` | On bg: 8.67:1 |
| Muted | `#6B7684` | `--muted` | On surface: 4.62:1 (use on surface only, not bare bg — see note) |
| Border | `#E7E5E1` | `--border` | Decorative only, not for text |

**Color Notes:** Navy and red are sampled directly from `research/current-site/images/logo.png`, not invented. Raw logo ink reads as a deep indigo/purple (`#422874`, H260°/S49%/L31%) — hue-corrected to H227° and darkened to `#1B2340` so it reads as navy, not purple (project style forbids purple/pink). Raw logo red (`#E4322B`) gives only 4.38:1 with white text (fails AA) — darkened at the same hue/saturation to `#CA2621` (5.51:1). Red is used sparingly: primary CTA button, active nav state, and small accent rules only — never as a decorative label or icon color. `--muted` measures 4.42:1 on bare `--bg` (just under the 4.5:1 AA floor for normal text) — reserve it for text on `--surface` (white) or for large/decorative text (≥24px or bold ≥18.66px, which only needs 3:1); use `--body` for small labels that sit directly on `--bg`.

### Typography

**Finalized 2026-07-20** — replaces the placeholder Inter/Inter pairing below.

- **Heading Font:** Space Grotesk, weights 500/700, `letter-spacing: -0.03em`. Hero H1 `clamp(2.75rem, 7vw, 6rem)`.
- **Body Font:** Inter, weights 400/500/600, 16–18px, `line-height: 1.6`.
- **Mood:** exaggerated minimalism — oversized statement type, massive whitespace, high contrast, photo-forward, almost no ornament.
- **Google Fonts:** [Space Grotesk + Inter](https://fonts.google.com/share?selection.family=Space+Grotesk:wght@500;700|Inter:wght@400;500;600)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap');
```

### Spacing Variables

*Density: 3/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `24px` / `1.5rem` | Standard padding |
| `--space-lg` | `32px` / `2rem` | Section padding |
| `--space-xl` | `48px` / `3rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #0369A1;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0F172A;
  border: 2px solid #0F172A;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #F8FAFC;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #0F172A;
  outline: none;
  box-shadow: 0 0 0 3px #0F172A20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Exaggerated Minimalism

**Keywords:** Bold minimalism, oversized typography, high contrast, negative space, loud minimal, statement design

**Best For:** Fashion, architecture, portfolios, agency landing pages, luxury brands, editorial

**Key Effects:** font-size: clamp(3rem 10vw 12rem), font-weight: 900, letter-spacing: -0.05em, massive whitespace

### Page Pattern

**Pattern Name:** Minimal Single Column

- **Conversion Strategy:** Single CTA focus. Large typography. Lots of whitespace. No nav clutter. Mobile-first.
- **CTA Placement:** Center, large CTA button
- **Section Order:** 1. Hero headline, 2. Short description, 3. Benefit bullets (3 max), 4. CTA, 5. Footer

---

## Motion

**Page Transition** (Subtle) — Trigger: route change | Duration: 200-300ms | Easing: `power1.inOut`

```js
gsap.to(main, { opacity: 0, duration: 0.2, onComplete: () => { navigate(); gsap.fromTo(main, { opacity: 0 }, { opacity: 1, duration: 0.2 }); } });
```

**Framework notes:** Pair with the router's transition hooks (Next.js App Router transitions, React Router's useNavigate, Vue Router's beforeEach/afterEach)

- ✅ Preload the destination route's critical assets before the exit tween finishes
- ❌ Don't block navigation on animation; cap exit duration at ~250ms so the app never feels unresponsive
- ⚡ Exit animation should always resolve faster than entrance (asymmetric timing) so back/forward feels snappy

---

## Anti-Patterns (Do NOT Use)

- ❌ Playful design
- ❌ Hidden credentials
- ❌ AI purple/pink gradients

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
