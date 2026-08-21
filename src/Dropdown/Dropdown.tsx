import { FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { clsx } from 'clsx'
import { Search } from 'lucide-react'
import { createPortal } from 'react-dom'

import styles from './Dropdown.module.scss'

import Input from '@/Input'

interface Option {
  label: ReactNode
  value: string | number
}

interface DropdownProps {
  options: Option[]
  control: ReactNode
  onChange?: (value: string | number) => void
  isFullWidth?: boolean
  hasSearch?: boolean
}

const Dropdown: FC<DropdownProps> = ({ options, control, onChange, isFullWidth, hasSearch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    width: 220,
  })

  const updateMenuPosition = useCallback(() => {
    if (!dropdownRef.current) return

    const rect = dropdownRef.current.getBoundingClientRect()

    const minWidth = isFullWidth ? rect.width : 220
    const viewportPadding = 12

    const width = Math.min(Math.max(minWidth, rect.width), window.innerWidth - viewportPadding * 2)

    const left = Math.min(Math.max(rect.right - width, viewportPadding), window.innerWidth - width - viewportPadding)

    setMenuPosition({
      top: rect.bottom + 8,
      left,
      width,
    })
  }, [isFullWidth])

  const handleToggle = () => {
    if (!isOpen) {
      updateMenuPosition()
    }

    setIsOpen((prev) => !prev)
  }

  const handleSelect = (value: string | number) => {
    onChange?.(value)
    setIsOpen(false)
    setSearchTerm('')
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (dropdownRef.current && !dropdownRef.current.contains(target) && !menuRef.current?.contains(target)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    updateMenuPosition()

    window.addEventListener('resize', updateMenuPosition)
    window.addEventListener('scroll', updateMenuPosition, true)

    return () => {
      window.removeEventListener('resize', updateMenuPosition)
      window.removeEventListener('scroll', updateMenuPosition, true)
    }
  }, [isOpen, updateMenuPosition])

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
      {isOpen &&
        createPortal(
          <ul
            ref={menuRef}
            className={styles.dropdown__menu}
            style={{
              top: menuPosition.top,
              left: menuPosition.left,
              width: menuPosition.width,
            }}
          >
            {hasSearch && (
              <li className={styles.dropdown__search}>
                <Input
                  className={styles.searchInput}
                  icon={<Search />}
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
          </ul>,
          document.body
        )}
    </div>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown
export type { DropdownProps, Option }
