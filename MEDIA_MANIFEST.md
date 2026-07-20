# Media manifest

Updated: 2026-07-19

All production media is local. The site does not hotlink Square or social images at runtime. Official product photos are downloaded from publicly accessible Poor Louis Farms Square product pages and remain unaltered except for resizing, orientation normalization, and format optimization. Generated assets never depict real people, the actual private farm, or product packaging.

## Generated production artwork

| Local asset | Type / status | Origin | Prompt | Alt-text intent |
| --- | --- | --- | --- | --- |
| `src/assets/illustrations/farm-field-hero.png` | Generated original; production source | OpenAI built-in image generation, 2026-07-19 | “Original illustrated Alaskan field-journal landscape suggesting a small family farm at the edge of the boreal forest, with garden rows, a modest work shed, distant rounded mountains, fireweed and spruce framing the scene; refined watercolor washes over restrained hand-inked botanical and woodcut linework; warm natural paper, spruce and moss, fireweed magenta, weathered wood, glacial-blue accents; no text, people, products, photorealism, or frontier clichés.” | “Watercolor field-journal scene of garden rows, fireweed, spruce forest, a small shed, and low Alaskan mountains.” |
| `src/assets/illustrations/ingredient-specimen-plate.png` | Generated original; production source | OpenAI built-in image generation, 2026-07-19 | “Botanical specimen plate showing fireweed leaves and flowering stem, young spruce tips, rosehips, raspberry leaves, calendula flower heads, and dried árbol chiles; warm paper, faint grid, watercolor, graphite and engraved ink; separated specimens; no labels, packaging, people, or medical symbolism.” | “Illustrated specimen plate of fireweed, spruce tips, rosehips, raspberry leaves, calendula, and dried chiles.” |

Both generated sources are compressed by Astro into responsive AVIF/WebP/JPEG variants in the production build. The production prompts are recorded above so future editors can create stylistically coordinated companions without treating the artwork as documentary photography.

## Official Poor Louis Farms product photography

