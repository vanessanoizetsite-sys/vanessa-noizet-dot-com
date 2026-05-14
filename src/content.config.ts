import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

export const collections = {
	home: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/home' }),
		schema: ({ image }) =>
			z.object({
				image: image(),
				imageAlt: z.string(),
				intro: z.string(),
			}),
	}),
	articles: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/articles' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
			pdf: z.string().optional(),
		}),
	}),
	expositions: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/expositions' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
			dateEnd: z.date().optional(),
			venue: z.string(),
			city: z.string().optional(),
			role: z.string().optional(),
			pdf: z.string().optional(),
			link: z
				.object({
					url: z.string(),
					label: z.string(),
				})
				.optional(),
			cover: z.object({
				src: z.string(),
				alt: z.string(),
			}),
			images: z
				.array(
					z.object({
						src: z.string(),
						alt: z.string(),
						caption: z.string().optional(),
					})
				)
				.optional(),
		}),
	}),
	hommages: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/hommages' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
			pdf: z.string().optional(),
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
	bibliographie: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/bibliographie' }),
		schema: z.object({
			title: z.string(),
			year: z.string(),
			date: z.date(),
			category: z.enum([
				'these',
				'memoire',
				'article',
				'catalogue',
				'court-texte',
				'compte-rendu',
				'conference',
			]),
		}),
	}),
}
