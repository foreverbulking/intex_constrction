# Intext Construction — Current Site Archive Inventory

Archived: 2026-07-20
Source: https://www.intextconstruction.ca/

## Pages

Site is a **single-page site**. `sitemap.xml` lists only one URL, and the rendered header/mobile nav has exactly one nav item ("Home") pointing at `/`. No other same-domain HTML pages exist to crawl.

| URL | Title | Purpose | Key content present |
|---|---|---|---|
| https://www.intextconstruction.ca/ | www.intextconstruction.ca (no custom `<title>` set) | One-page brochure site: hero, about, values, portfolio, contact footer | Hero tagline, "About Us" company blurb, 3 value props (Craftsmanship, Safety, Integrity), 9-photo portfolio grid with project captions, footer contact info |

Screenshot: `screenshots/home-desktop.png` (1440×4960) and `screenshots/home-mobile.png` (390 CSS px wide, full page).
Content dump: `content/home.md`.

## Image inventory

14 files downloaded, **1.1 MB total** (1076 KB). All from the homepage (single page).

| File | Type | Size | Notes |
|---|---|---|---|
| `logo.png` | PNG 162×125 | 5.5 KB | **Company logo** — "INTEXT" in navy + "CONSTRUCTION LTD" in red, small red/purple mark above the X. Used in header and footer. |
| `logo-fallback.svg` | SVG | 0.3 KB | Generic gray/orange checkmark-style glyph referenced as `/img/logo.svg`; not visibly rendered on page — looks like a platform-default fallback icon, not Intext's real mark. |
| `hero-about-background-photo.png` | PNG 768×768 | 274 KB | Real project photo (scaffolding + glass-front commercial building) used **twice**: as the dark-overlaid hero banner background and again as the "About Us" section background. Original CDN URLs for the two placements pointed to byte-identical files (confirmed via checksum) — deduped to one file. |
| `project-photo-04.jpg` | JPEG 768×576 | 122 KB | Portfolio grid photo 1 — rooftop HVAC/mechanical units, aerial view. |
| `project-photo-05.jpg` | JPEG 768×576 | 90 KB | Portfolio grid photo 2 — "Frontier Collegiate" brick exterior with signage. |
| `project-photo-06.jpg` | JPEG 768×576 | 51 KB | Portfolio grid photo 3 — welding shop / industrial interior. |
| `project-photo-07.jpg` | JPEG 768×1024 | 133 KB | Portfolio grid photo 4 — KFC Pembina counter/menu-board interior. |
| `project-photo-08.jpg` | JPEG 768×576 | 93 KB | Portfolio grid photo 5 — office reception desk, wood cabinetry. |
| `project-photo-09.jpg` | JPEG 768×432 | 73 KB | Portfolio grid photo 6 — empty renovated office room. |
| `project-photo-10.jpg` | JPEG 768×576 | 56 KB | Portfolio grid photo 7 — door/vestibule renovation. |
| `project-photo-11.jpg` | JPEG 768×576 | 58 KB | Portfolio grid photo 8 — restroom renovation (sinks/stalls). |
| `project-photo-12.jpg` | JPEG 768×576 | 39 KB | Portfolio grid photo 9 — mechanical/electrical panel room. |
| `favicon.ico` | ICO (16×16 + 32×32) | 15 KB | Site favicon, also reused as apple-touch-icon. |
| `og-preview-screenshot.png` | JPEG 540×540 (`.png` name, actual bytes are JPEG) | 42 KB | **Not a real content asset** — auto-generated full-page screenshot the site builder uses for `og:image`/`twitter:image` social-preview tags. |

A duplicate (`icon-or-graphic-03.png`, byte-identical to the hero/about background) was found and discarded during dedupe. No files were under the 2 KB tracking-pixel threshold, so nothing was auto-deleted on that basis.

**CDN pattern:** all real photos/logo are served from `site-757sw354.wsecdn2.websitecdn.com/uploads/768/<hash>.<ext>`. The `768` segment is a size bucket, but the `srcset` on the page lists 1280w/1920w descriptors that resolve to the *same* `768` URL — i.e. 768px-wide is the largest variant the platform actually generates; there is no larger original to fetch.

## Branding observed

