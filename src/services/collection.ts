import { titleCase } from './format'

type SortDirection = 'asc' | 'desc'
interface SortConfig<T> {
  key: keyof T | string
  direction: SortDirection
}

const sortData = <T>(data: readonly T[], config?: SortConfig<T> | null): T[] => {
  if (!config) return [...data]
  const direction = config.direction === 'asc' ? 1 : -1
  return [...data].sort((left, right) => {
    const leftValue = (left as Record<string, unknown>)[String(config.key)]
    const rightValue = (right as Record<string, unknown>)[String(config.key)]
    if (typeof leftValue === 'number' && typeof rightValue === 'number') {
      return (leftValue - rightValue) * direction
    }
    return String(leftValue ?? '').localeCompare(String(rightValue ?? '')) * direction
  })
}

interface NamedOptionSource {
  name: string
  slug: string
}

const formatArrayToOptions = <T extends NamedOptionSource>(items: readonly T[]) =>
  items.map((item) => ({ label: titleCase(item.name), value: item.slug }))

export { formatArrayToOptions, sortData }
export type { NamedOptionSource, SortConfig, SortDirection }
