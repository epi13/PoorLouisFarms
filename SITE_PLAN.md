# Poor Louis Farms site plan

## Purpose

Build a static-first “Explore & Learn” companion to the Square shop. The site earns trust through specific product, ingredient, process, family, and seasonal context; Square remains the only source for live commerce information.

## Audience tasks

1. Understand what Poor Louis Farms makes and why Alaska matters to the work.
2. Browse current and past product families without encountering stale commerce data.
3. Move between a product, its ingredients, the relevant process, and deeper journal reading.
4. Learn enough to use products with confidence while avoiding medical or unsupported safety claims.
5. Reach the current Square listing or shop index quickly.
6. Contact or follow the farm through verified public channels.

## Routes

- `/` — editorial homepage and primary orientation.
- `/products/` — filterable product catalog with Square category context.
- `/products/[slug]/` — 11 product stories, verified details, related ingredients/articles, and Square action.
- `/ingredients/` — searchable/filterable ingredient field guide.
- `/ingredients/[slug]/` — seven ingredient entries with status, season, use context, safety notes, and sources.
- `/making/` — an accessible branching process story: grow/gather, prepare, transform, finish.
- `/farm/` — clearly illustrative interactive farm-journal map plus equivalent text list.
- `/seasons/` — winter, spring, summer, and autumn rhythms with intentionally non-rigid language.
- `/journal/` — categorized editorial index.
- `/journal/[slug]/` — ten substantive articles with reading time, source notes, and related content.
- `/about/` — concise family, name, and working-method story.
- `/faq/` — practical purchase, seasonality, sourcing, access, and contact answers.
- `/contact/` — verified email, Facebook, and Square links; explicit no-unscheduled-visits language.
- `/shop/` — styled gateway explaining the handoff to Square.
- `/404.html` — useful not-found page.

## Navigation model

The global header exposes five high-frequency choices: Products, Ingredients, How It's Made, Farm & Seasons, and Journal. About and FAQ live in the utility layer/footer. The Square action is visually persistent and explicitly labeled “Shop on Square.” On small screens a semantic button toggles a full-width menu; all links remain normal anchors and all essential content works without client-side JavaScript.

Breadcrumbs appear on detail and secondary pages. Product, ingredient, and article pages include reciprocal related-content links. Current-page state uses `aria-current="page"` and an ink underline rather than color alone.

## Content model

Astro content collections provide validated schemas for products, ingredients, journal articles, processes, seasons, FAQs, and farm-map points. Site-wide URLs, navigation, contact data, SEO defaults, categories, and media metadata live in centralized TypeScript data modules. Content relationships use stable slugs and are resolved at build time.

Editorial state values are explicit:

- Product relationship: `current-catalog`, `seasonal`, or `archive`.
- Ingredient relationship: `current`, `seasonal`, `exploring`, or `educational`.
- Source scope: `square`, `owner-confirmed`, `authoritative-reference`, or `editorial-inference`.

## Page composition

### Home

Quiet hero with a generated field-journal landscape, brand/name/tagline, one explore action, and one Square action. Below: short family introduction, current product-family ribbon, ingredient specimen feature, branching-process preview, seasonal field note, three journal articles, and an unambiguous Square handoff.

### Product index and detail

The index uses a restrained catalog ledger, not an ecommerce grid. Filter controls progressively enhance server-rendered product cards. Detail pages pair official photography with verified catalog copy, “what we know” notes, flavor/use/process context, and related field-guide/journal links. No cart, prices, or availability state are duplicated.

### Ingredient guide

Search and status filters enhance a fully rendered specimen list. Detail pages distinguish botanical facts, culinary context, traditional/historical context, Poor Louis Farms usage, and safety notes. Sources appear on each entry.

### Making

A branching diagram makes clear that products follow different paths. Keyboard-friendly anchor navigation and plain-language cards provide the complete alternative to the diagram.

### Farm and seasons

The illustrated farm map is intentionally labeled as an interpretive field-journal map. Hotspots are buttons tied to text panels; the same information follows as a visible ordered list. Reduced motion disables ambient movement and transitions. The seasons page uses a four-part ledger and repeatedly states that timing varies with weather and the work at hand.

### Journal

Ten seeded articles answer the requested foundational questions. Each has category, publish/review date, calculated reading time, source notes, and related items. Claims stay educational and links favor UAF/USDA/NPS sources.

## Technical architecture

- Astro 7 + TypeScript, static output.
- Astro content collections with Zod-backed schemas.
- Local assets processed through Astro's image pipeline; responsive AVIF/WebP/JPEG output.
- Handwritten component and page CSS, tokenized in one global stylesheet.
- Minimal vanilla client scripts for menu, filtering, and map panels only.
- `@astrojs/sitemap`, static `robots.txt`, canonical and Open Graph metadata, JSON-LD for Organization and Article only.
- GitHub Pages workflow with repository base path in CI and root path in local development.

## Content ownership and maintenance

Editors update Markdown frontmatter/body under `src/content/`, site-wide facts in `src/data/site.ts`, and images under `src/assets/`. The README contains concise recipes for adding each content type and a catalog refresh checklist. Square data is never fetched at runtime.
