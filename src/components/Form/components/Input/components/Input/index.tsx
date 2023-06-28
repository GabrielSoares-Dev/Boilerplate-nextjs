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
      label,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {label && label()}
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
