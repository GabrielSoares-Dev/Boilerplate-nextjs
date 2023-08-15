'use client'
import React, { forwardRef } from 'react'
import * as S from './styles'
import type { InputMoneyProps } from '@components'

export const InputMoney = forwardRef<HTMLInputElement, InputMoneyProps>(
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
        <S.InputMoney
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
