# Intext Construction — Redesign Plan

Prepared as an owner-facing pitch: current-site audit, goals, sitemap, per-page specs, style guide, SEO plan, and build notes. Companion deliverable: `design/mockups/` (static HTML mockups of all 5 pages + a showcase hub). **Build phase has not started** — this document and the mockups are design deliverables only.

---

## 1. Current-site problems

Audited from the live site archive (`research/current-site/inventory.md`, `research/current-site/content/home.md`). This is the "why" behind the redesign.

| # | Problem | Evidence |
|---|---|---|
| 1 | **Ads on the free host** | A free-tier Website.com builder ad banner sits above the real header, and a "Created & Hosted with Website.com" watermark bar sits below the real footer — on a company's professional storefront. |
| 2 | **No page title, no meta description** | `<title>` is blank (browser just shows the raw domain); `og:description`/`twitter:description` are empty. Zero control over how the site appears in search results or social shares. |
| 3 | **One page, no site structure** | `sitemap.xml` lists a single URL. Everything — hero, about, values, portfolio, contact — is crammed onto one page. No dedicated Services, Projects, or Contact URLs to rank or link to. |
| 4 | **Duplicate, sloppy portfolio captions** | "Ecole Macneill" is reused verbatim as a caption on 4 different photos; "Interior Referesh" (typo) appears twice. Reads as copy-pasted, not curated. |
| 5 | **Same photo reused as hero AND About background** | The scaffolding/glass-building photo is used twice on the same page (confirmed via checksum — byte-identical files). No distinct hero image. |
| 6 | **Raster-only logo** | The only logo asset is a 162×125 flat PNG. Soft/pixelated at any larger display size; no vector source. |
| 7 | **Dead web fonts loading** | Google Fonts "Jost" and 5-weight Adobe Typekit "neue-kabel" are fetched but never rendered anywhere visible — pure page-weight cost with no visual benefit. |
| 8 | **Thin calls to action** | No click-to-call phone button, no contact form, no map — a visitor has to manually copy a phone number or email address out of plain footer text. |

---

## 2. Goals

1. **Professional presence** — a custom-built, ad-free site on the company's own domain that looks like a serious Manitoba general contractor, not a free-tier template.
2. **Lead generation** — make it as easy as possible to call, email, or submit a project inquiry from every page (click-to-call header, CTA bands, dedicated contact page with form).
3. **Showcase the portfolio** — give the real project photos room to breathe in an editorial layout, with accurate, non-duplicated captions.
4. **Manitoba local SEO** — unique titles/meta descriptions per page, a real site structure search engines can crawl, and a LocalBusiness schema foundation (see Section 6).

---

## 3. Sitemap

| Page | Slug (production) | Mockup file | One-line purpose |
|---|---|---|---|
| Home | `/` | `home.html` | The pitch: who we are, proof of work, and a clear path to contact. |
| Services | `/services` | `services.html` | Full scope of work, sector by sector and service by service. |
| Projects | `/projects` | `projects.html` | Editorial portfolio grid of all 9 real project photos. |
| About | `/about` | `about.html` | Company story, values, and credentials — build trust before the call. |
| Contact | `/contact` | `contact.html` | Every way to reach us, plus a quote-request form. |

`design/mockups/index.html` is a sixth file — an internal **showcase hub** for this presentation only (style guide + links to the 5 mockups + problems-vs-fixed summary). It is not part of the production sitemap.

---

## 4. Per-page spec

### Home (`home.html`)

| Section | Layout | Content source | Imagery | CTA |
|---|---|---|---|---|
| Sticky header | Logo left, 5-link nav center/right, phone number right (click-to-call) | Real (logo, phone) | Logo | — |
| Hero | Split: statement text left, real photo right (stacks photo-above-text on mobile) | Real tagline + drafted sub-line | `hero-scaffolding-envelope.png` | Primary "Start Your Project" (red) → Contact; ghost "View Our Work" → Projects |
| Trust strip | Plain text row, no badges | Real (Est. 2017 · Registered & Insured · SECOR in progress) | — | — |
| Services teaser | 3-column grid, 6 cards, SVG icon + short line each | Drafted (service names locked, descriptions drafted) | 6 inline SVG icons | Each card links to `services.html#<slug>` |
| Featured projects | 3-photo editorial grid | Real captions | 3 distinct real photos (no repeats on page) | Cards link to Projects |
| CTA band | Full-width navy | Drafted | — | Primary "Get a Free Quote" (red) → Contact; ghost "Call" → tel: |
| Footer | 3-column: brand, nav, contact | Real contact info | Logo | — |

