# GMCT — Page Brief for Front-End Builder

---

## Design System

### Colour Palette
| Role | Hex |
|---|---|
| Primary (backgrounds, footer, hero) | `#231c21` |
| Background / Body | `#F5F0E8` |
| Text | `#231c21` |
| Gradient | `#231c21` → `#F5F0E8` (hero bottom fade into body) |

### Typography
- **Font import:** `<link rel="stylesheet" href="https://use.typekit.net/wog3vwu.css">`
- **H1 / H2 / H3:** Bicyclette, weight 200 — large display sizing, tight tracking
- **Labels / Section markers:** Bicyclette, weight 200, small caps, wide tracking
- **Body:** Inter, weight 400 (Regular) — comfortable line-height, standard tracking

### Layout
- Full-width sections, no horizontal container cap on hero/footer
- Body content sections use a 4-column grid with generous gutters
- Numbered section labels (`01`, `02`, etc.) sit left-column, with section title offset to second column — a consistent editorial signature across all sections

---

## Page Sections

---

### NAV
- **Position:** Sticky top, full-width
- **Left:** Logo `GMCT` — text mark, bold
- **Right:** `About` · `Solutions` · `Insights`
- **Background:** Transparent over hero (inherits primary), white/cream on scroll
- **No CTA button in nav**

---

### SECTION 01 — HERO
- **Background:** `#231c21` (full bleed)
- **Text colour:** `#F5F0E8`
- **Headline (H1):** `Build Your Best Business Yet` — massively oversized display type, fills ~90% of viewport width, 2 lines
- **Bottom info row (4 columns):**
  - `50+ Partners`
  - `5 Industry Awards`
  - `Strategy / Planning / Vision` (stacked, label style)
  - Tagline: *"From strategy to execution, GMCT turns today's challenges into tomorrow's competitive edge"*
- **CTAs (underline link style, no buttons):**
  - `EXPLORE SOLUTIONS`
  - `BOOK A CONSULTATION`
- **Gradient:** Hero fades from `#231c21` at top → `#F5F0E8` at bottom (smooth blend into next section)

---

### SECTION 01 — INDUSTRIES WE ACCELERATE
- **Background:** `#F5F0E8`
- **Section label:** `01 — Industries We Accelerate`
- **Layout:** 3-column card grid
- **Each card:** Full-bleed photo → category label → short body copy paragraph
- **Industries (6 total, 2 rows of 3):**
  - Healthcare — *"We help healthcare organizations improve care delivery while maintaining strict cost control..."*
  - Financial Services — *"We modernize risk, compliance, and customer experience to meet evolving regulatory and market demands..."*
  - Technology — *"We support technology companies in scaling innovation at the speed of demand..."*
  - Manufacturing
  - Retail
  - Energy

---

### SECTION 02 — ABOUT US
- **Background:** `#F5F0E8`
- **Section label (small caps, left column):** `02 — About Us`
- **Statement (massive display type, full width):**
  > Moving you from insight to impact through data-driven thinking and close collaboration
- Typography is the hero here — no images, no supporting elements. Just the statement filling the viewport.

---

### SECTION 03 — CONSULTING SERVICES TAILORED TO YOUR GOALS
- **Background:** `#F5F0E8`
- **Section label:** `03 — Consulting Services Tailored to Your Goals`
- **Layout:** Left column = service name + descriptor. Right column = abstract geometric illustration (gradient using `#231c21` → `#F5F0E8` palette)
- **Divider:** Thin horizontal rule (`#231c21`, low opacity) between each service
- **Services:**
  - **Business Strategy** — Vision-setting, market entry, growth pathways *(illustration: concentric arcs)*
  - **Financial Advisory** — Capital structure, valuation, M&A due diligence *(illustration: stacked chevrons)*
  - **Operational Excellence** — Lean processes, digital workflows, cost take-out *(illustration: rounded rectangle frames)*
  - **Risk & Resilience** — Enterprise-wide frameworks for disruption readiness *(illustration: zigzag/wave forms)*
- **Note on illustrations:** All abstract, gradient-filled geometric shapes. Use `#231c21` → `#F5F0E8` gradient. No photography. Each is unique per service but uses the same visual language.

---

### SECTION 04 — LATEST INSIGHTS
- **Background:** `#F5F0E8`
- **Section label:** `04 — Latest Insights`
- **Layout:** 3-column card grid
- **Each card:** Rectangular photo (tinted/muted) → article title below
- **Articles:**
  - AI in 2035: From Pilots to Profit
  - Net Zero Projects
  - Supply-Chain Nearshoring
- **CTA:** `OUR BLOG` — underline link style, centred below grid

---

### SECTION 05 — TESTIMONIAL
- **Background:** `#F5F0E8`
- **Layout:** 50/50 split — text left, image right
- **Pull quote (large display type):**
  > "GMCT increased our EBITDA by 14% in nine months."
- **Attribution (small, below quote):** Richard Seth, COO, Vailu Scale-Up
- **Image:** Team photo — professional group, arched window background
- **CTA:** `READ ALL` — underline link style

---

### SECTION 06 — STAY AHEAD OF THE CURVE
- **Background:** Gradient `#F5F0E8` → `#231c21` (cream to dark, mirroring hero in reverse)
- **Text colour:** `#F5F0E8`
- **Section label:** `06 — Stay Ahead of the Curve`
- **Headline (large display):** *"Subscribe and receive our monthly trend briefings"*
- **Form:**
  - Email address field (minimal underline style, no border-box)
  - Checkbox: `Yes, subscribe me to your newsletter`
  - CTA Button: `SUBMIT` — outlined, `#F5F0E8` border on dark background

---

### FOOTER
- **Background:** `#231c21` (full bleed)
- **Text colour:** `#F5F0E8`
- **Background element:** Oversized `GMCT` lettermark at near-full-width, low opacity — decorative, sits behind footer links
- **Layout (4 columns):**
  - Col 1: `About` · `Solutions` · `Insights`
  - Col 2: Address — 500 Terry Francine Street, San Francisco, CA 94158 / `info@mysite.com`
  - Col 3: `Privacy Policy` · `Terms & Conditions` · `Accessibility Statement`
  - Col 4: `LinkedIn` · `YouTube` · `X`
- **Copyright:** `© 2035 by GMCT` (bottom right, small)

---

## Design Notes

- The **gradient bookend** is the signature move: page opens with `#231c21` hero, transitions through cream body, closes with `#231c21` footer. Creates a visual loop.
- **Section numbering** (`01–06`) is consistent and always in small caps, left-aligned — don't skip it, it's core to the editorial feel.
- **CTAs are never buttons** (except the newsletter submit). They're underlined text links in all-caps. Keeps the page feeling premium.
- **Typography does the heavy lifting** — sections 02 and 03 have no hero images; the oversized type is the visual.
- Illustrations in section 03 should be SVG-based or CSS-drawn — no photography, keep them graphic and abstract.