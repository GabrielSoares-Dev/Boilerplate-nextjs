import type { SelectOptionProps } from '@components'
import * as S from './styles'
export function SelectOption({ children, ...rest }: SelectOptionProps) {
  return <S.Option {...rest}>{children}</S.Option>
}
