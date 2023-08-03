import { forwardRef } from 'react'
import type { InputProps } from '@components'
import * as S from './styles'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      type = 'text',
      name = '',
      hasError = false,
      errorMessage,
      label,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {label && <S.ContainerLabel>{label()}</S.ContainerLabel>}
        <S.Input
          $hasError={hasError}
          ref={ref}
          type={type}
          name={name}
          {...props}
          autoComplete="disabled-autocomplete"
        />
        {children}
        <S.ContainerErrorMessage>
          {errorMessage && errorMessage()}
        </S.ContainerErrorMessage>
      </>
    )
  },
)
