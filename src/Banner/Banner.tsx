import type { AnchorHTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Banner.module.scss'

import Typography from '@/Typography'

type TColor = 'primary' | 'gray' | 'success' | 'danger' | 'info' | 'warning' | 'secondary' | 'dark'

type BannerProps = AnchorHTMLAttributes<HTMLAnchorElement> & { color: TColor }

const Banner = ({ className, color, ...props }: BannerProps) => {
  const computedClasses = clsx(styles.banner, styles[color], className)
  return (
    <article>
      <Typography tag={props.href ? 'a' : 'p'} weight="default" className={computedClasses} {...props} />
    </article>
  )
}

Banner.displayName = 'Banner'

export default Banner
export type { BannerProps }
