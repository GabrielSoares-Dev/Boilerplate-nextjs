import type { TableHeadProps } from '@components'
import * as S from './styles'

export function TableHead({ children, ...props }: TableHeadProps) {
  return <S.THead {...props}>{children}</S.THead>
}
