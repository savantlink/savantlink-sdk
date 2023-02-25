import { InputHTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Input.module.scss'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> & {
  inputId: string
  isSuccess?: boolean
  isError?: boolean
  error?: string
  hint?: string
  label?: string
  tooltip?: string
  errorId?: string
  labelId?: string
  hintId?: string
  errorClassName?: string
  labelClassName?: string
  hintClassName?: string
}

const Input = ({
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
}: InputProps) => {
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
        <span id={errorId} className={clsx(errorClassName, styles.error)}>
          {error}
        </span>
      )}
      {!error && hint && (
        <span id={hintId} className={clsx(hintClassName, styles.hint)}>
          {hint}
        </span>
      )}
    </div>
  )
}

Input.displayName = 'Input'

export default Input
export type { InputProps }
