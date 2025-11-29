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
		label: 'À propos',
		children: [
			{ label: 'Biographie', url: '/a-propos/biographie' },
			{ label: 'Cv', url: '/a-propos/cv' },
		],
	},
	{
		label: 'Écrits',
		children: [
			{ label: 'Articles', url: '/ecrits/articles' },
			{ label: 'Publications', url: '/ecrits/publications' },
			{ label: 'Bibliographie', url: '/ecrits/bibliographie' },
		],
	},
	{
		label: 'Expositions',
		url: '/expositions',
	},
	{
		label: 'Hommages',
		url: '/hommages',
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
		label: "Livre d'or",
		url: '/livre-d-or',
	},
] satisfies NavLink[]
