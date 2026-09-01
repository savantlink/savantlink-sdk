import { formatCurrency, formatDate, formatTime, titleCase } from './format'

describe('format helpers', () => {
  it('converts slugs and normalized text to title case', () => {
    expect(titleCase('PAST_DUE-status')).toBe('Past Due Status')
  })

  it('formats NGN with the naira symbol and two decimal places', () => {
    expect(formatCurrency(1250)).toBe('₦1,250.00')
  })

  it('formats currency with configurable currency and locale', () => {
    expect(formatCurrency(1250, 'USD', 'en-US')).toBe('$1,250.00')
  })

  it('formats short and long dates', () => {
    const date = new Date(2026, 8, 1, 14, 5, 9)
    expect(formatDate(date, 'short')).toBe('01 Sept 2026')
    expect(formatDate(date, 'long')).toBe('01 September 2026')
  })

  it('formats time', () => {
    expect(formatTime(new Date(2026, 8, 1, 14, 5, 9), 'en-GB')).toBe('14:05:09')
  })

  it('rejects invalid dates', () => {
    expect(() => formatDate('not-a-date')).toThrow('Invalid date')
  })
})
