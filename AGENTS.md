# ownly-website — Agent Guide

## Context
- Platform overview: [../README.md](../README.md)
- This repo: [README.md](README.md)

## Quick Start

No build step — open directly in a browser:

```bash
open index.html
```

## Structure

```
index.html        — landing page
marketplace.html  — filterable app catalog
marketplace.js    — search and category filter logic
pricing.html      — pricing plans
hosters.html      — Hosting Provider comparison
about.html        — mission, values, team
faq.html          — FAQ accordions
contact.html      — support contact form
privacy.html      — Privacy Policy
tos.html          — Terms of Service
imprint.html      — legal imprint
styles.css        — all styling (single file)
```

## Key Rules

- **Shared components (navbar, footer) are duplicated across pages** — update all affected pages when changing shared markup
- **No external CSS/JS frameworks** — plain HTML and CSS only, keep it that way
- **Use role terminology consistently** — Customer, Hosting Provider, Publisher, Service Provider (see platform README)
- **Legal pages (privacy, tos, imprint) require review before content changes**
- **Deployment is automatic** — `git push origin main` triggers GitHub Pages

## Design System

- Primary accent: `#FF8200`
- Background: `#0A0E1A`
- Font: Inter
- Border radius: 6px

See `FINAL_COLOR_SCHEME.md` for the full palette.
