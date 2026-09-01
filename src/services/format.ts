export type DateFormat = 'short' | 'long'
export type DateInput = Date | string | number

const getTagColor = {
  active: 'success',
  inactive: 'danger',
} as const

const titleCase = (value: string): string =>
  value
    .trim()
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .toLocaleLowerCase()
    .replace(/(^|\s)\S/g, (letter) => letter.toLocaleUpperCase())

const formatSlugToString = (value: string): string => titleCase(value.replace(/[-_]+/g, ' '))

const replacePlaceholder = (template: string, ...replacements: string[]): string =>
  template.replace(/{(\d+)}/g, (match, index: string) => replacements[Number(index)] ?? match)

const formatCurrency = (
  amount: number,
  currency = 'NGN',
  locale = 'en-US',
  options: Omit<Intl.NumberFormatOptions, 'style' | 'currency'> = {}
): string =>
  new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount)

const toValidDate = (value: DateInput): Date => {
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) throw new RangeError('Invalid date')
  return date
}

const formatDate = (value: DateInput, format: DateFormat = 'short', locale = 'en-GB'): string =>
  new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: format === 'long' ? 'long' : 'short',
    year: 'numeric',
  }).format(toValidDate(value))

const formatTime = (
  value: DateInput,
  locale = 'en-US',
  options: Intl.DateTimeFormatOptions = {}
): string =>
  new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    ...options,
  }).format(toValidDate(value))

const formatDateTime = (
  value: DateInput,
  locale = 'en-GB',
  options: Intl.DateTimeFormatOptions = {}
): string =>
  new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    ...options,
  }).format(toValidDate(value))

const getRelativeTime = (value: DateInput, relativeTo: DateInput = Date.now(), locale = 'en'): string => {
  const elapsedSeconds = Math.round((toValidDate(value).getTime() - toValidDate(relativeTo).getTime()) / 1000)
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ['year', 31_536_000],
    ['month', 2_592_000],
    ['week', 604_800],
    ['day', 86_400],
    ['hour', 3_600],
    ['minute', 60],
  ]
  const unit = units.find(([, seconds]) => Math.abs(elapsedSeconds) >= seconds)
  return unit ? formatter.format(Math.round(elapsedSeconds / unit[1]), unit[0]) : 'just now'
}

const currencyFormatter = formatCurrency
// Kept for consumers already using the common misspelling.
const currencyFormmater = formatCurrency

export {
  currencyFormmater,
  currencyFormatter,
  formatCurrency,
  formatDate,
  formatDateTime,
  formatSlugToString,
  formatTime,
  getRelativeTime,
  getTagColor,
  replacePlaceholder,
  titleCase,
}
