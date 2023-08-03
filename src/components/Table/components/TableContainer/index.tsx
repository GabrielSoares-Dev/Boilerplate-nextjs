import type { TableContainerProps } from '@components'
import * as S from './styles'

export function TableContainer({ children, ...props }: TableContainerProps) {
  return <S.Card {...props}>{children}</S.Card>
}
