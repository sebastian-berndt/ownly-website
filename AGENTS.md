# ownly-website -- Agent Guide

**Platform architecture:** [docs/arc42/](../docs/arc42/README.md)
**Development workflow:** [ownly-specs/WORKFLOW.md](../ownly-specs/WORKFLOW.md)
**Commit convention & cross-repo order:** [AGENTS.md](../AGENTS.md)

## Quick Start

No build step -- open directly in a browser:

```bash
open index.html
```

## Key Rules

- **Shared components (navbar, footer) are duplicated across pages** -- update all affected pages when changing shared markup
- **No external CSS/JS frameworks** -- plain HTML and CSS only, keep it that way
- **Use role terminology consistently** -- Customer, Hosting Provider, Publisher, Service Provider (see platform README)
- **Legal pages (privacy, tos, imprint) require review before content changes**
- **Deployment is automatic** -- `git push origin main` triggers GitHub Pages
- **Design system:** primary accent `#FF8200`, background `#0A0E1A`, font Inter, border radius 6px -- see `FINAL_COLOR_SCHEME.md`
