import type { NumberPageItemPaginationProps } from '@components'
import * as S from './styles'
export function NumberPageItemPagination({
  children,
  isActive,
  onClick,
}: NumberPageItemPaginationProps) {
  return (
    <S.PageButton $isActive={isActive} onClick={onClick} type="button">
      {children}
    </S.PageButton>
  )
}
