# Poor Louis Farms design system

## Selected direction

**Working title:** The Northern Field Ledger
**Design statement:** An illustrated Alaskan field journal meets a welcoming family farm pantry.

The visual system combines generous contemporary spacing with the quiet evidence of a well-used notebook: warm paper, crisp charcoal rules, botanical marginalia, small handwritten-style annotations, and functional ledger labels. Official product photographs stay plainly photographic. Generated landscape and specimen art stays visibly watercolor-and-ink. This separation keeps the site honest.

## Layout principles

- Default content width: 74rem; reading width: 43rem.
- Asymmetric editorial grids create rhythm, while forms and navigation keep predictable alignment.
- Sections use paper-rule dividers and small botanical ornaments instead of repeated card containers.
- The first viewport contains the name, Alaska context, tagline, two purposeful actions, and one calm landscape—nothing more.
- Detail pages use a two-column photo/notebook layout on wide screens and a single readable flow below 760px.
- Touch targets are at least 44 × 44 CSS pixels.

## Palette

| Token | Value | Role |
| --- | --- | --- |
| Paper | `#f5efdf` | Main page background |
| Paper light | `#fffaf0` | Raised reading surface |
| Charcoal | `#25271f` | Main text and rules |
| Ink soft | `#55594a` | Secondary text |
| Spruce | `#284f3e` | Primary action / dark field |
| Moss | `#6d7b50` | Botanical support |
| Fireweed | `#a64269` | Select accent, current state |
| Berry | `#6e2948` | Dark accent / hover |
| Goldenrod | `#c58b2b` | Seasonal annotation |
| Sky | `#8eacb9` | Cool contrast |
| Wood | `#8b6448` | Process / material detail |
| Error | `#982f31` | Validation / warning |

All body text combinations target WCAG 2.2 AA. Fireweed and goldenrod are never used as small text on paper without a darker paired color.

## Typography

- Display/editorial serif: **Lora**, open-source SIL Open Font License, locally bundled in regular, medium, semibold, and italic subsets only as needed.
- Interface/body sans: **Atkinson Hyperlegible**, open-source SIL Open Font License, locally bundled regular and bold. Selected for durable character differentiation and rural/mobile readability.
- Field annotations: Lora italic, used sparingly; no script face.
- Fluid type scale uses `clamp()` with approximately 1.2–1.25 steps. Body copy remains at least 1rem, with 1.65–1.75 line height in articles.

## Graphic language

- Emblem: a code-native single-color sprig-and-mountain mark, designed as a flexible supporting mark rather than a replacement for an official logo.
- Lines: 1px charcoal at low opacity, slightly irregular only in decorative SVG paths.
- Corners: mostly square or softly 2–8px eased. Circular shapes are reserved for map points and botanical seals with real functional meaning.
- Texture: one very subtle procedural paper grain layer; never behind text at enough contrast to impair reading.
- Icons: small inline SVGs with consistent 1.5px strokes and visible text labels.

## Photography and illustration

- Official Square product photographs appear uncropped where possible, on warm neutral mats. Labels and packaging are never altered.
- Generated hero: wide watercolor-and-ink interpretive Southcentral Alaska farm-edge landscape; quiet sky, low mountains, garden rows, spruce, birch, fireweed; no people or products.
- Generated field-guide plate: separate watercolor-and-ink specimens of fireweed leaves/stem, spruce tips, rosehips, raspberry leaves, calendula, and dried chiles; no labels or claims embedded in the bitmap.
- Farm map and process diagrams: code-native SVG so hotspots, reading order, contrast, and responsive behavior remain accessible.
- Product imagery is delivered with fixed aspect ratios and responsive sizes. Below-the-fold imagery is lazy-loaded.

## Interaction and motion

- Hover treatment: ink underline grows or image mat shifts by no more than 2px.
- Focus: 3px high-contrast sky/charcoal outline with 3px offset.
- Menu: immediate open/close with focus management and Escape support.
- Filters: instant client-side visibility updates plus a live result count; content is still complete without JavaScript.
- Farm hotspots: gentle 3s breathing ring; selected point updates a nearby description. No map information exists only in the hotspot.
- `prefers-reduced-motion: reduce` removes transforms, transitions, animation, smooth scrolling, and parallax.

## Major page concepts

### Homepage concept

A tall but quiet editorial masthead occupies roughly 80–88vh on desktop. Copy sits on warm paper at left; the watercolor landscape overlaps the right and lower edge, with a small “Wasilla, Alaska” margin note. The next section behaves like a pantry ledger: product families in horizontal ruled rows, each with a number, short description, and image detail. The botanical plate later breaks the grid at full width before the journal previews.

### Product / ingredient concept

Details open like a specimen folio. An image or illustration occupies the left page; the right page carries category, title, concise description, facts, and a strong Square or related-content action. Source notes look like real endnotes, not ornamental badges.

### Farm concept

A simplified hand-inked landscape SVG runs horizontally like a fold-out map. Seven numbered points follow the path from cultivated bed to wild edge to work table. Selecting a point moves a textual “field card” below the drawing. A visible list repeats every point for keyboard and screen-reader parity.

## Accessibility constraints

- Never place essential text inside raster art.
- Maintain semantic landmarks and one `h1` per page.
- Do not hide focus outlines; current states are not color-only.
- Menus use buttons and expanded state; no hover-only disclosure.
- Filter controls use native labels and inputs.
- Interactive map points have visible numbers, names, and programmatic relationships.
- Decorative SVGs and textures are hidden from assistive technology.
- Alt text describes the purpose and distinguishing content, not every decorative detail.
