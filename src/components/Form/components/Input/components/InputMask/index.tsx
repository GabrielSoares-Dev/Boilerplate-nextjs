'use client'
import React, { forwardRef } from 'react'
import type { InputMaskProps } from '@components'
import * as S from './styles'

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  (
    {
      children,
      className = '',
      type = 'text',
      name = '',
      hasError = false,
      mask = '',
      maskChar = null,
      errorMessage,
      label,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {label && <S.ContainerLabel>{label()}</S.ContainerLabel>}
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
