import { FC, ReactNode, useState } from 'react'

import { clsx } from 'clsx'
import { Info as InfoIcon } from 'lucide-react'

import styles from './Tooltip.module.scss'

interface TooltipProps {
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  variant?: 'primary' | 'dark' | 'light' | 'success' | 'info' | 'warning' | 'danger'
  children: ReactNode
  className?: string
  hasAsterick?: boolean
}

const Tooltip: FC<TooltipProps> = ({
  text,
  hasAsterick,
  position = 'top',
  variant = 'primary',
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      role="tooltip"
      className={clsx(styles.tooltipContainer, className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className={styles.labelGroup}>
        {children} {hasAsterick && <span className="asterick">*</span>}
        <InfoIcon className={styles[`labelGroup__${variant}`]} />
      </span>
      {isVisible && <div className={clsx(styles.tooltip, styles[position], styles[variant])}>{text}</div>}
    </div>
  )
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
export type { TooltipProps }
