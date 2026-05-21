import { type RouteOptions, type Routes } from 'astro-typesafe-routes/path'

type NavLink =
	| {
			label: string
			children: { label: string; url: RouteOptions<keyof Routes>['to'] }[]
	  }
	| {
			label: string
			url: RouteOptions<keyof Routes>['to']
	  }

export const navigationConfig = [
	{
		label: 'Publications',
		children: [
			{ label: 'Articles', url: '/publications/articles' },
			{ label: 'Bibliographie', url: '/publications/bibliographie' },
		],
	},
	{
		label: 'Recherche',
		children: [
			{ label: 'Interventions', url: '/recherche/interventions' },
			{ label: 'Mémoires', url: '/recherche/memoires' },
			{ label: 'Projet de thèse', url: '/recherche/projet-de-these' },
		],
	},
	{
		label: 'Catalogues & expositions',
		url: '/catalogues-et-expositions',
	},
	{
		label: 'À propos',
		children: [
			{ label: 'Biographie', url: '/a-propos/biographie' },
			{ label: 'Cv', url: '/a-propos/cv' },
			{ label: 'Dessins', url: '/a-propos/dessins' },
			{ label: 'Galerie', url: '/a-propos/galerie' },
		],
	},
	{
		label: 'Hommages',
		children: [
			{ label: 'Textes', url: '/hommages/textes' },
			{ label: "Livre d'or", url: '/livre-d-or' },
			{ label: 'Remerciements', url: '/hommages/remerciements' },
		],
	},
] satisfies NavLink[]
