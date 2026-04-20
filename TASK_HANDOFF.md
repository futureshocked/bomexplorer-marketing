# TASK_HANDOFF.md - BOMexplorer Marketing Site

## Current State
**STATUS**: Ready for Cloudflare Pages deployment. All code pushed.

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
- All code pushed to GitHub (master branch, commit fb97de4)
- Deploy via Cloudflare Pages (see DEPLOYMENT.md)
- IP restriction via Cloudflare Zero Trust Access (free tier)

## Next Goals
- [ ] Deploy to Cloudflare Pages
- [ ] Configure Zero Trust Access for IP restriction