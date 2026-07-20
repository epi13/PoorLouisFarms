# Poor Louis Farms — Explore & Learn

The editorial companion to the [Poor Louis Farms Square store](https://poor-louis-farms.square.site/). The site helps visitors explore the family farm, catalog, Alaskan botanicals, making processes, seasons, and journal while Square remains the source of truth for prices, inventory, options, and checkout.

## Technology

- Astro 7 and TypeScript, rendered as a static site
- Validated Astro content collections backed by JSON and Markdown
- Astro's local image pipeline for responsive AVIF and WebP output
- Small progressive-enhancement scripts for navigation, filters, and the illustrated farm map
- Playwright, axe, and Lighthouse CI for browser QA

Node 22.12 or newer is required.

```sh
npm ci
npm run dev
npm run build
npm test
```

## Editing content

Content lives in `src/content-data/`; presentation lives in `src/pages/` and `src/components/`. Validation rules are centralized in `src/content.config.ts`.

- Add a product to `src/content-data/products.json`, add its local image under `src/assets/products/`, then register that image in `src/data/media.ts`. Keep the Square product URL current, but never copy inventory or price into this site.
- Add an ingredient to `src/content-data/ingredients.json`. Use the `sources` field for authoritative references, distinguish Poor Louis Farms usage from general botanical education, and avoid health claims.
- Add a journal entry as Markdown in `src/content-data/journal/`; required frontmatter and relationship fields are validated during the build.
- Edit process, season, FAQ, or farm-map content in the corresponding JSON file. Map coordinates are illustrative percentages, not surveyed locations.
- Update navigation, the Square URL, email, social links, and SEO defaults in `src/data/site.ts`.
- Record every new image's origin, source, rights, alt-text plan, dimensions, and generation prompt where relevant in `MEDIA_MANIFEST.md`.

Run `npm run build` after any content edit. A schema failure stops the build and points to the invalid entry.

## Catalog refresh

`CONTENT_AUDIT.md` records the public Square catalog snapshot and research boundaries. When the store changes:

1. Review only the public storefront and product pages.
2. Download Poor Louis Farms-owned imagery locally; do not hotlink it.
3. Update product records and relationships without presenting prices or availability as static facts.
4. Refresh `CONTENT_AUDIT.md` and `MEDIA_MANIFEST.md` with the review date and source pages.
5. Rebuild and run the browser tests.

## Deployment

`.github/workflows/pages.yml` checks every pull request and deploys `main` to GitHub Pages. Astro automatically uses `/PoorLouisFarms` as the Pages base path in GitHub Actions while local development continues at `/`.

In repository settings, set **Pages → Source** to **GitHub Actions**. To add a custom domain later, configure it in GitHub Pages, add the DNS records GitHub specifies, then update `site` in `astro.config.mjs`, `canonicalOrigin` in `src/data/site.ts`, `public/robots.txt`, and the web manifest. Do not add a `CNAME` file until the domain and DNS are confirmed.

## Research and quality records

- `CONTENT_AUDIT.md` — verified catalog, contact details, sources, and omissions
- `SITE_PLAN.md` — information architecture and content strategy
- `DESIGN_SYSTEM.md` — visual and interaction specification
- `MEDIA_MANIFEST.md` — image provenance, alt-text plans, licensing, and generated prompts
- `QA_REPORT.md` — browser, accessibility, links, Lighthouse, and known limitations
