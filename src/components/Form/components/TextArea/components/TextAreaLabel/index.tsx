import * as S from './styles'
import type { TextAreaLabelProps } from '@components'

export function TextAreaLabel({ children }: TextAreaLabelProps) {
  return <S.Label>{children}</S.Label>
}
