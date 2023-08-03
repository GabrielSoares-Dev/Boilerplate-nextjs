import React from 'react'
import type { ToastProps } from '@components'
import * as S from './styles'

export function Toast({
  title = '',
  description = '',
  toastType = 'INFO',
}: ToastProps) {
  const enabledIconAttention = toastType === 'INFO' || toastType === 'WARNING'
  const isErrorType = toastType === 'ERROR'
  const isSuccessType = toastType === 'SUCCESS'
  const isWarningType = toastType === 'WARNING'
  return (
    <S.Card>
      <S.Content>
        <S.ContainerTitleIcon>
          <S.SpanIcon>
            {isSuccessType && <S.SuccessIcon role="success-toast-icon" />}
            {isErrorType && <S.ErrorIcon role="error-toast-icon" />}
            {enabledIconAttention && (
              <S.WarningInfoIcon
                $isWarning={isWarningType}
                role="warning-info-toast-icon"
              />
            )}
          </S.SpanIcon>
          <S.ContainerTitle>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.ContainerTitle>
        </S.ContainerTitleIcon>
        <S.ContainerButtonClose>
          <S.CloseButton />
        </S.ContainerButtonClose>
      </S.Content>
    </S.Card>
  )
}