### Services (`services.html`)

| Section | Layout | Content source | Imagery | CTA |
|---|---|---|---|---|
| Page hero | Statement headline + intro, no photo | Drafted | — | — |
| Sectors row | 3 columns: Residential / Commercial / Industrial | Real (from home.md: "residential, commercial, and industrial sectors") | — | — |
| 6 service blocks | Alternating text/photo, full width, anchored `id`s | Drafted intro + real scope bullets (flooring, envelope, doors/windows, parapet, etc. from home.md scope lists) | 6 real photos (one hero photo reused from Home) | — |
| Process strip | 4 numbered columns | Drafted (Consult → Quote → Build → Handover, locked by brief) | Large numerals | — |
| CTA band | Full-width navy | Drafted | — | Primary "Get a Free Quote" (red) → Contact; ghost "Call" → tel: |
| Footer | Same as Home | Real | Logo | — |

### Projects (`projects.html`)

| Section | Layout | Content source | Imagery | CTA |
|---|---|---|---|---|
| Page hero | Statement headline + intro | Drafted | — | — |
| Portfolio grid | CSS-column masonry, all 9 real photos, category tag + caption per photo | Real project names/scope where directly evidenced; inferred photo↔project pairings and invented differentiating suffixes marked with `*` (see caption note below) | All 9 real photos | Cards link to Contact |
| Footnote | Single line | Required disclosure | — | "* Draft captions — to be confirmed with owner." |
| CTA band | Full-width navy | Drafted | — | Primary "Start Your Project" (red) → Contact; ghost "Call" → tel: |
| Footer | Same as Home | Real | Logo | — |

### About (`about.html`)

| Section | Layout | Content source | Imagery | CTA |
|---|---|---|---|---|
| Page hero | Statement headline ("Building Trust. Constructing Excellence.") + drafted sub-line | Real tagline | — | — |
| Story block | Split: text + real photo | **Real, verbatim** from `content/home.md` ("Since 2017, Intext Construction Corporation has delivered…") | `project-macneill-admin-office.jpg` | — |
| Values | 3 columns | **Real, verbatim** (Craftsmanship & Quality / Safety & Accountability / Integrity & Trust) | — | — |
| Credentials row | 2 items + icon | Real (Registered & Insured; SECOR Certification In Progress) | 2 inline SVG icons | — |
| Service-area block | Short text | Real (39 Lloyd McKinnon Way; Serving Manitoba) | — | — |
| CTA band | Full-width navy | Drafted | — | Primary "Start Your Project" (red) → Contact; ghost "Call" → tel: |
| Footer | Same as Home | Real | Logo | — |

### Contact (`contact.html`)

| Section | Layout | Content source | Imagery | CTA |
|---|---|---|---|---|
| Split hero | Left: headline + large click-to-call `tel:` link, mailto, address. Right: form mockup | Real contact details | — | Form "Send Message" (navy) |
| Form mockup | Name*, Email*, Phone, Project Type* (select), Message*, visible labels, required asterisks, explicit "visual mockup" note | Structure per brief | — | — |
| Map placeholder | Styled div, no live embed | Real address label | — | — |
| Footer | Same as Home | Real | Logo | — |

**Caption honesty note (Projects grid):** the original site repeated "Ecole Macneill" as a caption on 4 different photos and had no reliable 1:1 photo↔project mapping in its scraped text. Direct visual inspection of all 9 source photos (done during this design pass — see Section 7 note) was used to build accurate, non-duplicated captions. Where a project name is directly evidenced by the photo + original scope text (Frontier Collegiate exterior signage, KFC Pembina counter, Frontier School Division door/vestibule scope), the caption carries **no asterisk**. Where the photo↔project pairing or a differentiating suffix was inferred by the designer (e.g. which of several "École MacNeill" scope entries a given interior photo belongs to), it is marked with `*` and covered by the single footnote line. **6 of 9 captions carry the asterisk; 3 are direct matches.**

