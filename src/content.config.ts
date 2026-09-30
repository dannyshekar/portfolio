import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each collection is a folder of Markdown files in src/content/.
// The "schema" lists the fields you put at the top of each file (the "frontmatter").
// `draft: true` = visible while running `npm run dev`, hidden on the real site.

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tech: z.array(z.string()).default([]),
      status: z.enum(['building', 'shipped', 'paused']).default('building'),
      repo: z.url().optional(),
      demo: z.url().optional(),
      featured: z.boolean().default(false),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Short "today I learned" entries — no separate page, they all show on /notes.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Jobs, internships and degrees. Dates are "YYYY-MM" or "YYYY" in quotes.
// `kind: work` shows under Experience, `kind: education` under Education.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    location: z.string().optional(),
    start: z.coerce.string(),
    end: z.coerce.string().optional(), // leave out for "Present"
    kind: z.enum(['work', 'education']).default('work'),
    summary: z.string().optional(),
    // Optional course list for degrees, shown as a grid: [{ term: 'Semester 1', units: [...] }]
    terms: z.array(z.object({ term: z.string(), units: z.array(z.string()) })).default([]),
    tech: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, blog, notes, experience };
