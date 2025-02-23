const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_: any, index: number) => index + start)
}

export { range }
