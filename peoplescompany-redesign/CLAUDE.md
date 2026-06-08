# PeoplesCompany.com Redesign

## Project
Redesign of **PeoplesCompany.com**, a national farmland / agricultural real estate
firm. The current goal is to build **multiple full versions** of the new site so the
team can pick and choose what to keep before handing off to the developer.

## Hard constraints
- **Exclude all `/listings` pages** — anything under `/listings/` is out of scope.
- **Hard launch deadline: October 1, 2026.** No flexibility.
- **CMS is NOT changing** — design within the current CMS's capabilities.
- **Kiron owns all copy** internally.
- A **staging environment** is used for pre-launch QA.

## Team
- **Kiron** — Digital Media Manager. Owns the project and all copy.
- **Designer** — refreshing the brand / style guide (in progress).
- **Developer** — existing developer who receives the final handoff.
- **Stakeholders** — approve at defined gates.

## Working style
- **Record every design decision and piece of feedback in this file as we go**, so
  nothing is lost between sessions. Treat this as the running project log.

## Accessibility (non-negotiable)
- **Kiron is red-green colorblind** — never use red/green combinations in any UI.
  Do not rely on color alone to convey meaning; pair color with text, icons, or
  patterns.
- **Kiron is highly familiar with WCAG** — all output must be accessible.

## Repository structure
```
shared/        Brand tokens, fonts, copy, logos used across all versions
  main.css       2026 design system — SINGLE SOURCE OF TRUTH (tokens + components)
  tokens/        tokens.md — documented color/type/spacing/radii values
  fonts/         fonts.md — EB Garamond + Inter (Google Fonts embed)
  copy/          homepage.md — extracted homepage copy (Kiron owns copy)
  logos/         pc_blue_mark.png, pc_white.png
version-a/     Full site version A — seeded from the existing 2026 build:
                 index.html (landing), style-guide.html, mockup.html
version-b/     Full site version B
version-c/     Full site version C
```

## Design system (current)
- **Fonts:** EB Garamond (serif, headings) + Inter (sans, UI/body). See `shared/fonts/fonts.md`.
- **Palette:** neutral grays + brand blue `#00AEEF` + green/teal accents (`--rich-green #008B5C`).
  **No red anywhere** — green is used alone, never paired with red. Safe for Kiron's
  red-green colorblindness. See `shared/tokens/tokens.md`.
- **Type scale:** H1 48 / H2 32 / H3 24 / H4 20 / body 16 px. Spacing 4→96px scale. Pill buttons.
- All versions consume `shared/main.css` as the source of truth; version-specific overrides
  live inside each version folder.

## Design decisions & feedback log
_(Append-only. Date each entry. Nothing gets lost between sessions.)_

- **2026-06-08** — Project initialized. Folder structure and this CLAUDE.md created.
- **2026-06-08** — Imported the existing `2026peoplescompany` build (from `Affiliated
  Website Build`). Design system (`main.css`) → `shared/`; logos → `shared/logos/`;
  tokens/fonts/copy documented under `shared/`; the style-guide + homepage mockup seed
  `version-a/`. Confirmed the palette has **no red** and no red/green pairings. Source
  directory removed after extraction.

## Index page — wireframe exploration
**Goal:** 10–15 mid-fi wireframe concepts for the homepage, reviewed one batch at a time.
Mid-fi = uses the design-system type scale & spacing from `shared/main.css`, but **grayscale,
no brand color** (keeps review focused on layout/hierarchy). Each concept is a self-contained
full homepage (nav → footer). They live in `wireframes/index/`, with `index.html` as a gallery.

**Brief (from Kiron, 2026-06-08):**
- **Break away from the current site.** Biggest complaint: the current homepage is too tall —
  ~8–9 stacked full-width bands = one long vertical scroll, key destinations buried.
- **Make it tighter and easier to get to** — fewer, denser sections; surface services and key
  destinations near the top; combine insights + research; compress the 50-yr history into an
  inline stat row rather than its own screen.
