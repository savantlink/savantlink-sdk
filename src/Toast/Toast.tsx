import { useEffect } from 'react'

import styles from './Toast.module.scss'

import Typography from '@/Typography'


interface ToastProps {
  message: string
  variant: 'info' | 'success' | 'warning' | 'danger'
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
  onClose: () => void
}
const Toast = ({ message, variant = 'info', position = 'top-right', onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`${styles.toast} ${styles[`toast-${variant}`]} ${styles[`toast-${position}`]}`}>
      <div className={styles['toast-content']}>
        <Typography variant="regular">{message}</Typography>
      </div>
      <button className={styles['toast-close']} onClick={onClose}>
        &times;
      </button>
    </div>
  )
}

export default Toast
export type { ToastProps }