---

## 5. Style guide summary

### Palette

| Role | Hex | CSS variable | Contrast | Notes |
|---|---|---|---|---|
| Navy (primary) | `#1B2340` | `--navy` | White text on navy: **15.43:1** | Sampled from logo ink (raw `#422874`, H260°/S49%/L31% — reads as indigo/purple), hue-shifted to H227° and darkened slightly to read as navy, not purple. Buttons, footer, nav-active accents, icons. |
| Red (accent) | `#CA2621` | `--red` | White text on red: **5.51:1** | Sampled from logo wordmark (raw `#E4322B`, only 4.38:1 with white — fails AA). Darkened ~7% lightness at the same hue/saturation to clear 4.5:1 with margin. **Used only for: primary CTA button, nav active-state, contact-page tel accent + required-field asterisks.** |
| Ink | `#0B1219` | `--ink` | On bg: 18.04:1 | Headings only. Fixed token. |
| Body | `#3F4A54` | `--body` | On bg: 8.67:1 | Body copy, trust strip, form notes. Fixed token. |
| Muted | `#6B7684` | `--muted` | On surface: 4.62:1 · On bg: 4.42:1 | Fixed token. **Only used on `--surface` (white) backgrounds or for large-text/decorative elements** — on bare `--bg` it falls just under the 4.5:1 AA floor for normal text, so small labels sitting directly on `--bg` use `--body` instead (see implementation note below). |
| Border | `#E7E5E1` | `--border` | Decorative only | Dividers, card outlines, form field borders. Never used for text. |
| Background | `#FAFAF9` | `--bg` | — | Page background. Fixed token. |
| Surface | `#FFFFFF` | `--surface` | — | Cards, alternating section bands, form fields. Fixed token. |

**Implementation note on `--muted`:** during build, three spots (`home.html` trust strip, `contact.html` form-mockup note, `index.html` hub tag) originally used `--muted` directly on `--bg` and measured 4.42:1 — just under AA. Fixed by switching those three to `--body` (8.67:1) rather than altering the locked `--muted` hex. The large "01–04" process-step numerals use `--muted` at ≥32px/bold, which only needs the 3:1 large-text threshold and clears it.

### Type

