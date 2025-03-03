import { forwardRef, InputHTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Input.module.scss'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> & {
  label?: string
  hint?: string
  error?: string
  isSuccess?: boolean
  isError?: boolean
  tooltip?: string
  className?: string
  labelClassName?: string
  inputClassName?: string
  hintClassName?: string
  errorClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      hint,
      error,
      isSuccess,
      isError,
      tooltip,
      className,
      labelClassName,
      inputClassName,
      hintClassName,
      errorClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div title={tooltip} className={clsx(styles.inputWrapper, className)}>
        {label && (
          <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={clsx(styles.input, inputClassName, {
            [styles.inputError]: isError,
            [styles.inputSuccess]: isSuccess && !isError,
          })}
          aria-invalid={isError}
          {...props}
        />
        {error ? (
          <span className={clsx(styles.error, errorClassName)}>{error}</span>
        ) : (
          hint && <span className={clsx(styles.hint, hintClassName)}>{hint}</span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
export type { InputProps }