- **Inspiration:** Blackstone.com (authority hero, dense purposeful section rhythm, featured
  carousel packing 3 items into 1 slot, compact stats band, 4-up insights grid) and
  GoldmanSachs.com (editorial/front-page feel, featured-story hero, confident large type).
  Reviewed 2026-06-08; GS homepage couldn't be fetched (JS-heavy) — design language applied
  at a high level, verify specifics directly.
- **Listings out of scope:** any property-search / auction / "View Properties" element is a
  non-functional placeholder, not a real link (`/listings/` exclusion).

**Layout decisions (apply to all concepts):**
- **Content width = 1400px.** Match the current peoplescompany.com (built in Tailwind; its
  `.container` steps up to a 1400px max-width). Set once in `wireframes/index/_wireframe.css`
  (`--container: 1400px` + `.wf-canvas` max-width) so every concept inherits it.
- **Logo in the header** (not a text-only wordmark). Brand asset is the blue "PC" diamond
  **mark** (`shared/logos/pc_blue_mark.png`) — an icon, not a full wordmark — so headers use a
  lockup: mark + "PEOPLES COMPANY" text. Dark footers use `pc_white.png` (white mark).

**Concept log:**
- **Concept 01 — "Compact Authority"** (`wireframes/index/concept-01.html`): editorial split
  hero (message + featured item), single horizontal services strip (7 services in one row),
  inline 4-stat row replacing the history section, merged Insights+Research 4-up grid,
  combined CTA+newsletter band, multi-column footer. ~5 dense bands vs. current ~9.
  Stat values are placeholders (`$XXB` etc.) pending real numbers.
- **Concept 02 — "Left Rail"** (`concept-02.html`): fixed dark vertical sidebar nav (accordion,
  built from `PC_NAV`) down the left; content scrolls on the right. 2-col services list, dark
  pine CTA. Explores side navigation.
- **Concept 03 — "Horizontal Deck"** (`concept-03.html`): full-height panels that scroll
  **sideways** on desktop (scroll-snap) + a **bottom pager dock**. ⚠ Experimental — horizontal
  scroll has real accessibility/discoverability tradeoffs (hidden content, scroll expectations,
  keyboard/AT support). Kept anchor + keyboard fallbacks; flagged for review.
- **Concept 04 — "Bottom Dock"** (`concept-04.html`): minimal top (logo only); primary nav is a
  floating pill **docked at the bottom** with mega-menus that fly **upward** (built from
  `PC_NAV`). Vertical-scroll body. Explores bottom-locked navigation.
- **Concept 05 — "Editorial Bento"** (`concept-05.html`): standard top mega-menu; body is a dense
  **12-column magazine/bento grid** (hero + audience router + stats + services list + insight
  tiles + report + CTA + newsletter) — maximum content above the fold.
- All concepts use real logo, no featured front-page module, 1400px content width, 40px gutters.
  Gallery: `wireframes/index/index.html`.
- **Concept 06 — "Dual Path" (★ president's pick)** (`concept-06.html`): faithful rebuild of the
  Replit mockup — "I own farmland / I invest in farmland" split, real stats band, tabbed Integrated
  Solutions (JS), dark FarmWorth™ product panel, The PC Way 6-step, dual "Ready to sell/invest" CTA,
  dark footer. Native look: **bold sans (Archivo) + blue + minimal nav**. For WCAG, bright cyan
  `#00AEEF` is used only on dark backgrounds; light-background text/buttons use accessible
  `#0077A8` (5.0:1). Does NOT use the green-nav/serif/4-bucket decisions — it's the president's
  direction as its own option.

**Concept feedback applied (2026-06-08, from Kiron):**
- **02 Left Rail** — sidebar now **fixed to the browser's left edge** (was sticky inside the
  centered sheet); content offset right. Concepts 02/03/04 dropped the centered "sheet" framing so
  nav locks to true browser edges; review chrome is now a small fixed corner badge.
