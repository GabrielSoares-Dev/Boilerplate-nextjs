import { ErrorMessageProps } from '@/components/types'
import * as S from './styles'

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <S.ErrorMessage >{children}</S.ErrorMessage>
}
