import clsx from 'clsx'

import styles from './Pagination.module.scss'
import { ELLIPSIS, usePagination } from '../use-pagination'

type PaginationProps = {
  onPageChange: (currentPage: number) => void
  totalSize: number
  perPageSize: number
  currentPageSiblings: number
  currentPage: number
  previousText: string
  nextText: string
  className?: string
}
const Pagination = ({
  onPageChange,
  totalSize,
  currentPageSiblings,
  currentPage,
  perPageSize,
  nextText,
  previousText,
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

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <nav role="navigation" aria-label="pagination" className={className} {...props}>
      <ul className={styles.pagination}>
        {/* Left navigation */}
        <li
          className={clsx(styles.item, styles.navigation, {
            [styles.hide]: currentPage === 1,
          })}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {previousText}
        </li>
        {paginationRange?.map((pageNumber, index) => {
          // If the pageNumber is an ellipsis
          if (pageNumber === ELLIPSIS) {
            return (
              <li key={index} className={clsx(styles.item, styles.ellipsis)}>
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
              className={clsx(styles.item, styles.button, {
                [styles.active]: pageNumber === currentPage,
              })}
              onClick={() => typeof pageNumber === 'number' && onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        })}

        {/*  Right Navigation */}
        <li
          className={clsx(styles.item, styles.navigation, {
            [styles.hide]: currentPage === lastPage,
          })}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {nextText}
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
export type { PaginationProps }
