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
			{ label: 'Colloques', url: '/recherche/colloques' },
			{ label: 'Mémoires', url: '/recherche/memoires' },
			{ label: 'Projet de thèse', url: '/recherche/projet-de-these' },
		],
	},
	{
		label: 'Expositions',
		url: '/expositions',
	},
	{
		label: 'À propos',
		children: [
			{ label: 'Biographie', url: '/a-propos/biographie' },
			{ label: 'Cv', url: '/a-propos/cv' },
			{ label: 'Dessins', url: '/a-propos/dessins' },
		],
	},
	{
		label: 'Hommages',
		children: [
			{ label: 'Textes', url: '/hommages/textes' },
			{ label: "Livre d'or", url: '/livre-d-or' },
		],
	},
] satisfies NavLink[]
