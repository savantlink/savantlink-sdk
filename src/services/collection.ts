import { titleCase } from './format'

type SortDirection = 'asc' | 'desc'
interface SortConfig<T> {
  key: keyof T
  direction: SortDirection
}

const sortData = <T>(data: readonly T[], config?: SortConfig<T> | null): T[] => {
  if (!config) return [...data]
  const direction = config.direction === 'asc' ? 1 : -1
  return [...data].sort((left, right) => {
    const leftValue = left[config.key]
    const rightValue = right[config.key]
    if (leftValue < rightValue) return -1 * direction
    if (leftValue > rightValue) return direction
    return 0
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