- **Logo**: "INTEXT" (bold, navy) + "CONSTRUCTION LTD" (red, smaller) wordmark, plus a small abstract red/purple mark. See `images/logo.png`.
- **Colors** (pulled from computed CSS):
  - Hero/About overlay tint: `rgb(66, 86, 100)` → `#425664` (dark slate blue-gray, laid over the background photo)
  - Body text / header-footer text: `rgb(89, 89, 89)` → `#595959` (gray)
  - Section backgrounds: white (`#ffffff`) throughout except the bottom-most builder-ad bar, which is black (`#000000`)
  - Logo accent red: approx `#c8202f`-range; logo navy: approx `#1c2b4a`-range (read visually off the PNG, not in page CSS since the logo is a flat image, not styled text)
  - No visible use of a distinct "brand" accent color beyond the logo itself — headings/body all render in gray/white/black, so the site reads as fairly monochrome apart from the logo.
- **Fonts**: Google Fonts **"DM Sans"** (400/700) is the actual body/heading font in use (`h2` computed to `"DM Sans"`, 700, 44px). **"Jost"** (Google Fonts) and **"neue-kabel"** (Adobe Typekit, 5 weights 400–800) are also loaded but weren't observed rendering anywhere visible on the page — likely unused template leftovers costing extra font requests.
- **Overall style impression**: generic website-builder template look. Hero banner + 3-column value props + photo grid + contact footer is a stock small-business layout with no custom design work — no custom icons (value-prop "icons" are just text), inconsistent portfolio captions (see below), and default builder chrome still visible (see Platform section).

## Platform / tech detected

**Website.com Website Builder** — confirmed via `<meta name="generator" content="Website.com Website Builder">`. Also confirmed by:
- Asset domains: `wsecdn2.websitecdn.com`, `websiteserver4.com`
- CSS class prefix `bb-` (`bb-section`, `bb-header`, `bb-desktop-nav`, etc.)
- `robots.txt` disallow rules for `/admin/`, `/portal/`, `/js/` (with builder-specific exceptions) — matches this platform's standard boilerplate.
- Stylesheet filename `site_free_plan.bundle.css` and a visible **"Website Builder — Create Free Website Now" / "Get Your .COM Domain for $14.77/year"** ad bar pinned to the top of the page, plus a **"Created & Hosted with Website.com"** watermark bar in the footer — both strongly indicate this is running on Website.com's **free tier**, not a paid plan.

Not Wix, Squarespace, or WordPress.

## Notable issues (redesign fodder)

- **Free-plan ads are user-facing**: a full-width banner ad for the website builder itself sits above the real header, and a "Created & Hosted with Website.com" bar sits below the real footer. This looks unprofessional for a construction company site and is removed by simply moving off the free plan / off this builder.
- **No page `<title>`, no meta description, empty `og:description`**: `<title>` and `twitter/og description` are blank; the page just inherits the raw domain as its title. Bad for SEO and social-link previews.
- **Single page, no service pages**: everything (about, values, portfolio, contact) is crammed onto one URL. No dedicated "Services," "Contact," or individual project pages — limits both SEO surface area and user navigation.
- **Sloppy/duplicated portfolio captions**: several portfolio entries repeat verbatim ("Ecole Macneill" appears as a caption 4 times across different photos; "Interior Referesh" typo repeated twice), suggesting copy-paste content entry rather than per-project write-ups.
- **Same photo reused as both hero and About background**: no distinct hero image — reduces visual variety on an otherwise photo-driven page.
- **Logo is a flat raster PNG** at only 162×125 — will look soft/pixelated if reused any larger; a redesign should recreate it as vector (SVG) or request source art.
- **Unused web fonts still loading**: Jost and a 5-weight Typekit family ("neue-kabel") are fetched but not used anywhere visible — dead weight on page load.
- **Thin content / no CTAs beyond contact info**: no phone-click button, no contact form, no map embed, no service list beyond a one-line description — a visitor has to manually dial/email from plain text in the footer.
- **Not mobile-broken, but not mobile-optimized either**: layout reflows acceptably at 390px (see `screenshots/home-mobile.png`) but the 3-column value-prop section and photo grid both just stack vertically with no mobile-specific treatment.
