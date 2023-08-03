import type { BackDropProps } from '@components'
import * as S from './styles'

export function BackDrop({ children, isOpen = false }: BackDropProps) {
  return isOpen ? <S.Container>{children}</S.Container> : null
}
