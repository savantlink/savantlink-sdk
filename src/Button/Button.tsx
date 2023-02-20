import { createElement, forwardRef } from 'react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

import styles from './Button.module.scss'

export type ButtonTag = 'a' | 'button'
export type ButtonSizes = 'sm' | 'md' | 'lg' | 'wide'
export type ButtonSkins = 'solid' | 'outline' | 'flat' | 'underline'

type ButtonProps = {
  skin?: ButtonSkins
  size?: ButtonSizes
  icon?: ReactNode
  trailingIcon?: ReactNode
  isBlock?: boolean
  disabled?: boolean
  textNoWrap?: boolean
  isLoading?: boolean
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { tag?: 'button' })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { tag?: 'a' })
)

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { tag, size, skin, icon, trailingIcon, disabled, isBlock, textNoWrap, isLoading, className, children, ...props },
    ref
  ) => {
    const isDisabled = disabled || isLoading
    const computedClasses = clsx(
      styles.button,
      styles[size || 'md'],
      styles[skin || 'solid'],
      {
        [styles.isDisabled]: isDisabled,
        [styles.block]: isBlock,
        [styles.nonWrapped]: textNoWrap,
      },
      className
    )

    const renderButtonContent = (
      <>
        {icon && <span className={clsx(styles.btnIcon, styles.preIcon)}>{icon}</span>}
        {children}
        {trailingIcon && <span className={clsx(styles.btnIcon, styles.postIcon)}>{trailingIcon}</span>}
        {isLoading && <span className={styles.spinner} />}
      </>
    )

    return createElement(
      tag || 'button',
      {
        className: computedClasses,
        disabled: isDisabled,
        ref,
        ...props,
      },
      renderButtonContent
    )
  }
)

Button.displayName = 'Button'

export default Button
export type { ButtonProps }
