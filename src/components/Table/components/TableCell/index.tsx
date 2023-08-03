import { TableCellProps } from '@components'
import * as S from './styles'
export function TableCell({
  children,
  element = 'th',
  ...props
}: TableCellProps) {
  const isThElement = element === 'th'
  const isTdElement = element === 'td'
  return (
    <>
      {isThElement && (
        <S.Th scope="col" {...props}>
          {children}
        </S.Th>
      )}
      {isTdElement && <S.Td {...props}>{children}</S.Td>}
    </>
  )
}
