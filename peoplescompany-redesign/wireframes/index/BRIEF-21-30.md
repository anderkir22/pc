# Concepts 21–30 — build brief (synthesized from Set 1/2/3 feedback, 2026-06-09)

These 10 are a **fresh, higher-fidelity batch** that bakes in everything the team liked across all
three feedback sets. They are NOT variations of a single concept — each is a **distinct layout
direction** — but they all share the same must-have elements, color, photography, and accessibility
rules below. Concepts 01–20 are the archive that informed these.

## File conventions (match the existing concepts exactly)
- Self-contained `concept-NN.html` in `wireframes/index/`.
- `<head>` links, in order: Google Fonts (EB Garamond + Inter) → `../../shared/main.css?v=20260601`
  → `./wireframe.css?v=2` → `./nav.css?v=2`. Then a `<style>` block for concept-specific CSS.
- Body starts with the review badge:
  `<div class="wf-badge"><b>Concept NN · Name</b><a href="./index.html">All concepts ↗</a></div>`
- Wrap everything in `<div class="wf-canvas">` (full-bleed override applied in the style block:
  `.wf-canvas{max-width:none;margin:0;border:0;box-shadow:none;}`).
- Shared top nav: `<div id="site-header"></div>` as the first child, then before `</body>`:
  `<script src="./nav-data.js?v=1"></script><script src="./nav.js?v=2"></script>`.
- Inner content inset 40px via `.container`. Full-bleed bands (hero, footer) reach the edge; their
  inner `.container` is inset.

## Color (NEW — Kiron 2026-06-09)
- **Brand blue `#00AEEF` is primary; dark green `#005F5B` is the single restrained accent.** No
  other greens. No red anywhere; never rely on color alone (pair with text/icon/shape).
- `#00AEEF` is bright — only safe for white text on dark/navy backgrounds. For text/buttons on
  light backgrounds use a darker blue (e.g. `#0077A8`, 5:1) or the green `#005F5B` (~7:1).
- Dark sections: use deep navy/ink or the green scale (`--deep-teal #044D48`, `--pine #103B38`).

## Real photography (NEW — Kiron asked for pictures)
- Replace gray `.wf-img` placeholders with **real photos** via Unsplash CDN hotlinks
  (farmland / aerial fields / people / offices — NEVER property-listing imagery).
- ALWAYS add a graceful fallback so a 404 degrades to an intentional gradient, e.g.:
  `<img src="https://images.unsplash.com/PHOTO?auto=format&fit=crop&w=1200&q=70" alt="…"
   onerror="this.style.display='none';this.parentElement.classList.add('img-fallback')">`
  with `.img-fallback{background:linear-gradient(135deg,#0D2B22,#103B38);}`.
- Document at top of each file that photos are placeholders for PC's own photography.
- Curated farmland Unsplash photo IDs (use a mix; all `images.unsplash.com/photo-…`):
  `1500382017468-9049fed747ef`, `1574323347407-f5e1ad6d020b`, `1625246333195-78d9c38ad449`,
  `1530267981375-f0de937f5f13`, `1592982537447-7440770cbfc9`, `1560493676-04071c5f467b`,
  `1464226184884-fa280b87c399`, `1757170889478-e6768a4e36c1` (aerial field strips),
  `1759174469221-71382a2b5bce` (golden wheat field).
  - ⚠ DO NOT USE `1416879595882-3373a0480b5b` — it's a close-up of potting soil + a trowel
    (reads as *gardening*, not farmland). Removed from all concepts 2026-06-10 per Kiron.

## Must-have elements (every concept includes these)
1. **Masthead utility row** above the nav: phone `855.800.LAND` + **Land Investment Expo** +
   **Client Login** links. (Liked in Set1 + Set3.)
2. **4-path audience router** — Landowner / Investor / Farmer-Operator / Family Office. Loved by all
   three sets. Make it prominent.
3. **"What We Do" as a 2×4 card layout** (7 services + an "all services" CTA card). Set1 + Set3.
4. **Primary CTAs:** "Talk to an Advisor" and "Find an Office". Plus **"Request a Demo"** on the
   FarmWorth block (Set3: "definitely do").
5. **FarmWorth™ section** — the proprietary tech/platform block.
6. **Stats band:** `$6B+` Transactions · `170+` Ag Professionals · `20+` Regional Offices ·
   `1.6K+` EXPO Attendees.
7. **Get In Touch** contact section.
8. **Scroll-reveal:** content floats in on first scroll (IntersectionObserver). MUST honor
   `prefers-reduced-motion: reduce` (no transform/opacity animation; show immediately).
9. **Shared footer** (use the existing footer markup) with three fixes: **bigger logo**, **NO
   light-green text** (use a light neutral like `#C7CBD1` for links; the green accent only on
   non-text marks), and **dual-path CTAs** ("Ready to sell? / Ready to invest?") in or above it.
10. **Hero rules:** clean, **not busy**, **no map in the hero**. Hero may be a photo OR a solid/
    gradient color (Set3 #13). Don't lead with a "Who We Are" section directly under the hero.

## Confirmed copy / facts
- Address: 1108 S. 44th St, Suite 102, Cumming, IA 50061 · Info@PeoplesCompany.com · 855.800.LAND
- Stats above. Sister brands: Acres.com, Camo.ag, Agware.
- Headline candidates Erin liked (#10): **"Seven disciplines. One integrated platform."** and
  **"Clarity for every land decision."**
- 7 services: Land Brokerage & Auctions · Land Management · Agricultural Appraisal · Capital Markets ·
  Energy Management · Crop Insurance · Corporate Services.

## Accessibility (non-negotiable)
- WCAG AA contrast on all text. No red; no red/green pairing. Never color-only meaning.
- Keyboard focus states on all interactive elements; mega-menu already handles hover+focus.
- Reduced-motion path for all scroll/animation.

## The 10 directions
- **21 Modern Editorial** — light, premium flagship; photo hero with overlaid headline; compact
  section rhythm (Blackstone authority). The safe synthesis of #8 + #13. (Built first as template.)
- **22 Dual Path Forward** — refined #6: blue, Sell/Invest dual-path spine, sticky nav, stacked
  Integrated Solutions, dark FarmWorth panel.
- **23 Gradient Calm** — hero is a blue→green gradient (NO hero photo, per #13 group); lots of white
  (per #1); photos appear lower in content.
- **24 Reveal Journey** — scroll-reveal-forward; sections float in; tightened right-edge dot nav
  (#7) with far less negative space; different-size Insights/Research tiles (#13).
- **25 Pathfinder** — the 4-path router IS the hero (intent-first, like #1 "I'm a:" but premium and
  uncluttered).
- **26 Market Pulse Live** — the "show Steve" dynamic-data option: a Land Values Index hero
  (up/down via arrows+text, never red/green), Who We Serve, Request a Demo prominent.
- **27 Bento Light** — light premium bento; the modular, "easy to build/edit" system Steve liked
  from #14, but LIGHT not dark.
- **28 Land Atlas Refined** — #8 done right: keep the map but NOT in a busy hero (map sits lower);
  4 paths + What We Do lead; footer fixed (no light-green text).
- **29 Split Screen** — the #9 split concept (for Steve): Own vs Invest 50/50, refined and premium.
- **30 Photographic Authority** — big confident photography + EB Garamond serif; editorial/GS
  front-page authority; compact, dense purposeful rhythm.
