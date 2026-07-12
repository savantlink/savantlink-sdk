import { ReactNode, useEffect, useMemo, useState } from 'react'

import { clsx } from 'clsx'

import styles from './Table.module.scss'
import ChevronLeft from '../../assets/icons/system/chevron-left.svg'
import ChevronRight from '../../assets/icons/system/chevron-right.svg'
import DataIcon from '../../assets/icons/system/data.svg'

interface ColumnProps<T> {
  key: string
  header: string
  render?: (data: T) => ReactNode
  sortable?: boolean
}

interface TableProps<T> {
  columns: ColumnProps<T>[]
  data: T[]
  sortConfig?: { key: string; direction: 'asc' | 'desc' }
  emptyState: {
    title?: string
    description?: string
    cTA?: ReactNode
  }
  onSort?: (key: string) => void
  className?: string
  visibleColumns?: number
  onRowClick?: (row: T) => void
}

const Table = <T,>({
  columns,
  data,
  sortConfig,
  onSort,
  emptyState: { title = 'No Data Available', description = 'There is no data to display at the moment.', cTA },
  className,
  visibleColumns,
  onRowClick,
}: TableProps<T>) => {
  const [pageIndex, setPageIndex] = useState(0)

  const dataColumnCount = columns.length

  const pages = useMemo(() => {
    return visibleColumns && visibleColumns > 0 ? Math.ceil(dataColumnCount / visibleColumns) : 1
  }, [dataColumnCount, visibleColumns])

  const visible = useMemo(() => {
    if (!visibleColumns || visibleColumns <= 0) return columns
    const start = pageIndex * visibleColumns
    return columns.slice(start, start + visibleColumns)
  }, [columns, pageIndex, visibleColumns])

  const canPrev = pageIndex > 0
  const canNext = pageIndex < pages - 1

  const goPrev = () => setPageIndex((p) => Math.max(0, p - 1))
  const goNext = () => setPageIndex((p) => Math.min(pages - 1, p + 1))

  useEffect(() => {
    if (pageIndex > pages - 1) {
      setPageIndex(Math.max(0, pages - 1))
    }
  }, [pages, pageIndex])

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
            {pages > 1 && canPrev && (
              <th key="pager-left" className={styles.pagerHeader}>
                <button className={styles.pagerButton} onClick={goPrev} aria-label="Previous columns">
                  <ChevronLeft />
                </button>
              </th>
            )}
            {visible.map((column) => (
              <th
                key={column.key}
                onClick={() => column.sortable && onSort?.(column.key)}
                className={clsx({ [styles.sortable]: column.sortable })}
              >
                {column.header}
                {sortConfig?.key === column.key && (
                  <span className={styles.sortIndicator}>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>
                )}
              </th>
            ))}
            {pages > 1 && canNext && (
              <th key="pager-right" className={styles.pagerHeader}>
                <button className={styles.pagerButton} onClick={goNext} aria-label="Next columns">
                  <ChevronRight />
                </button>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={clsx({ [styles.clickableRow]: onRowClick })}
              tabIndex={onRowClick ? 0 : undefined}
              role={onRowClick ? 'button' : undefined}
              onClick={() => onRowClick?.(row)}
              onKeyDown={(event) => {
                if (onRowClick && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault()
                  onRowClick(row)
                }
              }}
            >
              {pages > 1 && canPrev && <td className={styles.pagerCell} key={`pager-left-${rowIndex}`} />}
              {visible.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(row) : (row as unknown as Record<string, ReactNode>)[column.key]}
                </td>
              ))}
              {pages > 1 && canNext && <td className={styles.pagerCell} key={`pager-right-${rowIndex}`} />}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.displayName = 'Table'

export default Table
export type { TableProps, ColumnProps }
