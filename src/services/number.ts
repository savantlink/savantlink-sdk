import { Decimal } from 'decimal.js-light'

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_: number, index: number) => index + start)
}

type CalculationOperator = 'add' | 'subtract' | 'multiply' | 'divide'

const calculateAmount = (firstOperand: number, secondOperand: number, operator: CalculationOperator): Decimal => {
  const first = new Decimal(firstOperand)
  const second = new Decimal(secondOperand)

  let result: Decimal

  switch (operator) {
    case 'add':
      result = first.plus(second)
      break

    case 'subtract':
      result = first.minus(second)
      break

    case 'multiply':
      result = first.times(second)
      break

    case 'divide':
      if (second.isZero()) {
        throw new Error('Cannot divide by zero.')
      }

      result = first.dividedBy(second)
      break

    default: {
      const exhaustiveCheck: never = operator
      throw new Error(`Unsupported calculation operator: ${exhaustiveCheck}`)
    }
  }

  return result.toDecimalPlaces(2, Decimal.ROUND_HALF_UP)
}

export { range, calculateAmount }
