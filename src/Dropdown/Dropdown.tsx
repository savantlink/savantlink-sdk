import React, { useEffect, useMemo, useRef, useState } from 'react'

import { clsx } from 'clsx'

import styles from './Dropdown.module.scss'

import IconFactory from '@/IconFactory'
import Input from '@/Input'

interface Option {
  label: React.ReactNode
  value: string | number
}

interface DropdownProps {
  options: Option[]
  control: React.ReactNode // custom trigger element
  onChange?: (value: string | number) => void
  isFullWidth?: boolean
  hasSearch?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({ options, control, onChange, isFullWidth, hasSearch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => setIsOpen((prev) => !prev)

  const handleSelect = (value: string | number) => {
    onChange?.(value)
    setIsOpen(false)
    setSearchTerm('') // reset search when selecting
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Filter options by search term
  const filteredOptions = useMemo(() => {
    if (!searchTerm) return options
    return options.filter((option) => String(option.label).toLowerCase().includes(searchTerm.toLowerCase()))
  }, [options, searchTerm])

  return (
    <div ref={dropdownRef} className={clsx(styles.dropdown, { [styles.fullWidth]: isFullWidth })}>
      <div onClick={handleToggle} className={styles.dropdown__control}>
        {control}
      </div>

      {isOpen && (
        <ul className={styles.dropdown__menu}>
          {hasSearch && (
            <li className={styles.dropdown__search}>
              <Input
                className={styles.searchInput}
                icon={<IconFactory name="search" />}
                placeholder="Search product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </li>
          )}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li key={option.value} onClick={() => handleSelect(option.value)} className={styles.dropdown__item}>
                {option.label}
              </li>
            ))
          ) : (
            <li className={styles.dropdown__empty}>No results found</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
export type { DropdownProps, Option }
