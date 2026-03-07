import { ComponentType, FC, ReactNode } from 'react'

import styles from './Breadcrumbs.module.scss'
import ChevronRight from '../../assets/icons/system/chevron-right.svg'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  LinkComponent?: ComponentType<{ to: string; title?: string; className?: string; children: ReactNode }>
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, LinkComponent }) => (
  <nav className={styles.breadcrumb} aria-label="Breadcrumb">
    <ol className={styles.breadcrumb__list}>
      {items.map((item, index) => (
        <li key={index} className={styles.breadcrumb__item}>
          {item.path ? (
            LinkComponent ? (
              <LinkComponent to={item.path} title={item.label} className={styles.breadcrumb__link}>
                {item.label}
              </LinkComponent>
            ) : (
              <a href={item.path} title={item.label} className={styles.breadcrumb__link}>
                {item.label}
              </a>
            )
          ) : (
            <span className={styles.breadcrumb__current}>{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight className={styles.breadcrumb__separator} />}
        </li>
      ))}
    </ol>
  </nav>
)

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
export type { BreadcrumbsProps }
