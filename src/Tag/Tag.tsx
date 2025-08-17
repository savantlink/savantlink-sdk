import { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import styles from './Tag.module.scss'

type TColor = 'primary' | 'gray' | 'success' | 'danger' | 'info' | 'warning' | 'secondary' | 'dark'
type TSkin = 'solid' | 'outline' | 'translucent'
type TSize = 'small' | 'medium'

type TagProps = {
  label: string
  skin?: TSkin
  color?: TColor
  size?: TSize
  isRounded?: boolean
} & HTMLAttributes<HTMLSpanElement>

const Tag = ({
  label,
  skin = 'solid',
  color = 'primary',
  size = 'medium',
  className,
  ...props
}: TagProps) => {
  const computedClasses = clsx(
    styles.tag,
    styles[skin],
    styles[color],
    styles[size],
    className
  )

  return (
    <span className={computedClasses} {...props}>
      {label}
    </span>
  )
}

Tag.displayName = 'Tag'

export default Tag
export type { TagProps, TColor, TSkin, TSize }
