# TASK_HANDOFF.md - BOMexplorer Marketing Site

## Current State
**STATUS**: Deployed and live at https://bomexplorer-marketing.pages.dev/

## Project Overview
- **Name**: BOMexplorer Marketing Website
- **Type**: Astro 6 + Tailwind 4 static marketing site
- **GitHub**: git@github.com:futureshocked/bomexplorer-marketing.git
- **Purpose**: Marketing site for BOMexplorer - a KiCad BOM tool (sourcing, pricing, stock check)

## Technical Stack
- **Framework**: Astro 6.1.6
- **Styling**: Tailwind CSS 4.2.2 (custom dark theme)
- **Fonts**: Space Mono (headings), IBM Plex Sans (body)
- **Theme**: Dark colors (#0d1117 bg, #3b82f6 primary, #00d4aa secondary)
- **Node**: >=22.12.0

## Site Structure
- `/` - Homepage (hero, problem, how-it-works, features, testimonials, CTA)
- `/features` - Feature details page
- `/pricing` - Pricing tiers (Free, Pro, Team) + FAQ
- `/about` - About page
- `/contact` - Contact/waitlist page
- `/faq` - FAQ page

## Components
- `Nav.astro` - Navigation bar
- `Footer.astro` - Footer
- `FeatureCard.astro` - Feature card component
- `PricingCard.astro` - Pricing card component
- `FaqItem.astro` - FAQ accordion item

## Key Design Notes
- Dark theme with CSS custom properties in `global.css`
- Uses Tailwind arbitrary CSS vars (`var(--color-primary)`)
- Grid background pattern (`.bg-grid`)
- Glow effects via CSS shadows (`--shadow-glow-blue`, `--shadow-glow-teal`)

## Deployment
- Pure static site - no workers or runtime dependencies
- Deployed to Cloudflare Pages (latest commit: e12eaf3)
- Live URL: https://bomexplorer-marketing.pages.dev/
- Auto-deploys on push to master branch

## Completed Tasks
- [x] Build marketing site with Astro + Tailwind
- [x] Create all pages (home, features, pricing, about, contact, faq, why)
- [x] Create reusable components (Nav, Footer, FeatureCard, PricingCard, FaqItem)
- [x] Deploy to Cloudflare Pages
- [x] Remove broken submodule (nebulous-nebula)

## Next Goals
- [ ] Configure Cloudflare Zero Trust Access for IP restriction (manual - see DEPLOYMENT.md)
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)