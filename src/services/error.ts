type ErrorRecord = Record<string, unknown>

const isRecord = (value: unknown): value is ErrorRecord => typeof value === 'object' && value !== null

const extractErrorMessage = (value: unknown): string | undefined => {
  if (typeof value === 'string' && value.trim()) return value
  if (!isRecord(value)) return undefined

  if (Array.isArray(value.errors)) {
    const messages = value.errors
      .map(extractErrorMessage)
      .filter((message): message is string => Boolean(message))
    if (messages.length) return messages.join('\n')
  }

  for (const key of ['error', 'message', 'msg', 'detail'] as const) {
    const message = extractErrorMessage(value[key])
    if (message) return message
  }
  return extractErrorMessage(value.data)
}

const getApiErrorMessage = (error: unknown, fallback = 'Something went wrong. Please try again.'): string => {
  if (isRecord(error) && isRecord(error.response)) {
    const responseMessage = extractErrorMessage(error.response.data)
    if (responseMessage) return responseMessage
  }
  return extractErrorMessage(error) ?? fallback
}

export { extractErrorMessage, getApiErrorMessage }
