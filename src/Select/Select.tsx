import React, { ReactNode, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import styles from './Select.module.scss'
import ChevronDown from '../../icons/system/chevron-down.svg'

type SelectOptions = string | string[] | null

interface SelectProps {
  label: string | ReactNode
  options: { label: string; value: string }[]
  onChange: (selectedValue: SelectOptions) => void
  placeholder?: string
  multiple?: boolean
  value?: SelectOptions
  required?: boolean
  className?: string
  disabled?: boolean // New prop for disabled state
  readOnly?: boolean // New prop for read-only state
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
  disabled = false, // Default to false
  readOnly = false, // Default to false
}) => {
  const [isOpen, setIsOpen] = useState(false)
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

  const handleSelect = (selectedValue: string) => {
    if (disabled || readOnly) return // Do nothing if disabled or read-only
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : []
      const newValues = currentValues.includes(selectedValue)
        ? currentValues.filter((val) => val !== selectedValue) // Deselect if already selected
        : [...currentValues, selectedValue] // Add to selection
      onChange(newValues)
    } else {
      onChange(selectedValue)
      setIsOpen(false) // Close dropdown after selection
    }
  }

  const removeSelected = (selectedValue: string) => {
    if (disabled || readOnly) return // Do nothing if disabled or read-only
    if (multiple && Array.isArray(value)) {
      const newValues = value.filter((val) => val !== selectedValue)
      onChange(newValues.length > 0 ? newValues : null)
    }
  }

  const clearSelected = () => {
    if (disabled || readOnly) return // Do nothing if disabled or read-only
    if (multiple && Array.isArray(value)) {
      onChange(null)
    }
  }

  const isSelected = (optionValue: string) => {
    if (multiple) {
      return Array.isArray(value) && value.includes(optionValue)
    }
    return value === optionValue
  }

  return (
    <div
      className={clsx(styles.select, className, {
        [styles.selectOpen]: isOpen,
        [styles.selectDisabled]: disabled, // Add disabled styling
        [styles.selectReadOnly]: readOnly, // Add read-only styling
      })}
      ref={selectRef}
    >
      {label && (
        <label className="inputLabel">
          {label}
          {required && <span className="asterick">*</span>}
        </label>
      )}
      <div
        className={styles.selectTrigger}
        onClick={() => !disabled && !readOnly && setIsOpen(!isOpen)} // Prevent opening if disabled or read-only
      >
        {multiple && Array.isArray(value) && value.length > 0 && (
          <>
            <div className={styles.selectTags}>
              {value.map((val) => (
                <div key={val} className={styles.selectTag}>
                  {options.find((opt) => opt.value === val)?.label}
                  {!disabled &&
                    !readOnly && ( // Only show remove button if not disabled or read-only
                      <span className={styles.selectTagRemove} onClick={() => removeSelected(val)}>
                        &times;
                      </span>
                    )}
                </div>
              ))}
            </div>
            {!disabled &&
              !readOnly && ( // Only show clear button if not disabled or read-only
                <div onClick={clearSelected}>&times;</div>
              )}
          </>
        )}
        {!multiple && value && options.find((opt) => opt.value === value)?.label}
        {!value && <span className={styles.placeholder}>{placeholder}</span>}
        {!disabled && !readOnly && <ChevronDown />} {/* Only show chevron if not disabled or read-only */}
      </div>
      {isOpen &&
        !disabled &&
        !readOnly && ( // Only show dropdown if not disabled or read-only
          <div className={styles.selectDropdown}>
            {options.map((option) => (
              <div
                key={option.value}
                className={clsx(styles.selectOption, {
                  [styles.selectOptionSelected]: isSelected(option.value),
                  [styles.selectOptionDisabled]: multiple && isSelected(option.value),
                })}
                onClick={() => !(multiple && isSelected(option.value)) && handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default Select
export type { SelectProps, SelectOptions }
