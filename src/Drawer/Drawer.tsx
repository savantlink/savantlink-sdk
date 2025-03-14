import React, { useEffect } from 'react'

import clsx from 'clsx'

import styles from './Drawer.module.scss'

import useScrollLock from '@/hooks/use-scroll-lock'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  position?: 'left' | 'right' | 'top' | 'bottom'
  children: React.ReactNode
  showDefaultClose?: boolean
  className?: string
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = 'left',
  children,
  showDefaultClose,
  className,
}) => {
  useScrollLock(isOpen)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={clsx(styles.drawerOverlay, styles[position], { [styles.open]: isOpen })} onClick={onClose}>
      <div className={clsx(styles.drawerContent, className)} onClick={(e) => e.stopPropagation()}>
        {children}
        {showDefaultClose && (
          <button className={styles.drawerClose} onClick={onClose}>
            &times;
          </button>
        )}
      </div>
    </div>
  )
}

Drawer.displayName = 'Drawer'

export default Drawer
export type { DrawerProps }
