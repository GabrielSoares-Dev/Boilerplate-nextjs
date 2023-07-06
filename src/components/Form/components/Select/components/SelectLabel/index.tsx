import type { SelectLabelProps } from '@/components/types'
import * as S from './styles'

export function SelectLabel({ children }: SelectLabelProps) {
  return <S.Label>{children}</S.Label>
}
