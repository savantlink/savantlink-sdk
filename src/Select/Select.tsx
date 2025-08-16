import React, { KeyboardEvent, ReactNode, useEffect, useMemo, useRef, useState } from 'react'

import clsx from 'clsx'

import styles from './Select.module.scss'
import ChevronDown from '../../icons/system/chevron-down.svg'
import Close from '../../icons/system/close.svg'

type SelectOptions = string | string[] | null

interface SelectProps {
  label: string | ReactNode
  options: { label: string | number; value: string | number }[]
  onChange: (selectedValue: SelectOptions) => void
  placeholder?: string
  multiple?: boolean
  value?: SelectOptions
  required?: boolean
  className?: string
  disabled?: boolean
  readOnly?: boolean
  isError?: boolean // New: Error state
  errorMessage?: string // New: Custom error message
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  placeholder = 'Select an option',
  multiple = false,
  value,
  onChange,
  required = false,
  className,
  disabled = false,
  readOnly = false,
  isError = false, // Default: false
  errorMessage = 'This field is required', // Default message
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const selectRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Reset focus when dropdown closes
  useEffect(() => {
    if (!isOpen) setFocusedIndex(-1)
  }, [isOpen])

  // Memoize filtered options for performance
  const memoizedOptions = useMemo(() => options, [options])

  const handleSelect = (selectedValue: string) => {
    if (disabled || readOnly) return
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : []
      const newValues = currentValues.includes(selectedValue)
        ? currentValues.filter((val) => val !== selectedValue)
        : [...currentValues, selectedValue]
      onChange(newValues.length > 0 ? newValues : null)
    } else {
      onChange(selectedValue)
      setIsOpen(false)
    }
  }

  const removeSelected = (selectedValue: string, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent triggering dropdown toggle
    if (disabled || readOnly) return
    if (multiple && Array.isArray(value)) {
      const newValues = value.filter((val) => val !== selectedValue)
      onChange(newValues.length > 0 ? newValues : null)
    }
  }

  const clearSelected = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (disabled || readOnly) return
    onChange(null)
  }

  const isSelected = (optionValue: string) => {
    if (multiple) return Array.isArray(value) && value.includes(optionValue)
    return value === optionValue
  }

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled || readOnly) return
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        setIsOpen(!isOpen)
        break
      case 'Escape':
        setIsOpen(false)
        break
      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) setIsOpen(true)
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0))
        break
      case 'ArrowUp':
        e.preventDefault()
        if (!isOpen) setIsOpen(true)
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1))
        break
      default:
        break
    }
  }

  return (
    <div
      className={clsx(styles.select, className, {
        [styles.selectOpen]: isOpen,
        [styles.selectDisabled]: disabled,
        [styles.selectReadOnly]: readOnly,
      })}
      ref={selectRef}
    >
      {label && (
        <label className={styles.inputLabel}>
          {label}
          {required && <span className="asterick">*</span>}
        </label>
      )}
      <div
        className={clsx(styles.selectTrigger, styles[`select__${multiple ? 'multiple' : 'single'}`], {
          [styles.selectError]: isError,
        })}
        onClick={() => !disabled && !readOnly && setIsOpen(!isOpen)}
        tabIndex={disabled || readOnly ? -1 : 0}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-invalid={isError}
        aria-describedby={isError ? 'error-message' : undefined}
        onKeyDown={handleKeyDown}
      >
        {multiple && Array.isArray(value) && value.length > 0 ? (
          <div className={styles.multipleWrapper}>
            <div className={styles.selectTags}>
              {value.map((val) => (
                <div key={val} className={styles.selectTag}>
                  {memoizedOptions.find((opt) => opt.value === val)?.label}
                  {!disabled && !readOnly && (
                    <span
                      className={styles.selectTagRemove}
                      onClick={(e) => removeSelected(val, e)}
                      aria-label={`Remove ${val}`}
                    >
                      <Close />
                    </span>
                  )}
                </div>
              ))}
            </div>
            {!disabled && !readOnly && (
              <div onClick={clearSelected} aria-label="Clear all">
                <Close />
              </div>
            )}
          </div>
        ) : !multiple && value ? (
          <div className={styles.singleValue}>{memoizedOptions.find((opt) => opt.value === value)?.label}</div>
        ) : (
          <span className={styles.placeholder}>{placeholder}</span>
        )}
        {!disabled && !readOnly && (
          <span className={styles.chevron}>
            <ChevronDown className={isOpen ? styles.chevron__open : ''} />
          </span>
        )}
      </div>
      {isOpen && !disabled && !readOnly && (
        <div className={styles.selectDropdown} role="listbox">
          {memoizedOptions.map((option, index) => (
            <div
              key={option.value}
              className={clsx(styles.selectOption, {
                [styles.selectOptionSelected]: isSelected(option.value),
                [styles.selectOptionFocused]: index === focusedIndex,
              })}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={isSelected(option.value)}
              tabIndex={0}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {isError && !isOpen && (
        <span id="error-message" className="error">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default Select
export type { SelectProps, SelectOptions }
