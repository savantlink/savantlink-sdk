import React, { ReactNode, useState } from 'react'

import clsx from 'clsx'

import styles from './PhoneInput.module.scss'

import { countryCodes } from '@/services/data/country'

interface PhoneInputProps {
  id: string
  name?: string
  value: string
  onChange: (value: string) => void
  onCountryCodeChange: (code: string) => void
  placeholder?: string
  label?: string | ReactNode
  error?: boolean
  errorMessage?: string
  required?: boolean
  className?: string
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  onCountryCodeChange,
  placeholder = 'Enter your phone number',
  label = 'Phone Number',
  error,
  errorMessage = 'Invalid phone number',
  required = false,
  name,
  className,
}) => {
  const [isValid, setIsValid] = useState(true)
  const [selectedCountryCode, setSelectedCountryCode] = useState('+234')

  // Validate phone number (basic validation)
  const validatePhoneNumber = (phone: string) => {
    const regex = /^[0-9]{10}$/ // Example: 10-digit phone number
    return regex.test(phone)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    onChange(inputValue)
    setIsValid(validatePhoneNumber(inputValue))
  }

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value
    setSelectedCountryCode(code)
    onCountryCodeChange(code)
  }

  return (
    <div className={clsx(styles.phoneInput, className)}>
      {label && (
        <label className="inputLabel">
          {label}
          {required && <span className="asterick">*</span>}
        </label>
      )}
      <div className={clsx(styles.inputContainer, { [styles.invalid]: !isValid, [styles.inputError]: error })}>
        <select value={selectedCountryCode} onChange={handleCountryCodeChange} className={styles.countryCode}>
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.symbol} {country.code}
            </option>
          ))}
        </select>
        <input
          name={name}
          type="tel"
          value={value}
          onChange={handlePhoneNumberChange}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
      {!isValid || (error && <p className={styles.error}>{errorMessage}</p>)}
    </div>
  )
}

PhoneInput.displayName = 'PhoneInput'

export default PhoneInput
export type { PhoneInputProps }
