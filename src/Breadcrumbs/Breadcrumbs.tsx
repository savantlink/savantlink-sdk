import React from 'react'

import styles from './Breadcrumbs.module.scss'
import ChevronRight from '../../icons/system/chevron-right.svg'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.breadcrumb__list}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumb__item}>
            {item.path ? (
              <a href={item.path} title={item.label} className={styles.breadcrumb__link}>
                {item.label}
              </a>
            ) : (
              <span className={styles.breadcrumb__current}>{item.label}</span>
            )}
            {index < items.length - 1 && <ChevronRight className={styles.breadcrumb__separator} />}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
export type { BreadcrumbsProps }
