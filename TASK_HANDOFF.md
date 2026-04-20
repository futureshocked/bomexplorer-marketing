# TASK_HANDOFF.md - BOMexplorer Marketing Site

## Current State
**STATUS**: Deployed and live at https://bomexplorer.app (also https://bomexplorer-marketing.pages.dev/)

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
- `/contact` - Contact/waitlist page (Formspree form)
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
- **Platform**: Cloudflare Pages
- **Live URLs**: 
  - https://bomexplorer.app (custom domain)
  - https://bomexplorer-marketing.pages.dev (default)
- **Auto-deploy**: Any push to `master` branch triggers automatic deployment
- **Manual deploy**: Cloudflare dashboard → Workers & Pages → Pages → bomexplorer-marketing → Deployments → "Deploy site"
- **Build settings**: `npm run build` → output `dist`

## Integrations
- **Contact form**: Formspree (ID: mgorzzwj) → emails to hello@bomexplorer.app
- **Custom domain**: bomexplorer.app configured in Cloudflare Pages

## Completed Tasks
- [x] Build marketing site with Astro + Tailwind
- [x] Create all pages (home, features, pricing, about, contact, faq, why)
- [x] Create reusable components (Nav, Footer, FeatureCard, PricingCard, FaqItem)
- [x] Deploy to Cloudflare Pages
- [x] Remove broken submodule (nebulous-nebula)
- [x] Set up custom domain (bomexplorer.app)
- [x] Integrate Formspree for contact form

## Next Goals
- [ ] Configure Cloudflare Zero Trust Access for IP restriction (optional)
- [ ] Add analytics (optional)
- [ ] Set up email forwarding for hello@bomexplorer.app (if not already done)

## Future: Replace Formspree with n8n + Baserow
**Goal:** Remove external Formspree dependency, use self-hosted n8n + Baserow for form submissions.

**Steps:**
1. **Baserow:** Create table `contact_submissions` with columns: `name`, `email`, `subject`, `message`, `timestamp`
2. **n8n:** Create workflow: Webhook trigger → Baserow (create row) → Email (notification to hello@bomexplorer.app)
3. **Form:** Update `src/pages/contact.astro` form action to n8n webhook URL
4. **Test:** Submit form → verify data in Baserow + email received

**Benefits:** Full data ownership, no external dependencies, Baserow as CRM, n8n for automation (Slack alerts, auto-replies, etc.)
