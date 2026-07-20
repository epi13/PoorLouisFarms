# Quality assurance report

Final review date: 2026-07-19

Branch: `codex/explore-learn-revamp`

## Outcome

The static production build completes with 41 routes and 73 optimized image variants. Automated browser, accessibility, interaction, internal-link, responsive-layout, direct-route, and Lighthouse checks pass. Every current Square product link returned HTTP 200 during the final external-link check.

## Commands run

```sh
npm ci
npm run check
npm run build
GITHUB_ACTIONS=true npm run build
npm test
npm run test:viewports
npm run screenshots
CHROME_PATH=/home/epi13/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome npm run lighthouse
npm audit --omit=dev
```

The GitHub Actions-mode build was inspected to confirm `/PoorLouisFarms/` prefixes on CSS, image, icon, and internal-link paths; the canonical homepage remained `https://epi13.github.io/PoorLouisFarms/`. The local build continues to use `/`.

## Browser and interaction tests

- Playwright Chromium: **74 passed, 2 intentionally skipped**, 0 failed. The two skips are the one-time viewport matrix in the duplicate mobile project and the desktop copy of the mobile-menu-only test.
- Desktop project: 1440 × 900.
- Mobile project: 390 × 844.
- Additional responsive matrix: 1024 × 768, 768 × 1024, and 320 × 720, plus the two standard project sizes.
- Representative route matrix: no horizontal overflow or broken local images at any required width.
- Internal crawler: reached at least 40 linked content routes; every response was HTTP 200.
- Direct journal route: remained HTTP 200 after a full refresh.
- Custom 404: returned HTTP 404 while preserving useful home and exploration links.
- Browser console: no site console errors on the route set.
- Tested interactions: mobile menu open/Escape/focus return, skip link, product search/category filter, ingredient search/status filter, farm-map selection and live card, reduced-motion media preference, and safe Square link attributes.
- External checks: all 11 product routes, the Square shop gateway, and the public Facebook page returned HTTP 200 on 2026-07-19.

## Accessibility

axe was run against 12 representative page types in both desktop and mobile projects using WCAG 2 A/AA and WCAG 2.1 A/AA tags. **No detectable violations remained.** Keyboard focus, skip navigation, menu Escape behavior, current-page state, map alternatives, native FAQ disclosure controls, form labels, touch targets, contrast, and reduced motion were also reviewed.

The first axe pass found low contrast on the “Current catalog” eyebrow and dark-panel ledger labels. Both were changed to a lighter muted pink and the complete axe suite then passed.

## Lighthouse

Production preview, desktop preset, one final run per route:

| Route | Performance | Accessibility | Best Practices | SEO | LCP | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 100 | 100 | 100 | 100 | 0.5 s | 0 ms |
| `/products/` | 100 | 100 | 100 | 100 | 0.5 s | 0 ms |
| `/ingredients/` | 100 | 100 | 100 | 100 | 0.4 s | 0 ms |
| `/farm/` | 100 | 100 | 100 | 100 | 0.4 s | 0 ms |
| `/journal/what-fireweed-tea-is/` | 98 | 100 | 100 | 100 | 0.4 s | 0 ms |

The initial run exposed a local-only missing app-icon request caused by absolute manifest paths. The manifest now uses deployment-portable relative paths; the final run has no console penalty. Lighthouse results are lab measurements, not a promise of identical field performance.

## Visual review and corrections

Final full-page references are stored outside the production bundle in `qa/screenshots/`:

- Homepage: desktop, small desktop, tablet-adjacent/mobile, and 320-pixel narrow mobile
- Product index and product detail
- Ingredient guide
- Illustrated farm map
- Journal article
- Farm map at tablet width

Visible mismatches corrected during browser review:

- Expanded compact Square handoff panels so long product names no longer collapsed into an unusably narrow column.
- Corrected the Body & Bath query encoding and filter matching.
- Improved active navigation so the shared Farm & Seasons item remains current on the seasons route.
- Removed a 320-pixel overflow caused by the four-column process legend; it becomes a two-column legend on small screens.
- Corrected dark-panel annotation contrast.
- Removed a redundant brand `aria-label` that did not fully match its visible text.
- Corrected canonical and social-card URL composition for the repository base path.

## Dependency and security check

`npm audit --omit=dev` reports **0 production vulnerabilities**. The current Lighthouse CI development tool has five upstream transitive audit notices (2 low, 2 moderate, 1 high in `tmp`/`uuid` through its CLI stack); it is used only for local QA, is excluded from the production output, and has no non-breaking upstream audit resolution at this release.

## Intentional limitations and future real media

- No verified family or farm documentary photography was publicly available for this build. Honest illustrative farm artwork, code-native diagrams, and official Square product photographs are used instead.
- The farm map is explicitly interpretive, not a surveyed plan of the private property.
- Lighthouse was run in Chromium on the local static production preview. No Safari/WebKit visual run was performed in this environment.
- Current inventory, prices, fulfillment, and product options remain intentionally outside this static site and authoritative on Square.
- A future owner-supplied portrait of Alexander and Katherine, seasonal garden/process photographs, and confirmed animal/workspace photographs could deepen the About and Farm pages without changing their structure.
