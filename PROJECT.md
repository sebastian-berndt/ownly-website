# Ownly Website

## Overview
A conversion-optimized marketing site for Ownly — a platform that simplifies self-hosting apps like Nextcloud and Vaultwarden. Built with static HTML/CSS, deployed via GitHub Pages.

## Live URL
**https://sebastian-berndt.github.io/ownly-website/**

## Project Structure
```
/ownly-website/
├── index.html          # Main landing page
├── marketplace.html    # App marketplace (filterable catalog)
├── marketplace.js      # Marketplace search & category filtering
├── hosters.html        # Cloud hosting providers comparison
├── about.html          # About Us / team page
├── faq.html            # FAQ with expandable accordions
├── contact.html        # Contact support form
├── privacy.html        # Privacy Policy
├── tos.html            # Terms of Service
├── imprint.html        # Legal imprint (Impressum)
├── footer.html         # Footer HTML partial (reference template)
├── styles.css          # All styling
├── videos/             # Screen recording placeholders
├── .env.example        # Environment variable template
├── PROJECT.md          # This file
├── FINAL_COLOR_SCHEME.md # Color system documentation
└── SUPABASE_SETUP.md   # Supabase waitlist setup guide
```

## Pages

| Page | File | Description |
|------|------|-------------|
| Landing | `index.html` | Hero, features, pricing, CTA |
| Marketplace | `marketplace.html` | Filterable app catalog with category filters |
| Hosters | `hosters.html` | Cloud provider comparison cards with request form |
| About | `about.html` | Mission, values, team section |
| FAQ | `faq.html` | 15 questions in expandable `<details>/<summary>` accordions, grouped by section |
| Contact | `contact.html` | Support contact form with sidebar info (email, community, FAQ link) |
| Privacy | `privacy.html` | Privacy Policy |
| Terms | `tos.html` | Terms of Service |
| Imprint | `imprint.html` | Legal disclosure (Impressum) |

## Design System

### Color Palette (Subtle Blue-Gray)
See `FINAL_COLOR_SCHEME.md` for full documentation.

| Variable | Value | Usage |
|----------|-------|-------|
| `--primary` | `#FF8200` | Primary CTA, buttons, accents |
| `--primary-hover` | `#E67300` | Hover state |
| `--background` | `#0A0E1A` | Main background |
| `--background-elevated` | `#0F141F` | Cards & surfaces |
| `--background-overlay` | `#151A25` | Alternate sections |
| `--background-deep` | `#070A12` | Deep emphasis areas |
| `--text-primary` | `#F5F7FA` | Primary text on dark |
| `--text-secondary` | `#A8B0C4` | Secondary text |
| `--text-tertiary` | `#8B93A7` | Muted text |

### Typography
- Font: Inter (400, 500, 600, 700, 800)
- Sharp corners (border-radius: 6px for cards/buttons)

### Shared Components
- **Navbar** — Sticky, dark, consistent across all pages
- **Footer** — 5-column grid (Brand, Product, Resources, Company, Legal)
- **Form inputs** — `.form-group`, `.form-input` classes reused across hosters and contact pages
- **Section patterns** — `.section-dark`, `.section-dark-alt` for alternating backgrounds

## Current Status

### Done
- [x] Landing page (Hero, Features, Pricing, CTA)
- [x] App Marketplace with search & category filtering
- [x] Cloud Hosters comparison page with provider request form
- [x] About Us page (mission, values, team)
- [x] FAQ page with expandable accordions (5 sections, 15 questions)
- [x] Contact Support page with form
- [x] Legal pages (Privacy Policy, Terms of Service, Imprint)
- [x] Consistent navbar & footer across all pages
- [x] Fully responsive design (1024px, 768px, 480px breakpoints)
- [x] Deployed to GitHub Pages

### To Do
- [ ] Hero visual — Replace placeholder with product screenshot or mockup
- [ ] Screen recordings — Add step-by-step demo videos
- [ ] Social proof — Testimonials, user count, or "Featured in" badges
- [ ] Social links — Wire up footer social icons to real URLs
- [ ] Wire up disabled links (Documentation, Community, Blog)
- [ ] Analytics — Add Plausible or similar
- [ ] Custom domain — Configure DNS and GitHub Pages
- [ ] Contact form backend — Connect to email service or API
- [ ] Imprint — Fill in actual legal details before publishing

## Technical Notes

### Supabase (Waitlist)
See `SUPABASE_SETUP.md` for setup. Used for email signups on the landing page.

### Marketplace Filtering
`marketplace.js` handles search input and category filter buttons. Filters app cards by matching against name, author, and description text.

## Deployment
```bash
git push origin main
# GitHub Pages auto-deploys from main branch
```
