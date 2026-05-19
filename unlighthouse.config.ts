import { defineUnlighthouseConfig } from 'unlighthouse/config'

export default defineUnlighthouseConfig({
	site: 'http://localhost:4321',
	scanner: {
		device: 'mobile',
		throttle: true,
		samples: 1,
		exclude: ['/theme', '/pdfs/.*', '/.*\\.pdf$'],
	},
	lighthouseOptions: {
		onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
	},
	ci: {
		budget: {
			performance: 80,
			accessibility: 95,
			'best-practices': 90,
			seo: 95,
		},
	},
})
