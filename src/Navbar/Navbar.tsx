import type { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Navbar.module.scss'

type NavbarProps = HTMLAttributes<HTMLElement>

const Navbar = ({ children, className, ...htmlAttributes }: NavbarProps) => {
  const computedClasses = clsx(styles.navbar, className)
  return (
    <nav className={computedClasses} {...htmlAttributes}>
      {children}
    </nav>
  )
}

export default Navbar
export type { NavbarProps }
