# Poor Louis Farms content audit

Audit date: 2026-07-19  
Primary source: [Poor Louis Farms Square storefront](https://poor-louis-farms.square.site/) and its publicly rendered catalog.  
Method: inspected the published HTML bootstrap data, rendered the storefront with Chromium, recorded public network responses from Square's catalog endpoint, opened product routes, and captured source screenshots. No authenticated or administrative endpoints were used.

## Current public catalog

The Square storefront returned 11 visible products and six categories. Prices and inventory were observed only to confirm that Square is active; they are deliberately not copied into the Explore & Learn site because Square remains authoritative for current pricing, options, fulfillment, and availability.

| Product | Square category | Published description / confirmed details | Source page | Official image source |
| --- | --- | --- | --- | --- |
| Fireweed Pu'er | Tea | Aged, fermented fireweed leaves; described as earthy, malty, smooth, full-bodied. Ingredient statement: 100% aged fireweed leaves. Square includes loose-leaf brewing guidance. | [Product 33](https://poor-louis-farms.square.site/product/fireweed-pu-er/33) | Product page; Square CDN asset `4UWV64XNV5FEV4Q2E7JZJ4SR.jpeg` |
| Mug gift set | Gift Sets | Etched Poor Louis Farms glass mug, heart-shaped loose-leaf strainer, and a choice of 1/2 oz Arctic Rose or Rugosa loose-leaf tea. | [Product 41](https://poor-louis-farms.square.site/product/mug-gift-set/41) | Product page; Square CDN assets `A5BWBVFKCAHHLKN7T77EK4YW.jpeg`, `VXMNYA5DTPUDJKK2IFGQJMUE.jpeg` |
| Raspberry Leaf Tea Bags Box | Tea | 18 tea bags, 1.5 g per bag; ingredient statement: 100% raspberry leaves; described as mild, herbaceous, and slightly sweet. | [Product 18](https://poor-louis-farms.square.site/product/raspberry-leaf-tea-bags-box/18) | Product page; Square CDN asset `MB2FF66K32JWSBRA7MLNKMIO.jpeg` |
| Fireweed Loose Leaf Tea Glass | Tea | 1 oz loose-leaf tea made from hand-harvested fireweed leaves; described as mild, slightly sweet, and earthy. Ingredient statement: 100% fireweed leaves. Square includes hot and iced brewing suggestions. | [Product 11](https://poor-louis-farms.square.site/product/fireweed-loose-leaf-tea-glass/11) | Product page; Square CDN assets `YEXRO55EA55WH7TAE3TKAXOG.jpeg`, `7CUC56IA3WIEQMVZ5AYDQMAR.jpeg`, `DOTW75DZEZLWQRP6CIXNIVCR.jpeg` |
| Forget-me-not Sun Catcher | Home | Name and category confirmed. No public description or material statement. | [Product 45](https://poor-louis-farms.square.site/product/forget-me-not-sun-catcher/45) | Product page; Square CDN asset `LSW2J33WYHO6CL3N5S2AOWFX.jpeg` |
| Spruce Tip Hot Sauce Glass | Hot sauce | Small-batch fermented árbol chile hot sauce with spruce tips and Whittier sea salt; described as smoky, bright, resinous/citrusy, tangy, and savory. The page identifies a 5 fl oz bottle and lists culinary suggestions. | [Product 27](https://poor-louis-farms.square.site/product/spruce-tip-hot-sauce-glass/27) | Product page; Square CDN asset `ZFRHFVBOKP5Z3FKT3OAJZXYK.jpeg` |
| Calendula Salve | Health | Calendula flowers grown at Poor Louis Farms, infused into oils and combined with beeswax. The exact oils are not published. | [Product 39](https://poor-louis-farms.square.site/product/calendula-salve/39) | Product page; Square CDN asset `CVUJ4CO2UWIIHX4NHT5E4L7C.jpeg` |
| Mug | Home | Name and category confirmed. No public description, volume, or material statement beyond what is visually observable, so those details are omitted. | [Product 49](https://poor-louis-farms.square.site/product/mug/49) | Product page; Square CDN asset `XON3O5LYPNPF6HXU5TDMC325.jpeg` |
| Rosehip Pepper Flakes | Spices | 1 oz blend of wild-harvested rosehips and fermented pepper flakes; described as tangy, bright, smoky, zesty, and hot. Square lists culinary uses. Pepper variety is not published. | [Product 29](https://poor-louis-farms.square.site/product/rosehip-pepper-flakes/29) | Product page; Square CDN asset `5NDFB3YVU3JCI7S55652SFFM.jpeg` |
| Fireweed Soap | Health | Name and category confirmed. No public ingredient list, scent description, weight, or maker attribution. | [Product 44](https://poor-louis-farms.square.site/product/fireweed-soap/44) | Product page; Square CDN asset `J4YLM3POSVYSUQNNNDQE674V.jpeg` |
| Small Honey | Spices | Name and category confirmed. No public size, floral source, producer, or origin statement. | [Product 46](https://poor-louis-farms.square.site/product/small-honey/46) | Product page; Square CDN asset `O4XTRLITDK3PXFZH23V2YHNY.jpeg` |

### Square categories

- Tea (3 visible products)
- Hot sauce (1 visible product)
- Spices (2 visible products)
- Health (2 visible products)
- Home (2 visible products)
- Gift Sets (1 visible product)

The editorial site renames the broad Square category “Health” to “Body & Bath” in navigation and presentation to avoid implying health outcomes. Product links retain their original Square destinations.

## Public brand, business, and contact information

- Business name: Poor Louis Farms.
- Location: Wasilla, Alaska. The public Facebook metadata reads “Poor Louis Farms | Wasilla AK.”
- Official tagline: “Wild botanicals and handcrafted creations inspired by the Alaskan wilderness.”
- Public email: `collamore@poorlouisfarms.com` (selected contact in the Square site data).
- Public Facebook: [facebook.com/poorlouisfarms](https://www.facebook.com/poorlouisfarms) (selected social link in Square and public page metadata).
- Square store: [poor-louis-farms.square.site](https://poor-louis-farms.square.site/).
- Square's current homepage statement: Poor Louis Farms channels varied interests into small-batch handcrafted goods that respond to Alaska's changing seasons, local harvests, family, and community.
- Store fulfillment shown publicly at audit time: shipping and delivery were enabled; pickup was not. This operational detail is not repeated on the new site because it may change.

## Confirmed narrative facts supplied by the owners

- Poor Louis Farms is a small family farm run by Alexander and Katherine Collamore.
- They moved from Washington to Alaska in 2012 and have three children.
- Alexander's late grandfather, Robert Louis Triebenbach, helped inspire Alexander's dream of farming and the farm's name.
- Alexander and Katherine bring design, fabrication, and hands-on making backgrounds to the work.
- The farm grows, harvests, creates, and experiments with local and Alaskan ingredients.
- Product areas extend beyond the current snapshot and include handcrafted teas, spice blends, hot sauces, salves, home goods, flowers, seasonal goods, and other artisanal work.
- Poor Louis Farms may also highlight work made by other Alaskans.
- Fireweed tea is made from fireweed leaves, not fireweed flowers.

## Authoritative educational sources

- University of Alaska Fairbanks Cooperative Extension, [Fireweed (FNH-00106)](https://www.uaf.edu/ces/publications/database/food/fireweed.php): plant description, early-leaf culinary use, drying overview, and leaf-tea context.
- USDA Forest Service, [Fireweed species review](https://research.fs.usda.gov/feis/species-reviews/chaang): accepted taxonomy used here (`Chamerion angustifolium`), habitat, succession, and Alaska distribution context.
- USDA Forest Service, [Prickly rose species review](https://research.fs.usda.gov/feis/species-reviews/rosaci): Alaska bloom and hip season context. The field guide uses `Rosa spp.` because the product's exact rose species is not confirmed.
- University of Alaska Fairbanks Cooperative Extension, [Gather](https://www.uaf.edu/ces/districts/tribes/gather.php): Alaska gathering resources and respectful-harvest references.
- National Park Service, [Management Policies: Use of Parks](https://www.nps.gov/subjects/policy/mp-8-use-of-parks.htm): reminder that gathering rules vary and collection on public land may be limited or require authorization.
- USDA Forest Service, [Assessment of Nontimber Forest Products](https://www.srs.fs.usda.gov/pubs/gtr/gtr_srs232/GTR_232_005.pdf): broad stewardship norms such as harvesting where plants are plentiful, leaving plant material, rotating harvest areas, and minimizing disturbance.

## Reasonable inferences used in the site

- The product collection changes with the season. This follows the owners' confirmed seasonal emphasis and the catalog's visible mix, but no rigid harvest calendar is asserted.
- Drying, fermenting, infusing, blending, and small-batch testing are shown as possible product-specific paths, not a single universal production line.
- “Farm edge,” “garden,” “work table,” and similar places in the illustrated farm experience are narrative zones, not claims about the surveyed layout of the private property.
- Product sensory summaries are faithful paraphrases of Square descriptions; suggestions are culinary serving ideas, not preparation or food-safety protocols.

## Deliberately omitted or softened

- Current prices, stock counts, sale state, shipping eligibility, and option availability.
- A phone number, street address, opening hours, Instagram profile, market calendar, visitor access, wholesale availability, certifications, awards, acreage, retail stockists, testimonials, and Indigenous affiliation: none were confirmed.
- Exact ingredients for the salve, soap, mug, sun catcher, and honey beyond what Square publishes.
- Exact spruce, rose, raspberry, and calendula species in product claims. General field-guide taxonomy is labeled accordingly.
- Medical, therapeutic, pregnancy, disease, “detox,” guaranteed wellness, and skin-recovery claims. Some older Square copy includes wellness language; it is not reproduced as fact.
- “Wildcrafted,” “organic,” “sustainable,” “all natural,” licensed-facility, shelf-life, and universal safety claims.
- Home fermentation, canning, or preservation instructions. Articles explain ideas and flavor development without acting as food-safety manuals.

## Research artifacts

Working browser screenshots and raw public catalog responses were used during the audit but are not shipped in the production bundle. Final site QA screenshots live under `qa/screenshots/` and are documented in `QA_REPORT.md`.
