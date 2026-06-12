# ownly-website

Static HTML/CSS marketing website for Ownly. Conversion-optimised landing pages, product overview, pricing, and legal pages. Deployed via GitHub Pages.

See [../README.md](../README.md) for the full platform context.

## Live URL

**https://sebastian-berndt.github.io/ownly-website/**

## Structure

```
ownly-website/
├── index.html           # Landing page — hero, features, pricing, CTA
├── marketplace.html     # Filterable app catalog
├── marketplace.js       # Search and category filtering logic
├── pricing.html         # Pricing plans and comparison
├── hosters.html         # Hosting Provider comparison and request form
├── about.html           # Mission, values, team
├── faq.html             # FAQ — expandable accordions, 5 sections
├── contact.html         # Support contact form
├── privacy.html         # Privacy Policy
├── tos.html             # Terms of Service
├── imprint.html         # Legal imprint (Impressum)
├── footer.html          # Footer partial (reference template)
├── styles.css           # All styling
├── videos/              # Screen recording placeholders
└── FINAL_COLOR_SCHEME.md # Color system documentation
```

## Design System

- **Font:** Inter (400–800)
- **Border radius:** 6px (sharp corners)
- **Primary accent:** `#FF8200`
- **Background:** `#0A0E1A` (dark)

See `FINAL_COLOR_SCHEME.md` for the full color palette.

## Development

No build step — edit HTML/CSS directly and open in a browser.

```bash
# Open locally
open index.html
```

Shared components (navbar, footer) are duplicated across pages — update all pages when changing shared markup.

## Deployment

```bash
git push origin main
# GitHub Pages auto-deploys from main branch
```

## Outstanding TODOs

- Replace hero placeholder with product screenshot or demo video
- Wire up footer social icon links
- Connect contact form to an email service
- Add analytics (Plausible or similar)
- Configure custom domain
- Fill in actual legal details in `imprint.html` before public launch
- Add social proof (testimonials, user count)
