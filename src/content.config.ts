import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies. One markdown file per piece of work in src/content/work/.
// The filename becomes the URL: src/content/work/foo.md -> /work/foo/
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    // One sentence. Shown on cards and as the page description.
    summary: z.string(),
    org: z.string(),
    role: z.string(),
    years: z.coerce.string(),
    // Which part of the story this proves. Most work is one or the other; some is both.
    phase: z.array(z.enum(['zero-to-one', 'one-to-n'])).min(1),
    // The blend: what kind of muscle this work used.
    capabilities: z.array(z.enum(['product', 'technology', 'data-ai', 'team'])).min(1),
    // Headline numbers. Keep each label short; they render as stat tiles.
    outcomes: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    featured: z.boolean().default(false),
    // Lower numbers sort first.
    order: z.number().default(100),
    // Drafts render in `npm run dev` but are left out of the production build.
    draft: z.boolean().default(false),
  }),
});

// Writing, talks, press and open source: a flat list of links in src/data/links.yaml.
const links = defineCollection({
  loader: file('./src/data/links.yaml'),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    kind: z.enum(['writing', 'talk', 'press', 'open-source', 'research']),
    venue: z.string(),
    year: z.number().optional(),
    note: z.string().optional(),
  }),
});

export const collections = { work, links };
