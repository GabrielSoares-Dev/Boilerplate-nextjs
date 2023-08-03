import type { SelectProps } from '@components'
import { forwardRef } from 'react'
import * as S from './styles'

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      className = '',
      hasError = false,
      label,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    return (
      <S.ContainerSelect>
        {label && <S.ContainerLabel>{label()}</S.ContainerLabel>}
        <S.Select $hasError={hasError} ref={ref} {...props}>
          {children}
        </S.Select>
        {errorMessage && (
          <S.ContainerErrorMessage>{errorMessage()}</S.ContainerErrorMessage>
        )}
      </S.ContainerSelect>
    )
  },
)
