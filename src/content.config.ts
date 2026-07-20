import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';

const sourceSchema = z.object({ label: z.string(), url: z.url() });

const products = defineCollection({
  loader: file('src/content-data/products.json'),
  schema: z.object({
    name: z.string(),
    category: z.enum(['Tea', 'Hot Sauce', 'Spices', 'Body & Bath', 'Home', 'Gift Sets']),
    catalogState: z.enum(['current-catalog', 'seasonal', 'archive']),
    summary: z.string(),
    profile: z.string(),
    verified: z.array(z.string()),
    uses: z.array(z.string()),
    processes: z.array(z.string()),
    ingredients: z.array(z.string()),
    squareUrl: z.url(),
    imageKey: z.string(),
    alt: z.string(),
    sourceReviewed: z.string()
  })
});

const ingredients = defineCollection({
  loader: file('src/content-data/ingredients.json'),
  schema: z.object({
    name: z.string(),
    scientificName: z.string().optional(),
    family: z.string().optional(),
    kind: z.enum(['botanical', 'pantry']),
    status: z.enum(['current', 'seasonal', 'exploring', 'educational']),
    partUsed: z.string(),
    season: z.string(),
    habitat: z.string(),
    aromaFlavor: z.string(),
    culinaryUses: z.array(z.string()),
    householdUses: z.array(z.string()),
    traditionalContext: z.string(),
    farmUse: z.string(),
    safety: z.string(),
    relatedProducts: z.array(z.string()),
    relatedArticles: z.array(z.string()),
    illustrationPosition: z.string(),
    sources: z.array(sourceSchema)
  })
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content-data/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Botanical Notes', 'Making', 'Farm Life', 'Our Story']),
    published: z.coerce.date(),
    reviewed: z.coerce.date(),
    featured: z.boolean().default(false),
    relatedProducts: z.array(z.string()).default([]),
    relatedIngredients: z.array(z.string()).default([]),
    sources: z.array(sourceSchema).default([])
  })
});

const processes = defineCollection({
  loader: file('src/content-data/processes.json'),
  schema: z.object({
    title: z.string(),
    stage: z.enum(['Source', 'Prepare', 'Transform', 'Finish']),
    number: z.number(),
    description: z.string(),
    appliesTo: z.array(z.string()),
    caution: z.string().optional()
  })
});

const seasons = defineCollection({
  loader: file('src/content-data/seasons.json'),
  schema: z.object({
    name: z.enum(['Winter', 'Spring', 'Summer', 'Autumn']),
    order: z.number(),
    note: z.string(),
    activities: z.array(z.string()),
    color: z.string()
  })
});

const faqs = defineCollection({
  loader: file('src/content-data/faqs.json'),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number()
  })
});

const farmPoints = defineCollection({
  loader: file('src/content-data/farm-points.json'),
  schema: z.object({
    name: z.string(),
    number: z.number(),
    x: z.number().min(0).max(100),
    y: z.number().min(0).max(100),
    season: z.string(),
    description: z.string(),
    note: z.string()
  })
});

export const collections = { products, ingredients, journal, processes, seasons, faqs, farmPoints };
