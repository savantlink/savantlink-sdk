import { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react'

import clsx from 'clsx'

import styles from './Input.module.scss'
import EyeClosed from '../../icons/system/eye-closed.svg'
import Eye from '../../icons/system/eye.svg'

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
  required?: boolean
  icon?: ReactNode
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
      type,
      icon,
      required = false,
      ...props
    },
    ref
  ) => {
    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false)

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev)
    }

    // Determine the input type
    const inputType = type === 'password' && showPassword ? 'text' : type
    return (
      <div title={tooltip} className={clsx(styles.inputWrapper, className)}>
        {label && (
          <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
            {label}
            {required && <span className="asterick">*</span>}
          </label>
        )}
        <div className={styles.inputContainer}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <input
            id={id}
            ref={ref}
            type={inputType}
            className={clsx(styles.input, inputClassName, {
              [styles.inputError]: isError,
              [styles.inputSuccess]: isSuccess && !isError,
              [styles.hasIcon]: icon,
            })}
            aria-invalid={isError}
            {...props}
          />
          {/* Show/hide password icon for password inputs */}
          {type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.toggleButton}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeClosed className={styles.eyeIcon} /> : <Eye className={styles.eyeIcon} />}
            </button>
          )}
        </div>
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
