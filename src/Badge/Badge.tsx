import { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Badge.module.scss'

type TColor = 'primary' | 'gray' | 'success' | 'danger' | 'info' | 'warning' | 'secondary' | 'dark'
type TSkin = 'solid' | 'outline' | 'translucent'
type TSize = 'small' | 'medium'

type BadgeProps = {
  label: string
  skin?: TSkin
  color?: TColor
  size?: TSize
  isRounded?: boolean
} & HTMLAttributes<HTMLSpanElement>

const Badge = ({
  label,
  skin = 'solid',
  color = 'primary',
  size = 'medium',
  isRounded,
  className,
  ...props
}: BadgeProps) => {
  const computedClasses = clsx(
    styles.badge,
    styles[skin],
    styles[color],
    styles[size],
    { [styles.rounded]: isRounded },
    className
  )

  return (
    <span className={computedClasses} {...props}>
      {label}
    </span>
  )
}

Badge.displayName = 'Badge'

export default Badge
export type { BadgeProps }