- **04 Bottom Dock** — now a **full-width bar fixed to the browser bottom** (was a floating centered
  pill); mega-menus still fly upward.
- **03 Horizontal Deck** — **removed the bottom pager**; a normal vertical wheel/trackpad gesture now
  scrolls the deck **sideways** (more intuitive), scrollbar hidden, slim top progress line instead.
  ⚠ Still experimental: wheel-hijack + horizontal scroll have a11y caveats (reduced-motion,
  trackpad variance, AT). Keyboard arrows + top-nav jumps retained as fallback.

**Concepts 07–17 — "explore widely" batch (2026-06-08, serif + green + 4-bucket nav unless noted):**
- **07 Vertical Reveal** — full-viewport vertical scroll-snap sections + right-edge dot nav.
- **08 Land Atlas** — map-first hero (inline-SVG US map + office pins); national-reach story.
- **09 Split World** — immersive 50/50 split-screen hero (Own vs Invest); hovered half expands.
- **10 Heritage Timeline** — vertical timeline spine (1960s→FarmWorth); stats as milestones.
- **11 Broadsheet** — newspaper/journal typography (masthead, oversized serif, columns, drop cap).
- **12 Market Pulse** — data-dashboard hero (Land Values Index + CSS charts); up/down shown with
  arrows+text, never red/green (colorblind-safe).
- **13 Cinematic** — photography-led; transparent nav → solid on scroll; reduced-motion-safe
  reveals. Uses a custom inline header (keeps 4-bucket IA), not the shared `_nav.js`.
- **14 Obsidian Bento** — dark-mode premium bento grid (counterpoint to light 05).
- **15 Field Guide** — left sticky in-page TOC (auto-highlight) + long-form; TOP nav is still the
  4-bucket mega-menu (TOC ≠ site nav).
- **16 Concierge** — conversational entry ("What brings you here?" + goal chips reveal a tailored
  panel/CTA).
- **17 Seasons** — chaptered lifecycle (Acquire→Grow→Value→Reinvest), alternating light/dark bands.
- 08–15 were built by parallel sub-agents to a shared brief; 07/16/17 built directly (the 16/17
  agent crashed mid-run). All verified to link shared CSS/nav and carry the badge.

**Review chrome standardized (2026-06-08):** every concept now uses the same fixed **`.wf-badge`**
pill ("Concept NN · Name" + "All concepts ↗"), defined once in `_wireframe.css`. The old
full-width `.wf-bar` is retired from concepts (01/05/06 converted). Default corner bottom-right;
04 overrides to top (its nav owns the bottom).

**Concepts 18–20 — final three for an even 20 (2026-06-08, serif + green + 4-bucket nav):**
- **18 Command** — search/command-bar-first homepage (the site as a tool): big query field, suggested
  searches, quick actions. (Search is a non-functional placeholder; listings out of scope.)
- **19 Ledger** — austere, type-only index of capabilities; numbered hairline rows, Swiss/financial
  restraint, no imagery; monospace numerals. The most minimal concept.
- **20 Scrollytelling** — a pinned FarmWorth visual stays fixed while narrative steps reveal on
  scroll (Map → Soil → Comps → Value), via IntersectionObserver; reduced-motion safe.

