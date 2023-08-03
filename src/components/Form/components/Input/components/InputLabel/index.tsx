import type { InputLabelProps } from '@components'
import * as S from './styles'
export function InputLabel({ children }: InputLabelProps) {
  return <S.Label>{children}</S.Label>
}
