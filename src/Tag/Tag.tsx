import { HTMLAttributes, ReactNode } from 'react'

import { clsx } from 'clsx'

import styles from './Tag.module.scss'

type TColor =
  | 'primary'
  | 'gray'
  | 'success'
  | 'danger'
  | 'info'
  | 'warning'
  | 'secondary'
  | 'dark'
  | 'orange'
  | 'teal'
  | 'pink'
  | 'indigo'
  | 'cyan'
  | 'brown'
type TSkin = 'solid' | 'outline' | 'translucent'
type TSize = 'small' | 'medium'

type TagProps = {
  label: ReactNode
  skin?: TSkin
  color?: TColor
  size?: TSize
  isRounded?: boolean
  hasBorder?: boolean
} & HTMLAttributes<HTMLSpanElement>

const Tag = ({
  label,
  skin = 'solid',
  color = 'primary',
  size = 'medium',
  isRounded = false,
  hasBorder = false,
  className,
  ...props
}: TagProps) => {
  const computedClasses = clsx(
    styles.tag,
    styles[skin],
    styles[color],
    styles[size],
    {
      [styles.rounded]: isRounded,
      [styles.hasBorder]: hasBorder && skin === 'translucent',
    },
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
