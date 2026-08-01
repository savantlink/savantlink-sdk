import { useMemo } from 'react'

import useScreenSize from './use-screen-size'
import { range } from '../services/number'

const ELLIPSIS = '...'

type usePaginationProps = {
  totalSize: number
  perPageSize: number
  currentPageSiblings: number
  currentPage: number
}

const usePagination = ({ totalSize, perPageSize, currentPageSiblings, currentPage }: usePaginationProps) => {
  const { isMobileScreen } = useScreenSize()
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalSize / perPageSize)
    const totalPageNumbers = isMobileScreen ? 6 : currentPageSiblings + 5

    // Case 1: If the number of pages is less than the page numbers
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    // Calculate siblings page to the left and right of active page
    const leftSiblingIndex = Math.max(currentPage - currentPageSiblings, 1)
    const rightSiblingIndex = Math.min(currentPage + currentPageSiblings, totalPageCount)

    // Determine whether to show Ellipsis
    const showLeftEllipsis = leftSiblingIndex > 2
    const showRightEllipsis = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    // Case 2: Only right ellipsis to be shown
    if (!showLeftEllipsis && showRightEllipsis) {
      const leftItemCount = isMobileScreen ? 3 : 2 + 2 * currentPageSiblings
      const leftRange = range(1, leftItemCount)

      return [...leftRange, ELLIPSIS, totalPageCount]
    }

    // Case 3: Only left ellipsis to be shown
    if (showLeftEllipsis && !showRightEllipsis) {
      const rightItemCount = isMobileScreen ? 3 : 2 + 2 * currentPageSiblings
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
      return [firstPageIndex, ELLIPSIS, ...rightRange]
    }

    // Case 4: show both left and right ellipsis
    if (showLeftEllipsis && showRightEllipsis) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, ELLIPSIS, ...middleRange, ELLIPSIS, lastPageIndex]
    }

    // A small page count can fall between the ellipsis cases above. Always
    // return the complete range rather than leaving consumers with undefined.
    return range(firstPageIndex, lastPageIndex)
  }, [totalSize, perPageSize, currentPageSiblings, currentPage, isMobileScreen])
  return paginationRange
}

export { usePagination, ELLIPSIS }
export type { usePaginationProps }
