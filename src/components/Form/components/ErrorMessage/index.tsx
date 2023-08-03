import { ErrorMessageProps } from '@components'
import * as S from './styles'

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <S.ErrorMessage >{children}</S.ErrorMessage>
}
