import { ChangeEvent, FC, TextareaHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import styles from './Textarea.module.scss'

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> & {
  label?: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
  className?: string
  error?: string
  isError?: boolean
}

const Textarea: FC<TextareaProps> = ({
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
}) => (
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
      className={clsx({ [styles.inputError]: isError })}
      {...props}
    />
    {error && <span className={styles.error}>{error}</span>}
  </div>
)

Textarea.displayName = 'Textarea'

export default Textarea
export type { TextareaProps }
