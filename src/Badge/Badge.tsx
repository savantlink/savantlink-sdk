import { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Badge.module.scss'

type TColor = 'primary' | 'gray' | 'success' | 'successLight' | 'danger' | 'info' | 'warning' | 'secondary' | 'dark'
type TSkin = 'solid' | 'outline' | 'translucent'
type TSize = 'dot' | 'small' | 'medium'

type BadgeProps = {
  size: TSize
  count?: number
  maxCount?: number
  skin?: TSkin
  color?: TColor
} & HTMLAttributes<HTMLSpanElement>

const Badge = ({
  size = 'medium',
  count,
  maxCount = 999,
  skin = 'solid',
  color = 'primary',
  className,
  children,
  ...props
}: BadgeProps) => {
  const computedClasses = clsx(styles.badge, styles[skin], styles[color], styles[size], className)

  const getCount = () => {
    if (count) {
      if (count > maxCount) return `${maxCount}+`
      return count
    }
    return null
  }

  return (
    <div className={styles.badgeWrapper}>
      {children}
      <span className={clsx(computedClasses, { [styles.float]: children })} {...props}>
        {getCount()}
      </span>
    </div>
  )
}

Badge.displayName = 'Badge'

export default Badge
export type { BadgeProps }
