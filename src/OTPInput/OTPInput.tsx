import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, ClipboardEvent, FC, KeyboardEvent } from 'react'

import { clsx } from 'clsx'

import styles from './OTPInput.module.scss'

interface OTPInputProps {
  length?: number
  onChange: (otp: string) => void
  autoFocus?: boolean
  className?: string
  inputClassName?: string
}

const OTPInput: FC<OTPInputProps> = ({
  length = 6,
  onChange,
  autoFocus = true,
  className = '',
  inputClassName = '',
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''))
  const inputRefs = useRef<HTMLInputElement[]>([])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    onChange(newOtp.join(''))

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasteData = e.clipboardData.getData('text').slice(0, length)
    const newOtp = [...otp]

    pasteData.split('').forEach((char, i) => {
      if (i < length && /^\d*$/.test(char)) {
        newOtp[i] = char
      }
    })

    setOtp(newOtp)
    onChange(newOtp.join(''))
  }

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [autoFocus])

  return (
    <div className={clsx(styles.otpContainer, className)}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          ref={(el) => {
            if (el) {
              inputRefs.current[index] = el
            }
          }}
          className={clsx(styles.otpInput, inputClassName)}
        />
      ))}
    </div>
  )
}
OTPInput.displayName = 'OTPInput'

export default OTPInput
export type { OTPInputProps }
