const NUBAN_WEIGHTS = [3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3]

const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const isValidLength = (value: string, minLength = 8): boolean => value.length >= minLength

const isValidPin = (pin: string, length = 4): boolean => new RegExp(`^\\d{${length}}$`).test(pin)

const isValidNuban = (accountNumber: string, bankCode: string): boolean => {
  if (!/^\d{10}$/.test(accountNumber) || !/^\d{3}$/.test(bankCode)) return false
  const digits = `${bankCode}${accountNumber.slice(0, 9)}`.split('').map(Number)
  const weightedSum = digits.reduce((sum, digit, index) => sum + digit * NUBAN_WEIGHTS[index], 0)
  return (10 - (weightedSum % 10)) % 10 === Number(accountNumber[9])
}

export { isValidEmail, isValidLength, isValidNuban, isValidPin }
