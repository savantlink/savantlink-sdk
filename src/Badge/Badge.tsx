import { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import styles from './Badge.module.scss'

type TColor = 'primary' | 'gray' | 'success' | 'danger' | 'info' | 'warning' | 'secondary' | 'dark'
type TSkin = 'solid' | 'outline' | 'translucent'
type TSize = 'small' | 'medium'

type BadgeProps = {
  count: number
  maxCount?: number
  skin?: TSkin
  color?: TColor
  size?: TSize
} & HTMLAttributes<HTMLSpanElement>

const Badge = ({
  count,
  maxCount = 999,
  skin = 'solid',
  color = 'primary',
  size = 'medium',
  className,
  children,
  ...props
}: BadgeProps) => {
  const computedClasses = clsx(styles.badge, styles[skin], styles[color], styles[size], className)

  const getCount = () => {
    if (count > maxCount) return `${maxCount}+`
    return count
  }

  return (
    <div className={styles.wrapper}>
      {children}
      <span className={clsx(computedClasses, { [styles.float]: children })} {...props}>
        {getCount()}
      </span>
    </div>
  )
}

Badge.displayName = 'Badge'

export default Badge
export type { BadgeProps, TColor, TSkin, TSize }
