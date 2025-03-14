import React from 'react'

import clsx from 'clsx'

import styles from './Textarea.module.scss'

interface TextareaProps {
  id: string
  label?: string
  value: string
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
  disabled?: boolean
  required?: boolean
  className?: string
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
      />
    </div>
  )
}

Textarea.displayName = 'Textarea'

export default Textarea
export type { TextareaProps }
