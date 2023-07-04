import { ButtonProps } from '@/components/types'
import * as S from './styles'
export function Button({
  children,
  type = 'button',
  className = '',
  isLoading = false,
  disabled = false,
  loading,
  ...rest
}: ButtonProps) {
  return (
    <>
      <S.Button
        disabled={disabled || isLoading}
        $disabled={disabled}
        $isLoading={isLoading}
        type={type}
        {...rest}
      >
        {isLoading ? (
          <>
            {loading && loading()}
            {'Processando...'}
          </>
        ) : (
          children
        )}
      </S.Button>
    </>
  )
}
