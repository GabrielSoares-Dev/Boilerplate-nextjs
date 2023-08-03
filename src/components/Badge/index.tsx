import type { BadgeProps } from '@components'
import * as S from './styles'

export function Badge({ children, color = 'DEFAULT' }: BadgeProps) {
  return <S.Badge $color={color}>{children}</S.Badge>
}
