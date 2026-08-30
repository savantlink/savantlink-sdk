import { ComponentType, FC, ReactNode } from 'react'

import { ChevronRight } from 'lucide-react'

import styles from './Breadcrumbs.module.scss'

import { useScreenSize } from '@/hooks'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  LinkComponent?: ComponentType<{
    to: string
    title?: string
    className?: string
    children: ReactNode
  }>
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, LinkComponent }) => {
  const { isMobile } = useScreenSize()

  const visibleItems = isMobile ? items.slice(-1) : items

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.breadcrumb__list}>
        {visibleItems.map((item, index) => (
          <li key={`${item.label}-${index}`} className={styles.breadcrumb__item}>
            {item.path ? (
              LinkComponent ? (
                <LinkComponent
                  to={item.path}
                  title={item.label}
                  className={styles.breadcrumb__link}
                >
                  {item.label}
                </LinkComponent>
              ) : (
                <a
                  href={item.path}
                  title={item.label}
                  className={styles.breadcrumb__link}
                >
                  {item.label}
                </a>
              )
            ) : (
              <span className={styles.breadcrumb__current}>{item.label}</span>
            )}

            {index < visibleItems.length - 1 && (
              <ChevronRight className={styles.breadcrumb__separator} />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
export type { BreadcrumbsProps }