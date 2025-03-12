import React, { useEffect } from 'react'

import clsx from 'clsx'

import styles from './Drawer.module.scss'

import useScrollLock from '@/hooks/use-scroll-lock'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  position?: 'left' | 'right' | 'top' | 'bottom'
  children: React.ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, position = 'left', children }) => {
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
      <div className={styles.drawerContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.drawerClose} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default Drawer
export type { DrawerProps }
