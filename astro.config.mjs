// @ts-check
import { defineConfig } from 'astro/config'

import typesafeRoutes from 'astro-typesafe-routes'
import remarkGfm from 'remark-gfm'

// https://astro.build/config
export default defineConfig({
	integrations: [typesafeRoutes()],
	markdown: {
		remarkPlugins: [remarkGfm],
	},
})
