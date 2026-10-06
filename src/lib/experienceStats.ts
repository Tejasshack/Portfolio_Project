type ExperienceStint = {
  start: { month: number; year: number }
  end: { month: number; year: number } | 'present'
}

/** Canonical employment dates — keep in sync with resume / Experience translations */
export const EXPERIENCE_STINTS: ExperienceStint[] = [
  { start: { month: 10, year: 2025 }, end: 'present' }, // Kodejams — Nov 2025
  { start: { month: 1, year: 2025 }, end: { month: 9, year: 2025 } }, // MVM — Feb 2025 – Oct 2025
  { start: { month: 6, year: 2024 }, end: { month: 1, year: 2025 } }, // Jspiders — Jul 2024 – Feb 2025
  { start: { month: 1, year: 2024 }, end: { month: 11, year: 2024 } }, // Good Samaritans — Feb 2024 – Dec 2024
]

function stintMonths(stint: ExperienceStint, asOf: Date = new Date()): number {
  const startTotal = stint.start.year * 12 + stint.start.month
  const endTotal =
    stint.end === 'present'
      ? asOf.getFullYear() * 12 + asOf.getMonth()
      : stint.end.year * 12 + stint.end.month

  // Inclusive of start and end months
  return Math.max(0, endTotal - startTotal + 1)
}

export function getTotalExperienceMonths(asOf: Date = new Date()): number {
  return EXPERIENCE_STINTS.reduce((sum, stint) => sum + stintMonths(stint, asOf), 0)
}

/** e.g. 31 months → "2.5+", 24 months → "2+", 11 months → "1+" */
export function formatExperienceYears(months: number): string {
  if (months < 12) {
    return months <= 1 ? '<1' : `${Math.floor(months / 12) || 1}`
  }

  const years = months / 12
  const rounded = Math.floor(years * 2) / 2 // nearest 0.5 down

  if (rounded >= 1 && rounded === Math.floor(rounded)) {
    return `${Math.floor(rounded)}+`
  }

  return `${rounded.toFixed(1).replace(/\.0$/, '')}+`
}

export function getExperienceStats(asOf: Date = new Date()) {
  const totalMonths = getTotalExperienceMonths(asOf)

  return {
    totalMonths,
    yearsLabel: formatExperienceYears(totalMonths),
    companies: EXPERIENCE_STINTS.length,
  }
}
