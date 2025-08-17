import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import styles from './Typography.module.scss'

type TypographyProps = HTMLAttributes<HTMLElement> & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'div' | 'a'
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'large' | 'regular' | 'small' | 'label'
  weight?: 'default' | 'thin' | 'regular' | 'medium' | 'bold' | 'bolder'
  responsive?: boolean
}

const Typography = ({ tag, variant, className, children, weight, responsive, ...props }: TypographyProps) => {
  const Tag = tag || 'p'

  const getVariantClassName = () => {
    if (!variant) return ''

    if (!responsive) return variant

    return `${variant}Resp`
  }

  const computedClasses = clsx(className, {
    [styles[getVariantClassName()]]: variant,
    [styles[`fw${weight}`]]: weight,
  })

  return (
    <Tag className={computedClasses} {...props}>
      {children}
    </Tag>
  )
}

Typography.displayName = 'Typography'

export default Typography
export type { TypographyProps }
