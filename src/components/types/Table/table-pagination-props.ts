import { ReactNode } from 'react'

export type PaginationProps = {
  numberPages: number
  currentPage: number
  onPreviousPage: () => void
  onNextPage: () => void
  onCurrentPage: (currentPage: number) => void
}

export type NumberPageItemPaginationProps = {
  children: ReactNode
  isActive: boolean
  onClick?: () => void
}
