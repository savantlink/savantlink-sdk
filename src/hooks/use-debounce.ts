import { useEffect, useState } from 'react'

const useDebounce = <T>(value: T, delayMs = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = window.setTimeout(() => setDebouncedValue(value), delayMs)
    return () => window.clearTimeout(timeout)
  }, [delayMs, value])

  return debouncedValue
}

export { useDebounce }