| Local filename | Product | Source page | Original public asset | Classification | Alt text |
| --- | --- | --- | --- | --- | --- |
| `fireweed-puer.jpg` | Fireweed Pu'er | [Square product](https://poor-louis-farms.square.site/product/fireweed-pu-er/33) | `4UWV64XNV5FEV4Q2E7JZJ4SR.jpeg` | Official, downloaded | “Poor Louis Farms Fireweed Pu'er packaged for sale.” |
| `mug-gift-set.jpg` | Mug gift set | [Square product](https://poor-louis-farms.square.site/product/mug-gift-set/41) | `A5BWBVFKCAHHLKN7T77EK4YW.jpeg` | Official, downloaded | “Poor Louis Farms glass mug gift set with tea accessories.” |
| `mug-gift-set-detail.jpg` | Mug gift set | [Square product](https://poor-louis-farms.square.site/product/mug-gift-set/41) | `VXMNYA5DTPUDJKK2IFGQJMUE.jpeg` | Official, downloaded | “Detail view of the Poor Louis Farms mug gift set.” |
| `raspberry-leaf-tea-bags.jpg` | Raspberry Leaf Tea Bags Box | [Square product](https://poor-louis-farms.square.site/product/raspberry-leaf-tea-bags-box/18) | `MB2FF66K32JWSBRA7MLNKMIO.jpeg` | Official, downloaded | “Box of Poor Louis Farms Raspberry Leaf Tea Bags.” |
| `fireweed-loose-leaf.jpg` | Fireweed Loose Leaf Tea Glass | [Square product](https://poor-louis-farms.square.site/product/fireweed-loose-leaf-tea-glass/11) | `YEXRO55EA55WH7TAE3TKAXOG.jpeg` | Official, downloaded | “Poor Louis Farms fireweed loose-leaf tea in its glass container.” |
| `fireweed-loose-leaf-detail-1.jpg` | Fireweed Loose Leaf Tea Glass | [Square product](https://poor-louis-farms.square.site/product/fireweed-loose-leaf-tea-glass/11) | `7CUC56IA3WIEQMVZ5AYDQMAR.jpeg` | Official, downloaded | “Detail view of fireweed loose-leaf tea and its packaging.” |
| `fireweed-loose-leaf-detail-2.jpg` | Fireweed Loose Leaf Tea Glass | [Square product](https://poor-louis-farms.square.site/product/fireweed-loose-leaf-tea-glass/11) | `DOTW75DZEZLWQRP6CIXNIVCR.jpeg` | Official, downloaded | “Alternate detail of Poor Louis Farms fireweed loose-leaf tea.” |
| `forget-me-not-suncatcher.jpg` | Forget-me-not Sun Catcher | [Square product](https://poor-louis-farms.square.site/product/forget-me-not-sun-catcher/45) | `LSW2J33WYHO6CL3N5S2AOWFX.jpeg` | Official, downloaded | “Poor Louis Farms forget-me-not sun catcher.” |
| `spruce-tip-hot-sauce.jpg` | Spruce Tip Hot Sauce Glass | [Square product](https://poor-louis-farms.square.site/product/spruce-tip-hot-sauce-glass/27) | `ZFRHFVBOKP5Z3FKT3OAJZXYK.jpeg` | Official, downloaded | “Bottle of Poor Louis Farms Spruce Tip Hot Sauce.” |
| `calendula-salve.jpg` | Calendula Salve | [Square product](https://poor-louis-farms.square.site/product/calendula-salve/39) | `CVUJ4CO2UWIIHX4NHT5E4L7C.jpeg` | Official, downloaded | “Tin of Poor Louis Farms Calendula Salve.” |
| `mug.jpg` | Mug | [Square product](https://poor-louis-farms.square.site/product/mug/49) | `XON3O5LYPNPF6HXU5TDMC325.jpeg` | Official, downloaded | “Poor Louis Farms logo mug.” |
| `rosehip-pepper-flakes.jpg` | Rosehip Pepper Flakes | [Square product](https://poor-louis-farms.square.site/product/rosehip-pepper-flakes/29) | `5NDFB3YVU3JCI7S55652SFFM.jpeg` | Official, downloaded | “Jar of Poor Louis Farms Rosehip Pepper Flakes.” |
| `fireweed-soap.jpg` | Fireweed Soap | [Square product](https://poor-louis-farms.square.site/product/fireweed-soap/44) | `J4YLM3POSVYSUQNNNDQE674V.jpeg` | Official, downloaded | “Bar of Poor Louis Farms Fireweed Soap.” |
| `small-honey.jpg` | Small Honey | [Square product](https://poor-louis-farms.square.site/product/small-honey/46) | `O4XTRLITDK3PXFZH23V2YHNY.jpeg` | Official, downloaded | “Small jar of honey shown in the Poor Louis Farms catalog.” |

The repository stores 1280px working derivatives of these 2560px Square originals. Astro emits smaller responsive widths and modern formats. Product cards use meaningful alt text; decorative repeated thumbnails use empty alt text where the adjacent product name provides the same information.

## Brand and interface assets

| Asset | Origin / license | Notes |
| --- | --- | --- |
| Supporting mountain-and-sprig emblem (`src/components/BrandMark.astro`) | Original code-native SVG | Flexible single-color supporting mark; not presented as an existing official trademark. |
| Process and farm-map drawings | Original code-native SVG | Decorative portions are hidden; interactive controls and equivalent text carry meaning. |
| Paper texture | Original procedural CSS | Layered low-opacity radial gradients; no external image. |
| Favicon and app icons | Original code-native emblem rendered locally | No third-party artwork. |
| Lora font files | Google Fonts project, SIL Open Font License 1.1 | Locally bundled; license retained under `public/fonts/`. |
| Atkinson Hyperlegible font files | Braille Institute / Google Fonts project, SIL Open Font License 1.1 | Locally bundled; license retained under `public/fonts/`. |
| Social sharing image | Original local composite of the generated hero art and code-rendered brand typography | No official product image is altered or relabeled. |

## Intentionally not used

- No stock photography.
- No generated documentary images of Alexander, Katherine, their children, their real farm, or real products.
- No Facebook imagery is copied; the public page is linked only.
- The existing Square header/logo image was reviewed but not used as the new primary logo because it is a square photographic asset and the new site needs a flexible one-color supporting emblem. It remains visible on the Square store.
