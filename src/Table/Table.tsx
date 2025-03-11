import React from 'react'

import styles from './Table.module.scss'
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
  onSort?: (key: string) => void
}

const Table = <T,>({ columns, data, sortConfig, onSort }: TableProps<T>) => {
  const handleSort = (key: string) => {
    if (onSort) {
      onSort(key)
    }
  }

  return (
    <div className={styles.tableWrapper}>
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
                  {column.render ? column.render(row) : (row as Record<string, any>)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
export type { TableProps, ColumnProps }
