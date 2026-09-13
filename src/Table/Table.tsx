import { ReactNode, useEffect, useMemo, useState } from 'react'

import { clsx } from 'clsx'
import { ChevronLeft, ChevronRight, Database as DataIcon } from 'lucide-react'

import styles from './Table.module.scss'

interface ColumnProps<T> {
  key: string
  header: string
  render?: (data: T) => ReactNode
  sortable?: boolean
}

type TableRowKey = string | number

interface TableRowSelection<T> {
  /** Stable, unique identity; selection survives sorting and pagination. */
  getRowKey: (row: T) => TableRowKey
  selectedRowKeys: TableRowKey[]
  onChange: (selectedRowKeys: TableRowKey[]) => void
  isRowSelectable?: (row: T) => boolean
  getRowLabel?: (row: T) => string
  /** Receives all selected keys, including keys outside the current data. */
  renderActions?: (selectedRowKeys: TableRowKey[]) => ReactNode
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
  stickyFirstColumn?: boolean
  rowSelection?: TableRowSelection<T>
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
  stickyFirstColumn = false,
  rowSelection,
}: TableProps<T>) => {
  const [pageIndex, setPageIndex] = useState(0)
  const selectedKeys = new Set(rowSelection?.selectedRowKeys ?? [])
  const selectableKeys = rowSelection
    ? data.filter((row) => rowSelection.isRowSelectable?.(row) !== false).map(rowSelection.getRowKey)
    : []
  const allSelected = selectableKeys.length > 0 && selectableKeys.every((key) => selectedKeys.has(key))
  const someSelected = selectableKeys.some((key) => selectedKeys.has(key))
  const toggleAll = () => {
    if (!rowSelection) return
    const next = new Set(selectedKeys)
    selectableKeys.forEach((key) => allSelected ? next.delete(key) : next.add(key))
    rowSelection.onChange([...next])
  }
  const selectAllCheckbox = () => (
    <input
      type="checkbox"
      className={styles.selectionCheckbox}
      aria-label="Select all rows on this page"
      checked={allSelected}
      disabled={selectableKeys.length === 0}
      ref={(input) => { if (input) input.indeterminate = someSelected && !allSelected }}
      onChange={toggleAll}
    />
  )

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
    <div
      className={clsx(styles.tableWrapper, { [styles.withSelection]: rowSelection }, className)}
      role="region"
      aria-label="Scrollable table"
      tabIndex={0}
    >
      <table
        className={styles.table}
        style={{ minWidth: Math.max(600, visible.length * 140) }}
      >
        <thead>
          <tr>
            {rowSelection && <th className={styles.selectionCell}>{selectAllCheckbox()}</th>}
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
                className={clsx({
                  [styles.sortable]: column.sortable,
                  [styles.stickyFirstColumnHeader]: stickyFirstColumn && column.key === columns[0]?.key,
                })}
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
              key={rowSelection ? rowSelection.getRowKey(row) : rowIndex}
              className={clsx({ [styles.clickableRow]: onRowClick })}
              tabIndex={onRowClick ? 0 : undefined}
              role={onRowClick ? 'button' : undefined}
              onClick={() => onRowClick?.(row)}
              onKeyDown={(event) => {
                if (event.target === event.currentTarget && onRowClick && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault()
                  onRowClick(row)
                }
              }}
            >
              {rowSelection && (
                <td className={styles.selectionCell} onClick={(event) => event.stopPropagation()}>
                  <input
                    type="checkbox"
                    className={styles.selectionCheckbox}
                    aria-label={`Select ${rowSelection.getRowLabel?.(row) ?? `row ${rowIndex + 1}`}`}
                    checked={selectedKeys.has(rowSelection.getRowKey(row))}
                    disabled={rowSelection.isRowSelectable?.(row) === false}
                    onChange={(event) => {
                      const next = new Set(selectedKeys)
                      const key = rowSelection.getRowKey(row)
                      if (event.target.checked) next.add(key)
                      else next.delete(key)
                      rowSelection.onChange([...next])
                    }}
                  />
                </td>
              )}
              {pages > 1 && canPrev && <td className={styles.pagerCell} key={`pager-left-${rowIndex}`} />}
              {visible.map((column) => (
                <td
                  key={column.key}
                  className={clsx({
                    [styles.stickyFirstColumnCell]: stickyFirstColumn && column.key === columns[0]?.key,
                  })}
                >
                  {column.render ? column.render(row) : (row as unknown as Record<string, ReactNode>)[column.key]}
                </td>
              ))}
              {pages > 1 && canNext && <td className={styles.pagerCell} key={`pager-right-${rowIndex}`} />}
            </tr>
          ))}
        </tbody>
      </table>
      {rowSelection && (
        <div className={styles.selectionToolbar}>
          {selectAllCheckbox()}
          <span aria-live="polite">{selectedKeys.size} selected</span>
          {rowSelection.renderActions?.([...selectedKeys])}
        </div>
      )}
    </div>
  )
}

Table.displayName = 'Table'

export default Table
export type { TableProps, ColumnProps, TableRowSelection, TableRowKey }
