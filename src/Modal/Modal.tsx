import React, { useEffect } from 'react'

import clsx from 'clsx'

import styles from './Modal.module.scss'

import useScrollLock from '@/hooks/use-scroll-lock'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  position?: 'top' | 'center'
  hasCancelBtn?: boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, position = 'center', hasCancelBtn = 'false' }) => {
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
    <div className={clsx(styles.modalOverlay, styles[position], { [styles.open]: isOpen })} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        {hasCancelBtn && (
          <button className={styles.modalClose} onClick={onClose}>
            &times;
          </button>
        )}
      </div>
    </div>
  )
}

export default Modal
export type { ModalProps }
