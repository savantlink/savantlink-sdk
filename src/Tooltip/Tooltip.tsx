import React, { useState } from 'react'

import { clsx } from 'clsx'

import styles from './Tooltip.module.scss' // Import scoped SCSS
import InfoIcon from '../../icons/system/info-circle.svg'

interface TooltipProps {
  text: string // Tooltip text
  position?: 'top' | 'bottom' | 'left' | 'right' // Tooltip position
  variant?: 'primary' | 'dark' | 'light' | 'success' | 'info' | 'warning' | 'danger' // Tooltip background variant
  children: React.ReactNode // The element that triggers the tooltip
  className?: string
  hasAsterick?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  hasAsterick,
  position = 'top',
  variant = 'primary',
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  // Handle mouse enter and leave events
  const handleMouseEnter = () => setIsVisible(true)
  const handleMouseLeave = () => setIsVisible(false)

  return (
    <div
      role="tooltip"
      className={clsx(styles.tooltipContainer, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.labelGroup}>
        {children} {hasAsterick && <span className="asterick">*</span>}
        <InfoIcon className={styles[`labelGroup__${variant}`]} />
      </span>
      {isVisible && <div className={`${styles.tooltip} ${styles[position]} ${styles[variant]}`}>{text}</div>}
    </div>
  )
}

export default Tooltip
export type { TooltipProps }
