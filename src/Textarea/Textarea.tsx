import React, { TextareaHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import styles from './Textarea.module.scss'

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> & {
  label?: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
  className?: string
  error?: string
  isError?: boolean
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  rows = 4,
  disabled = false,
  required = true,
  className,
  error,
  isError,
  ...props
}) => {
  return (
    <div className={clsx(styles.textareaContainer, className)}>
      {label && (
        <label>
          {label}
          {required && <span className="asterick">*</span>}
        </label>
      )}
      <textarea
        id={`textarea-${id}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
        className={`${isError ? styles.inputError : ''}`}
        {...props}
      />
      {error && <span className={clsx(styles.error)}>{error}</span>}
    </div>
  )
}

Textarea.displayName = 'Textarea'

export default Textarea
export type { TextareaProps }
