import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    paperId: z.string(),
    title: z.string(),
    abstract: z.string(),
    note: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    newsId: z.string(),
    date: z.coerce.date(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    projectId: z.string(),
    title: z.string(),
    summary: z.string(),
    year: z.number().int(),
    order: z.number().int().default(0),
    cover: z.string().optional(),
    link: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { publications, news, projects };
