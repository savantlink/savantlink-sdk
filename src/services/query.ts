type QueryValue = string | number | boolean | null | undefined
type QueryParams = Record<string, QueryValue | QueryValue[]>

const createQueryParams = (values: QueryParams): URLSearchParams => {
  const params = new URLSearchParams()
  Object.entries(values).forEach(([key, rawValue]) => {
    const entries = Array.isArray(rawValue) ? rawValue : [rawValue]
    entries.forEach((value) => {
      if (value !== undefined && value !== null && value !== '') params.append(key, String(value))
    })
  })
  return params
}

export { createQueryParams }
export type { QueryParams, QueryValue }
