import { ReactNode, useEffect } from 'react'

import styles from './Toast.module.scss'
import CloseIcon from '../../icons/system/close.svg'

import Typography from '@/Typography'

interface ToastProps {
  message: string
  variant: 'info' | 'success' | 'warning' | 'danger'
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
  onClose: () => void
  icon?: ReactNode
}
const Toast = ({ message, variant = 'info', position = 'top-right', onClose, icon }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`${styles.toast} ${styles[`toast-${variant}`]} ${styles[`toast-${position}`]}`}>
      <div className={styles['toast-content']}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <Typography variant="regular">{message}</Typography>
      </div>
      <CloseIcon className={styles['toast-close']} onClick={onClose} />
    </div>
  )
}

Toast.displayName = 'Toast'

export default Toast
export type { ToastProps }
