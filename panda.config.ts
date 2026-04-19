import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{astro,ts,tsx}'],
	outdir: 'styled-system',

	theme: {
		extend: {
			tokens: {
				fonts: {
					serif: { value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' },
				},
				colors: {
					default: { value: 'var(--oc-gray-8)' },
					muted: { value: 'var(--oc-gray-6)' },
					disabled: { value: 'var(--oc-gray-5)' },
					surface: {
						1: { value: 'white' },
						2: { value: 'var(--oc-gray-0)' },
						3: { value: 'var(--oc-gray-1)' },
					},
					surfaceAccent: {
						1: { value: 'var(--oc-orange-0)' },
						2: { value: 'var(--oc-orange-1)' },
					},
					separator: { value: 'var(--oc-gray-3)' },
					border: { value: 'var(--oc-gray-7)' },
					borderAccent: { value: 'var(--oc-orange-2)' },
					ring: { value: 'var(--oc-blue-7)' },
				},
			},
			textStyles: {
				body: {
					value: {
						fontSize: 'var(--text-fl-0)',
						lineHeight: '1.5',
					},
				},
				'heading-1': {
					value: {
						fontSize: 'var(--text-fl-5)',
						lineHeight: '1.1',
					},
				},
				'heading-2': {
					value: {
						fontSize: 'var(--text-fl-4)',
						lineHeight: '1.2',
					},
				},
				'heading-3': {
					value: {
						fontSize: 'var(--text-fl-3)',
						lineHeight: '1.2',
					},
				},
				'heading-4': {
					value: {
						fontSize: 'var(--text-fl-2)',
						lineHeight: '1.3',
					},
				},
				'heading-5': {
					value: {
						fontSize: 'var(--text-fl-1)',
						lineHeight: '1.4',
					},
				},
				'heading-6': {
					value: {
						fontSize: 'var(--text-fl-0)',
						lineHeight: '1.4',
					},
				},
				small: {
					value: {
						fontSize: 'var(--text-fl--1)',
						lineHeight: '1.5',
					},
				},
				caption: {
					value: {
						fontSize: 'var(--text-fl--2)',
						lineHeight: '1.5',
					},
				},
				label: {
					value: {
						fontSize: 'var(--text-fl--2)',
						lineHeight: '1.5',
						textTransform: 'uppercase',
						letterSpacing: '0.3em',
					},
				},
			},
			keyframes: {
				fadeUp: {
					from: { opacity: '0', transform: 'translateY(1rem)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				fadeRight: {
					from: { opacity: '0', transform: 'translateX(-1rem)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
			},
		},
	},
})
