import { ReactNode, useEffect } from 'react'

import { clsx } from 'clsx'

import styles from './Toast.module.scss'
import CloseIcon from '../../icons/system/close.svg'

import Typography from '@/Typography'

interface ToastProps {
  message: ReactNode
  variant: 'info' | 'success' | 'warning' | 'danger'
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
  onClose: () => void
  icon?: ReactNode
  className?: string
  timeoutInterval?: number
}
const Toast = ({
  message,
  variant = 'info',
  position = 'top-right',
  onClose,
  icon,
  className,
  timeoutInterval = 5000,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, timeoutInterval)

    return () => clearTimeout(timer)
  }, [onClose, timeoutInterval])

  return (
    <div className={clsx(styles.toast, className, styles[`toast-${variant}`], styles[`toast-${position}`])}>
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
