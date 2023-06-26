'use client'
import React, { forwardRef } from 'react'
import type { InputMaskProps } from '@/components/types'
import * as S from './styles'

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  (
    {
      children,
      className = '',
      type = 'text',
      name = '',
      hasError = false,
      errorMessage,
      mask = '',
      maskChar = null,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        <S.InputMask
          mask={mask}
          maskChar={maskChar}
          $hasError={hasError}
          inputRef={ref}
          type={type}
          name={name}
          autoComplete="disabled-autocomplete"
          className={className}
          {...props}
        />
        {children}
        <S.ContainerErrorMessage>
          {errorMessage && errorMessage()}
        </S.ContainerErrorMessage>
      </>
    )
  },
)
