const monthYearFr = (d: Date) =>
	d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })

export function formatDateRange(start: Date, end?: Date): string {
	if (!end) return monthYearFr(start)
	if (start.getFullYear() === end.getFullYear()) {
		const startMonth = start.toLocaleDateString('fr-FR', { month: 'long' })
		return `${startMonth} – ${monthYearFr(end)}`
	}
	return `${monthYearFr(start)} – ${monthYearFr(end)}`
}
