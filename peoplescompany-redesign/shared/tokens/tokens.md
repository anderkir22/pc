# Design Tokens — PeoplesCompany.com 2026

Canonical values live in [`shared/main.css`](../main.css) (`:root`). This file documents
them for reference. **If a value changes, change it in `main.css` first.**

## Colors

### Primary (neutrals + blue)
| Token | Hex | Notes |
|-------|-----|-------|
| `--black` | `#0A0F1A` | Buttons, strongest text |
| `--gray-900` | `#111827` | Default text |
| `--gray-600` | `#4B5563` | Muted text / body |
| `--gray-500` | `#6B7280` | Subtle text, eyebrows |
| `--gray-200` | `#E5E7EB` | Borders |
| `--gray-100` | `#F3F4F6` | Alt surface |
| `--white` | `#FFFFFF` | Surface |
| `--blue` | `#00AEEF` | Brand blue (logo mark) |

### Accent (greens / teal)
| Token | Hex |
|-------|-----|
| `--rich-green` | `#008B5C` (the accent: links hover, `.btn-accent`) |
| `--teal` | `#005F5B` |
| `--deep-teal` | `#044D48` |
| `--pine` | `#103B38` |

> **Accessibility note:** the palette contains **no red**. The only accent is green, used
> on its own — there are no red/green pairings anywhere, so it is safe against the
> project's red-green colorblindness constraint. Never introduce a red/green combination.

### Semantic roles
`--color-text` = gray-900 · `--color-text-muted` = gray-600 · `--color-text-subtle` = gray-500 ·
`--color-border` = gray-200 · `--color-surface` = white · `--color-surface-alt` = gray-100 ·
`--color-accent` = rich-green

## Type scale
H1 48px · H2 32px · H3 24px · H4 20px · body-lg 18px · body 16px · body-sm 12px · label 12px.
Headings: EB Garamond Medium (500). At ≤880px, H1→38px, H2→28px.

## Spacing scale
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px (`--space-1` … `--space-9`).

## Radii
sm 8px · md 12px · lg 16px · pill 999px.

## Layout
`--container`: 1200px max width.
