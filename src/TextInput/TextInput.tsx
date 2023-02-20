import { InputHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

import styles from './TextInput.module.scss'

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> & {
  inputId: string
  isSuccess?: boolean
  isError?: boolean
  error?: ReactNode
  hint?: ReactNode
  label?: ReactNode
  tooltip?: string
  errorId?: string
  labelId?: string
  hintId?: string
  errorClassName?: string
  labelClassName?: string
  hintClassName?: string
  // type?: 'text' | 'search' | 'email' | 'password'
}

const TextInput = ({
  inputId,
  isSuccess,
  isError,
  error,
  label,
  hint,
  tooltip,
  errorId,
  labelId,
  hintId,
  className,
  errorClassName,
  labelClassName,
  hintClassName,
  ...props
}: TextInputProps) => {
  return (
    <div title={tooltip} className={clsx(className, styles.wrapper)}>
      {label && (
        <label id={labelId} htmlFor={inputId} className={clsx(labelClassName, styles.label)}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(className, styles.input, {
          [styles.inputError]: isError,
          [styles.inputSuccess]: isSuccess && !isError,
        })}
        aria-invalid={isError}
        {...props}
      />
      {error && (
        <label id={errorId} className={clsx(errorClassName, styles.error)}>
          {error}
        </label>
      )}
      {!error && hint && (
        <label id={hintId} className={clsx(hintClassName, styles.hint)}>
          {hint}
        </label>
      )}
    </div>
  )
}

export default TextInput
export type { TextInputProps }
