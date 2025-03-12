import React from 'react'

import clsx from 'clsx'

import styles from './Pagination.module.scss'
import ChevronLeft from '../../icons/system/chevron-left.svg'
import ChevronRight from '../../icons/system/chevron-right.svg'
import { ELLIPSIS, usePagination } from '../hooks'

type PaginationProps = {
  onPageChange: (currentPage: number) => void
  totalSize: number
  perPageSize: number
  currentPageSiblings: number
  currentPage: number
  previousText?: string
  nextText?: string
  className?: string
}
const Pagination = ({
  onPageChange,
  totalSize,
  currentPageSiblings,
  currentPage,
  perPageSize,
  nextText = 'Next',
  previousText = 'Prev',
  className,
  ...props
}: PaginationProps) => {
  const paginationRange = usePagination({
    totalSize,
    perPageSize,
    currentPageSiblings,
    currentPage,
  }) as unknown as []

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  if (totalSize <= 0 || perPageSize <= 0 || currentPage <= 0) {
    return null
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <nav role="navigation" aria-label="pagination" className={clsx(styles.pagination, className)} {...props}>
      <p className={styles.stats}>
        Showing {perPageSize} of <span>{totalSize}</span>
      </p>
      <ul className={styles.wrapper}>
        {/* Left navigation */}
        <li>
          <button
            className={clsx(styles.item, styles.navigation)}
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeft />
            <span className={styles.text}>{previousText}</span>
          </button>
        </li>
        {paginationRange?.map((pageNumber, index) => {
          // If the pageNumber is an ellipsis
          if (pageNumber === ELLIPSIS) {
            return (
              <li key={`ellipsis-${index}`} className={clsx(styles.ellipsis)}>
                &#8230;
              </li>
            )
          }

          // If pageNumber is a number
          return (
            <li
              aria-label={`page ${pageNumber}`}
              aria-current={currentPage === pageNumber ? 'true' : 'false'}
              key={index}
              className={clsx(styles.item, styles.pill, {
                [styles.active]: pageNumber === currentPage,
              })}
              onClick={() => typeof pageNumber === 'number' && onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        })}

        {/*  Right Navigation */}
        <li>
          <button
            className={clsx(styles.item, styles.navigation)}
            disabled={currentPage === lastPage}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span className={styles.text}>{nextText}</span>
            <ChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default React.memo(Pagination)
export type { PaginationProps }
