# Business Model Website

This repository contains a static website version of the uploaded business-model document for a **remote monitoring and emergency intervention system for automated vehicles**.

## Project structure

- `index.html` – overview page with executive summary and value proposition
- `business-case.html` – market analysis, segmentation, TAM/SAM/SOM, revenue assumptions
- `product-operations.html` – product overview, architecture, features, development basis and cost model
- `strategy.html` – business model canvas, risk analysis, SWOT and strategic summary
- `404.html` – custom not found page
- `asset/css/styles.css` – all site styling
- `asset/js/main.js` – mobile navigation and small progressive enhancement helpers
- `asset/icons/favicon.svg` – site icon
- `asset/images/` – SVG visual assets for hero, architecture and social sharing
- `robots.txt` and `sitemap.xml` – crawl guidance
- `vercel.json` – Vercel static-site configuration with clean URLs and headers

## Before publishing

Replace these placeholders:

- `YOUR-DOMAIN-HERE`
- `YOUR-NAME-HERE`
- Any missing figure placeholders with original charts or screenshots if available

## Local preview

Because this is a static site, you can preview it with any simple HTTP server.

### Python 3

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Git workflow

```bash
git init -b main
git add .
git commit -m "Initial static website build"
git remote add origin https://github.com/YOUR-USERNAME/business-model-website.git
git push -u origin main
```

## Vercel settings

- Framework Preset: `Other`
- Root Directory: repository root
- Build Command: leave empty
- Output Directory: leave empty
- Install Command: leave empty

The included `vercel.json` file enables clean URLs and basic response headers.

## Notes on source fidelity

The page content is based on the uploaded Word document. Some chart figures referenced in the source text were not available as separate image assets in the accessible export, so the site includes clearly marked placeholders where those should be inserted later.
