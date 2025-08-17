import React, { ReactNode } from 'react'

import { clsx } from 'clsx'

import styles from './Table.module.scss'
import DataIcon from '../../icons/system/data.svg'

interface ColumnProps<T> {
  key: string
  header: string
  render?: (data: T) => React.ReactNode
  sortable?: boolean
}

interface TableProps<T> {
  columns: ColumnProps<T>[]
  data: T[]
  sortConfig?: { key: string; direction: 'asc' | 'desc' }
  emptyState: {
    title?: string // Title for the empty state
    description?: string // Description for the empty state
    cTA?: React.ReactNode // Optional CTA button for the empty state
  }
  onSort?: (key: string) => void
  className?: string
}

const Table = <T,>({
  columns,
  data,
  sortConfig,
  onSort,
  emptyState: { title = 'No Data Available', description = 'There is no data to display at the moment.', cTA },
  className
}: TableProps<T>) => {
  const handleSort = (key: string) => {
    if (onSort) {
      onSort(key)
    }
  }

  // Render empty state if data is empty
  if (data.length === 0) {
    return (
      <div className={clsx(styles.emptyState, className)}>
        <DataIcon className={styles.emptyStateIcon} />
        <h3 className={styles.emptyStateTitle}>{title}</h3>
        <p className={styles.emptyStateDescription}>{description}</p>
        {cTA && <div className={styles.emptyStateCta}>{cTA}</div>}
      </div>
    )
  }

  return (
    <div className={clsx(styles.tableWrapper, className)}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => column.sortable && handleSort(column.key)}
                className={`${column.sortable ? styles.sortable : ''}`}
              >
                {column.header}
                {sortConfig?.key === column.key && (
                  <span className={styles.sortIndicator}>{sortConfig?.direction === 'asc' ? '▲' : '▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(row) : (row as unknown as Record<string, ReactNode>)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.displayName = "Table"

export default Table
export type { TableProps, ColumnProps }
