import { forwardRef } from 'react'
import * as S from './styles'
import type { TextAreaProps } from '@components'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      errorMessage,
      label,
      children,
      resizeDisabled = true,
      hasError = false,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {label && label()}
        <S.TextArea
          $hasError={hasError}
          ref={ref}
          $resizeDisabled={resizeDisabled}
          {...props}
        >
          {children}
        </S.TextArea>
        <S.ContainerErrorMessage>
          {errorMessage && errorMessage()}
        </S.ContainerErrorMessage>
      </>
    )
  },
)
