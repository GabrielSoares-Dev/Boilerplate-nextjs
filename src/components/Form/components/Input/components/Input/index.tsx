import type { InputProps } from '@/components/types'
import { forwardRef } from 'react'
import * as S from './styles'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      className = '',
      type = 'text',
      name = '',
      hasError = false,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        <S.Input
          $hasError={hasError}
          ref={ref}
          type={type}
          name={name}
          {...props}
          autoComplete="disabled-autocomplete"
          className={className}
        />
        {children}
        <S.ContainerErrorMessage>
          {errorMessage && errorMessage()}
        </S.ContainerErrorMessage>
      </>
    )
  },
)
