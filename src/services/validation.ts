const NUBAN_WEIGHTS = [3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3]

const isValidNuban = (accountNumber: string, bankCode: string): boolean => {
  if (!/^\d{10}$/.test(accountNumber) || !/^\d{3}$/.test(bankCode)) return false
  const digits = `${bankCode}${accountNumber.slice(0, 9)}`.split('').map(Number)
  const weightedSum = digits.reduce((sum, digit, index) => sum + digit * NUBAN_WEIGHTS[index], 0)
  return (10 - (weightedSum % 10)) % 10 === Number(accountNumber[9])
}

export { isValidNuban }
