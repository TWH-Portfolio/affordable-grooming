# Affordable Grooming Demo - Deployment Notes

## Pre-deploy checklist
- [ ] Replace `G-XXXXXXXXXX` in `index.html` with real GA4 Measurement ID
- [ ] Replace `VERIFICATION_TOKEN_HERE` in `index.html` with Google Search Console token
- [ ] Replace `__CUSTOM_DOMAIN__` in `index.html`, `public/sitemap.xml`, `public/robots.txt`
- [ ] Uncomment GA4 script block in `index.html`
- [ ] Verify all Unsplash image URLs still return 200
- [ ] Wire contact form to Cloudflare Worker + Email binding

## Deploy command
```bash
cd "Demos/Business-Commerce/Affordable Grooming/Demo 1"
npm run build && npx wrangler deploy
```

## Tech stack
- React 18 + Vite 5 + TypeScript + Tailwind CSS 3
- React Router 6 (SPA)
- Cloudflare Workers with Assets

## Pages
1. Home (/)
2. Services (/services)
3. About (/about)
4. Gallery (/gallery)
5. Contact (/contact)
6. Legal (/legal) - not counted toward tier page budget
7. 404 page

## Style
- #5 Warm Professional
- Palette: cream-navy
- Font: Inter 400/500/600/700
