// @ts-check
import { defineConfig } from 'astro/config'

import typesafeRoutes from 'astro-typesafe-routes'
import sitemap from '@astrojs/sitemap'
import remarkGfm from 'remark-gfm'

// https://astro.build/config
export default defineConfig({
	site: 'https://vanessa-noizet.com',
	integrations: [typesafeRoutes(), sitemap()],
	markdown: {
		remarkPlugins: [remarkGfm],
	},
})
