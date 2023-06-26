import { ErrorMessageProps } from '@/components/types'
import * as S from './styles'

export function ErrorMessage({ children, className = '' }: ErrorMessageProps) {
  return <S.ErrorMessage className={className}>{children}</S.ErrorMessage>
}
