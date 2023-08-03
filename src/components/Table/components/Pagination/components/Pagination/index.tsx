import type { PaginationProps } from '@components'
import { NumberPageItemPagination } from '..'
import * as S from './styles'

export function Pagination({
  numberPages,
  currentPage,
  onPreviousPage,
  onNextPage,
  onCurrentPage,
}: PaginationProps) {
  const maxVisibleButtons = 10
  const halfVisibleButtons = Math.floor(maxVisibleButtons / 2)
  const firstVisiblePage = Math.max(1, currentPage - halfVisibleButtons)
  const lastVisiblePage = Math.min(
    numberPages,
    firstVisiblePage + maxVisibleButtons - 1,
  )

  const disabledPreviousButton = currentPage === 1
  const disabledNextPageButton = currentPage === numberPages

  return (
    <S.Container>
      <S.ContainerPreviousButton>
        <S.PreviousButton
          type="button"
          disabled={disabledPreviousButton}
          onClick={onPreviousPage}
        >
          Anterior
        </S.PreviousButton>
      </S.ContainerPreviousButton>

      {Array.from(
        { length: lastVisiblePage - firstVisiblePage + 1 },
        (_, index) => (
          <NumberPageItemPagination
            key={firstVisiblePage + index}
            onClick={() => onCurrentPage(firstVisiblePage + index)}
            isActive={currentPage === firstVisiblePage + index}
          >
            {firstVisiblePage + index}
          </NumberPageItemPagination>
        ),
      )}
      <S.ContainerNextButton>
        <S.NextButton
          type="button"
          disabled={disabledNextPageButton}
          onClick={onNextPage}
        >
          Próximo
        </S.NextButton>
      </S.ContainerNextButton>
    </S.Container>
  )
}
