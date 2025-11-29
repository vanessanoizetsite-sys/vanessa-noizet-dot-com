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
	livredor: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/livredor' }),
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
	publications: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/publications' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
		}),
	}),
	memoires: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/memoires' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
		}),
	}),
}
