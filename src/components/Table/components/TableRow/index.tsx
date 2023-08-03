import type { TableRowProps } from '@components'
import * as S from './styles'

export function TableRow({
  children,
  forWhat = 'HEADERS',
  ...props
}: TableRowProps) {
  return (
    <S.Tr $forWhat={forWhat} {...props}>
      {children}
    </S.Tr>
  )
}
