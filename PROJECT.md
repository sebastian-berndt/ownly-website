# Ownly Website

## Overview
A conversion-optimized landing page for Ownly — a platform that simplifies self-hosting apps like Nextcloud and Bitwarden. Built following proven landing page principles to maximize email signups.

## Live URL
**https://sebastian-berndt.github.io/ownly-website/**

## Project Structure
```
/ownly-website/
├── index.html          # Main landing page
├── thanks.html         # Post-signup confirmation page
├── styles.css          # All styling
├── videos/             # Screen recording placeholders (step-1/2/3.webm)
├── app.js              # Legacy (unused, superseded by inline JS)
├── PROJECT.md          # This file
└── SUPABASE_SETUP.md   # Supabase setup guide
```

## Version History
- **v2.16** - FAQ copy improvements (Q1, Q5 rewritten); remove all em dashes from copy
- **v2.15** - Email placeholder changed to "Your email"; section background alternation (How It Works → white); remove false-affordance hover on steps; logos/ folder for real app SVGs
- **v2.14** - Problem/Solution section: new headline, side-by-side "Big Tech Way vs. Ownly Way" comparison layout
- **v2.13** - Ticker redesign: larger icons (32px), remove pill bubbles, dot separators
- **v2.12** - FAQ accordion section (7 questions, native details/summary, no JS)
- **v2.11** - Fix ticker scroll animation (remove wrapper divs, fix overflow clipping)
- **v2.10** - App logo ticker strip between hero and problem section
- **v2.9** - Legal pages (Privacy Policy, Terms of Service, Imprint) with footer links wired up
- **v2.8** - Responsive multi-column footer with social links and navigation
- **v2.7** - Updated How It Works copy (Rent → Marketplace → Install)
- **v2.6** - Video placeholders for How It Works steps
- **v2.5** - Responsive aspect-ratio video containers
- **v2.2** - High-contrast section-based redesign
- **v2.1** - Notion-inspired redesign
- **v2.0** - Complete redesign following conversion optimization principles
- **v1.13** - Production-ready: debug messages removed, strict email validation

---

## Current Status

### Done ✅
- [x] Conversion-optimized landing page (Hero → Comparison → How It Works → FAQ → CTA)
- [x] High-contrast section-based design with purple gradient; alternating section backgrounds
- [x] Supabase waitlist backend (insert emails, RLS configured)
- [x] Dual waitlist forms (hero + footer CTA) with "Your email" placeholder
- [x] Strict email validation with invalid character feedback
- [x] Duplicate email detection with user-friendly message
- [x] Redirect to thanks.html on successful signup
- [x] Mobile-first responsive layout
- [x] App logo ticker strip (inline SVG placeholders; `logos/` folder ready for real SVGs)
- [x] Side-by-side "Big Tech Way vs. Ownly Way" comparison section
- [x] How It Works: 3 steps with video placeholder containers
- [x] FAQ accordion (7 questions, native details/summary, no JS)
- [x] Multi-column footer with social icons and navigation links
- [x] Legal pages: Privacy Policy, Terms of Service, Imprint
- [x] Deployed to GitHub Pages

### To Do 🔲

#### Content
- [ ] **Hero visual** — Replace placeholder with actual product screenshot or mockup
- [ ] **Screen recordings** — Add `videos/step-1.webm`, `step-2.webm`, `step-3.webm`
- [ ] **Social proof** — Add testimonials, user count, or "Featured in" badges
- [ ] **Social links** — Wire up footer social icons (X, Discord, GitHub) to real URLs
- [ ] **Footer links** — Wire up Product, Resources, Legal links to real pages

#### Pages to create
- [x] **Privacy Policy** page (`privacy.html`)
- [x] **Terms of Service** page (`tos.html`)
- [x] **Imprint** page (`imprint.html`) — fill in legal details before publishing
- [ ] **FAQ** page (optional)

#### Technical
- [ ] **Analytics** — Add Plausible or Google Analytics
- [ ] **Custom domain** — Configure DNS and GitHub Pages custom domain
- [ ] **Email confirmation flow** — Send confirmation email after signup
- [ ] **Admin dashboard** — View and export waitlist entries from Supabase

#### Growth / Optimization
- [ ] **A/B test** headline variations
- [ ] **Exit-intent popup** for abandoning visitors
- [ ] **Referral system** — "Share and get early access"

---

## Page Structure

### Hero (Attention)
- Headline: "Stop Renting Your Digital Life. Own It."
- Sub-headline: Explains server + marketplace + one-click install value prop
- CTA: "Request Access"
- Placeholder for hero visual

### App Ticker
- Scrolling strip of app logos: Nextcloud, Bitwarden, Ghost, Immich, Jellyfin, Vaultwarden, Gitea, Uptime Kuma, Paperless-ngx, Home Assistant, Plex, Syncthing
- Currently inline SVG placeholders; `logos/` folder ready for real SVGs from simpleicons.org

### Problem / Solution — Comparison (Agitate & Desire)
- Headline: "Renting your digital life is expensive, risky, and a privacy nightmare."
- Side-by-side two-column layout: **The Big Tech Way** (red) vs. **The Ownly Way** (green)
- Three pain/gain pairs: privacy, account control, subscription cost

### How It Works (Simplicity)
1. **Rent a Server** — Pick a hoster and plan, running in seconds
2. **Browse the Marketplace** — Curated self-hostable apps, buy once or subscribe
3. **Install in One Click** — Install on your server with a button click
- Each step has a video placeholder container (40% width, 16:10 aspect ratio)

### FAQ (Objection handling)
- 7 questions covering: technical knowledge, server ownership, available apps, VPS comparison, data security, lock-in, pricing

### Final CTA (Action)
- Headline: "Ready to Own Your Data?"
- Repeats "Request Access" form
- "No spam. Unsubscribe anytime."

### Footer
- Brand: Ownly logo, tagline, social icons (X, Discord, GitHub)
- Product: Features, App Marketplace, Pricing, Changelog
- Resources: Documentation, FAQ, Community Forum, Support
- Legal: Privacy Policy, Terms of Service, Imprint
- Bottom bar: copyright + "Made for digital sovereignty"

---

## Technical Implementation

### Supabase
- **Project URL:** `https://ldabzqoxgogwxixicpml.supabase.co`
- **Key type:** `sb_publishable_*` (new anon key format)
- **Table:** `waitlist` (id UUID, email TEXT UNIQUE, created_at TIMESTAMPTZ)
- **RLS:** Enabled — INSERT and SELECT policies for `public` role

### Email Validation
- Regex: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
- Shows specific invalid characters on failure
- Handles duplicate email (PostgreSQL error `23505`)

### Videos
- Expected at `videos/step-1.webm`, `step-2.webm`, `step-3.webm`
- `autoplay loop muted playsinline` for silent background-style playback
- Fallback "Video coming soon" placeholder shown until files are added
- Responsive: 40% width with `aspect-ratio: 16/10` on desktop, 100% on mobile

### Color Palette
| Variable | Color | Usage |
|---|---|---|
| `--color-bg-white` | #FFFFFF | Card backgrounds |
| `--color-bg-light` | #F8F9FA | Alternating sections |
| `--color-bg-dark` | #1A1D23 | Dark section, footer |
| `--color-accent` | #2563EB | Step numbers, hover |
| `--color-error` | #DC2626 | Error messages |
| Hero/CTA gradient | `135deg, #667EEA → #764BA2` | Hero and final CTA |

---

## Deployment
```bash
git push origin main
# GitHub Pages auto-deploys from main branch
```
