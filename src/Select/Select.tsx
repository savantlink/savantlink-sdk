import React, { useEffect, useRef, useState } from 'react'

import styles from './Select.module.scss'

type SelectOptions = string | string[] | null
interface SelectProps {
  label: string
  options: { label: string; value: string }[]
  onChange: (selectedValue: SelectOptions) => void
  placeholder?: string
  multiple?: boolean
  value?: SelectOptions
  required?: boolean
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  placeholder = 'Select an option',
  multiple = false,
  value,
  onChange,
  required = false,
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
    if (multiple && Array.isArray(value)) {
      const newValues = value.filter((val) => val !== selectedValue)

      onChange(newValues.length > 0 ? newValues : null)
    }
  }

  const clearSelected = () => {
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
    <div className={`${styles.select} ${isOpen ? styles.selectOpen : ''}`} ref={selectRef}>
      {label && (
        <label className="inputLabel">
          {label}
          {required && <span className="asterick">*</span>}
        </label>
      )}
      <div className={styles.selectTrigger} onClick={() => setIsOpen(!isOpen)}>
        {multiple && Array.isArray(value) && value.length > 0 && (
          <>
            <div className={styles.selectTags}>
              {value.map((val) => (
                <div key={val} className={styles.selectTag}>
                  {options.find((opt) => opt.value === val)?.label}
                  <span className={styles.selectTagRemove} onClick={() => removeSelected(val)}>
                    &times;
                  </span>
                </div>
              ))}
            </div>
            <div onClick={clearSelected}>&times;</div>
          </>
        )}
        {!multiple && value && options.find((opt) => opt.value === value)?.label}
        {!value && <span className={styles.placeholder}>{placeholder}</span>}
      </div>
      {isOpen && (
        <div className={styles.selectDropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.selectOption} ${isSelected(option.value) ? styles.selectOptionSelected : ''} ${
                multiple && isSelected(option.value) ? styles.selectOptionDisabled : ''
              }`}
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
