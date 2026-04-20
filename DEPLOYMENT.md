# Cloudflare Workers Deployment Guide

## Table of Contents
1. [Deploy via Cloudflare Dashboard](#deploy-via-cloudflare-dashboard)
2. [IP Restriction - Middleware](#ip-restriction---middleware)
3. [IP Restriction - Cloudflare Access](#ip-restriction---cloudflare-access)
4. [Going Public](#going-public)

## Deploy via Cloudflare Dashboard

### Via Cloudflare Workers & Pages
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Create a Worker**
3. Select **Connect to Git**
4. Select this repo: `futureshocked/bomexplorer-marketing`
5. Configure:
   - **Project name:** `bomexplorer-marketing`
   - **Build command:** `npm run build`
   - **Deploy command:** `npm run build && npx wrangler deploy`
   - **Clear** the "Non-production branch deploy command" field
   - **Path:** `/`
6. Click **Deploy**

### Via Wrangler CLI (local)
```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npx wrangler pages deploy dist --project-name=bomexplorer-marketing
```

## IP Restriction - Middleware (Always Free)

The `src/middleware.ts` file restricts access to specific IPs.

### Setup:
1. **Find your IP:** Visit https://whatismyipaddress.com/
2. **Edit `src/middleware.ts`:**
   ```ts
   const ALLOWED_IPS = new Set([
     "YOUR_IP_HERE",  // Replace with your actual IP
   ]);
   ```
3. **Commit and push** - auto-deploys to Cloudflare Pages

## IP Restriction - Cloudflare Access (Recommended)

More robust: supports email, SSO, multiple IPs.

### Setup:
1. **Subscribe to Cloudflare Zero Trust** (Free tier supports up to 50 users)
2. **Navigate to Zero Trust Dashboard**
3. **Create an Access Policy:**
   - Go to **Access** → **Applications**
   - Click **Add an application**
   - Select **SaaS** or **Self-hosted** (depending on your setup)
   - Add your Cloudflare Pages domain (e.g., `bomexplorer.pages.dev`)
   - Create a policy: **Allow** by **IP** → Add your IP(s)

### More detailed steps:
1. Go to [Zero Trust Dashboard](https://one.dash.cloudflare.com/)
2. Click **Access** → **Applications** → **Add an Application**
3. Choose **Add your own app**
4. **Domain:** `bomexplorer.pages.dev` (or your custom domain)
5. **Policy:** Create a rule that only allows specific IPs
6. **Save** - now only those IPs can access the site

## Going Public

### To remove middleware restriction:
1. Delete `src/middleware.ts`
2. Commit and push

### To remove Cloudflare Access:
1. Go to Zero Trust Dashboard
2. Delete the Access policy for this application
3. Done - now public

---

## Notes
- The middleware approach works on Cloudflare Pages edge workers
- Cloudflare Access requires Zero Trust account (free tier available)
- Both can be removed independently when ready to go public