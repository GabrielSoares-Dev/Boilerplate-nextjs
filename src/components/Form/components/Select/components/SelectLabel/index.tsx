import type { SelectLabelProps } from '@components'
import * as S from './styles'

export function SelectLabel({ children }: SelectLabelProps) {
  return <S.Label>{children}</S.Label>
}
