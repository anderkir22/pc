# Fonts — PeoplesCompany.com 2026

Two typefaces, currently loaded from **Google Fonts** (no local font files yet).

| Role | Family | Weights in use | CSS variable |
|------|--------|----------------|--------------|
| Display / headings | **EB Garamond** (serif) | 400, 500, 600 + italics 400/500 | `--font-serif` |
| UI / body | **Inter** (sans) | 400, 500, 600 | `--font-sans` |

Fallback stacks (from `main.css`):
- `--font-serif`: `"EB Garamond", Georgia, "Times New Roman", serif`
- `--font-sans`: `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`

## Embed (used in every page `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

> If self-hosting is preferred for the production handoff (privacy / performance), drop the
> font files into this folder and replace the Google Fonts embed with `@font-face` rules.