**Gallery (2026-06-08, current state):** `wireframes/index/index.html` lists **all 20** as a simple
single-column **list** (not tiled): name links + bullet descriptions + an "Open ↗" button; **all
links open in a new tab** (`target="_blank"`). Per Kiron, the **"president's pick" label was removed**
from Concept 06 everywhere it surfaced (gallery + the concept's badge). Concept 06 is still noted
internally here as the president's preferred direction.

**Navigation (applies to ALL concepts) — from Kiron's "Proposed Navigation" mockup, 2026-06-08:**
- **4 top-level mega-menus** with a **green hover/active** state (Kiron chose green over blue):
  - *Real Estate* → For Sale (Farmland, Development Land, Commercial, Residential, Interactive
    Map), Auctions (Upcoming, Prior, Results), Sold Properties. **(All /listings → placeholders.)**
  - *The Company* → The Company (Overview, Sustainability, Our Team, Culture, Careers),
    The Land Expo, Regions, Offices (these three are **separate entities**, not nested),
    Our Clients (Institutional Investors, Financial Advisors, Family Offices/HNW, Landowners,
    Operators), Industry Collaboration (FarmWorth).
  - *What We Do* → the 7 services w/ sub-items (Land Brokerage & Auctions, Land Management,
    Agricultural Appraisal, Capital Markets, Corporate Services, Energy Management, Crop Insurance).
  - *Insights & News* → Insights (FarmWorth, Data & Tools, National Land Values, Industry
    Research, Newsletters, Blog), News (In the News, Press Releases, Industry Recognition, View All).
- **IA lives in ONE file:** `wireframes/index/_nav-data.js` (`window.PC_NAV`) is the single
  source of truth for nav structure + logo paths. Every nav style reads from it:
  `_nav.js` renders the **top mega-menu** (`#site-header` + `_nav.css`); concepts with side/
  bottom nav have small inline renderers that consume the same `PC_NAV`. Change the IA once →
  all concepts update. Menus open on hover **and keyboard focus**.
- **Accent = green** (the brand `--rich-green` family), not blue. Accessibility: bright
  `#008B5C` is borderline for white text (4.3:1), so green **fills use the deeper `#00744D`**
  (white text = 5.8:1, AA), with `#008B5C` as the thin accent line; dropdown link hover uses
  `#00744D`. Recorded because it constrains how the brand greens can carry text.
- **Top masthead** shows phone only — "Cumming, Iowa" removed per Kiron (full address stays in
  the footer).
- **Side gutters:** content/logos are inset **40px** from the canvas edges
  (`.wf-canvas .container` + mega-menu inner). Full-bleed bands (hero image, footer) still reach
  the edge; only their inner content is inset.

**Logo (real, all concepts):**
- Header uses the **full black lockup** `shared/logos/peoples-company-logo.png` (PC diamond +
  "PEOPLES COMPANY" + "Integrated Land Solutions" tagline), pulled from the live site. Dark
  footers use `shared/logos/pc_logo_white.webp` (white full lockup). The bare diamond
  (`pc_blue_mark.png`) is NOT used as the header logo per Kiron.

**Direction updates (2026-06-08):**
- **Color is in play.** Concepts now use the style-guide palette (blue/teal/green/pine + neutrals),
  not grayscale. `_wireframe.css` no longer neutralizes accents (kept: image placeholders, the
  1400px width, review chrome). Still colorblind-safe — palette has no red.
- **No featured headline / front-page item on ANY concept.** Removed the Blackstone/GS-style
  featured panel from Concept 01; hero is now a full-width landscape with overlaid message.

## President's preferred mockup (Replit) — reconstructed 2026-06-08
`https://peoples-company.replit.app/` is a React SPA (can't be rendered by fetch), but its copy
is baked into the JS bundle — **recovered the content/IA by extracting strings** (visual design
NOT recovered, only structure + copy). The president likes this site, so it's a strong reference.

- **Confirmed contact info** (corrects an earlier placeholder): **1108 S. 44th St, Suite 102,
  Cumming, IA 50061**, **Info@PeoplesCompany.com**, phone **855.800.LAND** (now confirmed via
  screenshots). Sister brands referenced: **Acres.com**, **Camo.ag**, **Agware**.
- **Confirmed real stats** (replace earlier `$XXB` placeholders): **$6B+** Farmland Transactions ·
  **170+** Ag Professionals · **20+** Regional Offices · **1.6K+** Land Investment EXPO Attendees.
  Footer tagline: "Integrated Land Solutions. The largest farmland brokerage and management firm
  in the United States."
- **Visual design** (from screenshots, 2026-06-08): **bold sans** display type (Archivo-like, very
  heavy) — NOT serif; **bright cyan/blue accent** (#00AEEF) on black + white; minimal **3-item nav**
  (Brokerage / Capital Markets / About) + a black **855.800.LAND** button; tabbed "Integrated
  Solutions" (left service list, right detail panel); dark "FarmWorth™ Advantage" section with a
  SaaS-style map UI (parcels + DATA LAYERS toggles); "The PC Way" = 6 numbered steps (Discover,
  Propose, Pre-Launch, Launch, Execute, Deliver); split "Ready to sell? / Ready to invest?" CTA;
  dark 4-column footer.
- **Spine = dual audience path:** "I own farmland" (SELL) vs "I invest in farmland" (INVEST).
  The whole homepage forks into two journeys with parallel CTAs ("Ready to sell?" /
  "Ready to invest?" / "Ready to allocate?").
- **Tech-forward hero:** an interactive "Farmland Platform" visualization (aerial farmland,
  "Example Farm — 240 ac, Wapello County, IA | $9,800/ac", Map Binder / Data Layers / Public
  Data, animated scan), tied to proprietary tech **"The FarmWorth"** (soil capability analysis,
  automated appraisal modeling, comparable-sales database).
- **Section flow (inferred):** Hero ("Rooted in Land. Built for Scale." / "Where Agricultural
  Capital Meets Opportunity") → audience router (own vs invest) → SELL side ("Sell Your Land. At
  Maximum Value.", How We Sell Land = Traditional Listing vs Competitive Auction, What We Sell =
  Row Crop / Irrigated & Specialty / Recreational & Rural / Timber & Transition, Our Process) →
  INVEST side (The Investment Case / Why Farmland, Capital Markets Services = Equity Placement,
  Debt & Structured Finance, JV Structuring, Portfolio Advisory, Sale-Leaseback; Who We Work With
  = Family Offices, Institutional Funds, Private Equity, Ag REITs) → Proprietary Technology →
  Track Record / By the Numbers (Total Capital Advised, Transactions Closed, States Transacted,
  40,000+ buyer database, EXPO attendees) → People ("The People Behind the Platform" incl. Steve
  Bruere) → About / Our Story / Our Values / The PC Way → Land Investment EXPO → footer.
- **Nav tension to resolve:** this site's nav is **service-led** (Capital Markets, Land Brokerage
  & Auctions, Land Management, Agricultural Appraisal, Energy Management, Crop Insurance,
  Corporate Services, About Us, Land Investment EXPO) — NOT the 4-bucket "Proposed Navigation"
  (Real Estate / The Company / What We Do / Insights & News) Kiron supplied. Need Kiron's call on
  which IA wins. [[index-page wireframe direction]]

**Open / pending — strategic decisions Kiron needs to make (the president's site conflicts with
earlier direction; surfaced 2026-06-08):**
1. **Typography:** style-guide **EB Garamond serif** headings vs the president's **bold sans**.
2. **Accent color:** the **green** Kiron chose for the nav vs the president's **bright blue/cyan**.
3. **Nav philosophy:** Kiron's **4-bucket mega-menu** (Real Estate / The Company / What We Do /
   Insights & News) vs the president's **minimal 3-item** nav.
4. **Homepage strategy:** content-led (insights/research, like the current site & concepts 01–05)
   vs the president's **dual-audience funnel** (Sell vs Invest) with no homepage listings/blog.
- These are intentionally embodied as *different concepts* so the team can pick — not yet resolved.
- **Kiron's steer (2026-06-08) for concepts 7+:** (1) keep exploring **widely** — distinct directions,
  not just 06 variations; (2) default to the **style guide: EB Garamond serif + green accent**;
  (3) standardize on the **4-bucket mega-menu** nav (shared top header). Concept 06 stays the lone
  exception (president's sans/blue/minimal direction). Strategy fork (#4) still open.
- GoldmanSachs.com unfetchable (JS-heavy) — design language applied at high level only.