- **Headings:** Space Grotesk, weights 500/700, `letter-spacing: -0.03em`. H1 `clamp(2.75rem, 7vw, 6rem)`, H2 `clamp(2rem, 4vw, 3rem)`, H3 `clamp(1.375rem, 2.4vw, 1.75rem)`.
- **Body:** Inter, weights 400/500/600, 16–18px, `line-height: 1.6`.
- **Import:** `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap` — two families only, both actually rendered (unlike the current site's two dead fonts).

### Spacing

- Section vertical padding: `clamp(5rem, 10vw, 9rem)`.
- Container: max-width 1200px, side padding `clamp(1.25rem, 4vw, 2.5rem)`.
- 8px base spacing rhythm throughout components.

### Iconography

- Inline SVG only, Lucide-style (1.5px stroke, round caps/joins), 6 custom service icons + nav/contact/credential icons. No emoji anywhere.

### Do / Don't

| Do | Don't |
|---|---|
| Red on primary CTA, nav-active state, and the contact-page tel accent only (2–3 uses per page, verified page-by-page) | Red as a decorative/label color (category tags, eyebrows, and checkmarks were caught using red during build and switched to navy) |
| Navy for structural emphasis (labels, eyebrows, icons, footer) | Gradients of any kind |
| One real, distinct photo per placement per page | The same photo twice on one page (the current site's #1 visual complaint) |
| Sharp/near-zero corner radius on buttons and cards (architectural, not soft) | Purple/pink tones, playful shapes, stock-photo clichés |
| Visible 2px navy focus rings on every interactive element | Emoji as icons |

---

## 6. SEO plan

Manitoba/Winnipeg general-contractor keyword targets woven into titles and descriptions below. **To confirm with owner:** full mailing address (city + postal code) for NAP consistency — source content only gives "39 Lloyd McKinnon Way."

| Page | Title | Meta description |
|---|---|---|
| Home | Intext Construction Ltd. \| General Contractor in Manitoba | Manitoba general contractor since 2017. Residential, commercial & industrial construction — interior renovations, building envelope, and full-service project management. Registered & insured. |
| Services | Construction Services \| Intext Construction Ltd. — Manitoba | Full-spectrum general contracting in Manitoba: interior renovations, building envelope, flooring & ceilings, doors & windows, parapet construction, and project management. |
| Projects | Our Projects \| Intext Construction Ltd. — Manitoba Portfolio | See recent Intext Construction projects across Manitoba — commercial, institutional, and interior renovation work from schools to restaurants to office builds. |
| About | About Us \| Intext Construction Ltd. — Building Trust Since 2017 | Registered & insured Manitoba general contractor est. 2017. Learn about Intext Construction's craftsmanship, safety, and integrity-driven approach to every project. |
| Contact | Contact Us \| Intext Construction Ltd. — Get a Quote in Manitoba | Contact Intext Construction for your next Manitoba build. Call 431-999-3129, email admin@intextconstruction.ca, or request a quote online. |

All 5 titles/descriptions above are already wired into the `<head>` of each mockup HTML file — screen-shareable proof that problem #2 (blank title/meta) is fixed.

**OG image:** the current site's `og-preview-screenshot.png` is an auto-generated full-page screenshot, not a designed social-share image. Recommend one designed 1200×630 OG image per page (or one strong shared image site-wide as a minimum) using a real project photo — the Frontier Collegiate exterior or the scaffolding/envelope hero shot are the strongest candidates.

**LocalBusiness schema:** add JSON-LD at build time, type `GeneralContractor` (subtype of `LocalBusiness`):
```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Intext Construction Ltd.",
  "telephone": "+1-431-999-3129",
  "email": "admin@intextconstruction.ca",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "39 Lloyd McKinnon Way",
    "addressRegion": "MB",
    "addressCountry": "CA"
  },
  "areaServed": "Manitoba",
  "foundingDate": "2017"
}
```
City/postal code and `sameAs` (social profile URLs, if any exist) to be filled in once confirmed with the owner.

---

## 7. Build notes for later

**Build phase has not started.** These are forward notes for whoever picks up implementation in the Astro app.

- **Page mapping:**
  - `home.html` → `src/pages/index.astro`
  - `services.html` → `src/pages/services.astro`
  - `projects.html` → `src/pages/projects.astro`
  - `about.html` → `src/pages/about.astro`
  - `contact.html` → `src/pages/contact.astro`
  - Shared header/footer/CSS tokens → extract into Astro layout + component(s) rather than the copy-pasted markup used across the 6 static mockup files.
- **Images:** re-export all 9 project photos + the scaffolding/envelope hero photo as WebP (with JPEG/PNG fallback or `<picture>`), and generate responsive `srcset` sizes — the current site's CDN tops out at 768px wide with no larger original, so request higher-resolution originals from the owner if available before final export.
- **Logo:** current asset is a 162×125 raster PNG (problem #6). Vector SVG recreation flagged as a build-phase task — request source art from the owner, or trace/recreate in Illustrator/Figma.
- **Photo↔project verification:** the 6 asterisked captions in `projects.html` (photo↔project pairings and differentiating suffixes inferred during this design pass) need a quick confirm-or-correct pass with the owner before launch copy is finalized.
- **Form handling:** TBD — mockup form has no backend. Options to evaluate at build time: Netlify Forms, Formspree, or a small server action/API route with email delivery (e.g. Resend) to `admin@intextconstruction.ca`.
- **PageAgent demo:** stays at `/page-agent-demo.html` (existing file in `public/`) — untouched by this redesign.
- **Design tokens:** `design-system/intext-construction/MASTER.md` has been updated with the final sampled/adjusted palette and Space Grotesk/Inter type system (Section C of this project's brief) so the build phase inherits correct tokens from day one.
