import React from 'react';

import styles from './Breadcrumbs.module.scss';
import ChevronRight from '../../assets/icons/system/chevron-right.svg';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  LinkComponent?: React.ComponentType<{ to: string; title?: string; className?: string; children: React.ReactNode }>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, LinkComponent }) => {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.breadcrumb__list}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumb__item}>
            {item.path ? (
              LinkComponent ? (
                // Use the provided LinkComponent for SPA navigation
                <LinkComponent to={item.path} title={item.label} className={styles.breadcrumb__link}>
                  {item.label}
                </LinkComponent>
              ) : (
                // Fallback to a regular anchor tag if no LinkComponent is provided
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
  );
};

export default Breadcrumbs;
export type { BreadcrumbsProps };