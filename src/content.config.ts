import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

export const collections = {
	articles: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/articles' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
		}),
	}),
	expositions: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/expositions' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
		}),
	}),
	hommages: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/hommages' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
		}),
	}),
	colloques: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/colloques' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
		}),
	}),
	ouvrages: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/ouvrages' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
		}),
	}),
}
