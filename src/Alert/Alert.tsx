import { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Alert.module.scss'

import Typography from '@/Typography'

type TColor = 'danger'

type AlertProps = {
  title?: string
  text?: string
  color?: TColor
} & HTMLAttributes<HTMLDivElement>

const Alert = ({ title, text, color = 'danger', className, ...props }: AlertProps) => {
  const computedClasses = clsx(styles.alert, styles[color], className)
  return (
    <div className={computedClasses} role="alert" {...props}>
      {title && (
        <Typography tag="h1" variant="h6" className={styles.title}>
          {title}
        </Typography>
      )}
      {text && (
        <Typography tag="p" variant="small" className={styles.text}>
          {text}
        </Typography>
      )}
    </div>
  )
}

export default Alert
export type { AlertProps }
