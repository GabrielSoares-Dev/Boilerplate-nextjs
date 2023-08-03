import type { TableProps } from '@components'
import * as S from './styles'

export function Table({ children, ...props }: TableProps) {
  return <S.TableCustom {...props}>{children}</S.TableCustom>
}
