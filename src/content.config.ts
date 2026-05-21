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
			pdfs: z
				.array(
					z.object({
						label: z.string(),
						url: z.string(),
					})
				)
				.optional(),
			link: z
				.object({
					url: z.string(),
					label: z.string(),
				})
				.optional(),
			cover: z
				.object({
					src: z.string(),
					alt: z.string(),
					width: z.number().optional(),
					height: z.number().optional(),
				})
				.optional(),
			images: z
				.array(
					z.object({
						src: z.string(),
						alt: z.string(),
						caption: z.string().optional(),
						width: z.number().optional(),
						height: z.number().optional(),
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
	interventions: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/interventions' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
		}),
	}),
	publications: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/publications' }),
		schema: z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			date: z.date(),
			year: z.string(),
			publisher: z.string(),
			role: z.string().optional(),
			pages: z.string().optional(),
			isbn: z.string().optional(),
			link: z
				.object({
					url: z.string(),
					label: z.string(),
				})
				.optional(),
		}),
	}),
	memoires: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/memoires' }),
		schema: z.object({
			title: z.string(),
			date: z.date(),
			pdfs: z
				.array(
					z.object({
						label: z.string(),
						url: z.string(),
					})
				)
				.optional(),
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
				'ouvrage',
			]),
		}),
	}),
	biographie: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/biographie' }),
		schema: z.object({
			birthDate: z.date(),
			birthPlace: z.string(),
			deathDate: z.date(),
			deathPlace: z.string(),
			lead: z.string(),
			enseignements: z.array(z.object({ years: z.string(), body: z.string() })),
			bourses: z.array(z.object({ years: z.string(), body: z.string() })),
		}),
	}),
	dessins: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/dessins' }),
		schema: ({ image }) =>
			z.object({
				image: image(),
				caption: z.string().optional(),
				order: z.number().optional(),
			}),
	}),
	remerciements: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/remerciements' }),
		schema: z.object({
			title: z.string(),
		}),
	}),
	these: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/these' }),
		schema: z.object({
			title: z.string(),
		}),
	}),
	cv: defineCollection({
		loader: glob({ pattern: '**/*.md', base: 'content/cv' }),
		schema: z.object({
			pdf: z.string().optional(),
			sections: z.array(
				z.object({
					heading: z.string(),
					entries: z.array(z.object({ years: z.string(), body: z.string() })),
				})
			),
		}),
	}),
}
