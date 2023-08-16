import React, { forwardRef } from 'react'
import type { InputFileProps } from '@components'
import * as S from './styles'

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  (
    {
      hasError = false,
      currentFile,
      specifications = '',
      errorMessage,
      label,
      onChange,
      ...props
    },
    ref,
  ) => {
    const hasFile = currentFile !== '' && currentFile !== undefined
    return (
      <>
        {label && label()}
        <S.ContainerInput>
          <S.FakeInput $hasError={hasError}>
            <S.ContainerIconAndTexts>
              {!hasFile && <S.UploadIcon />}
              {hasFile && <S.CurrentFile>{currentFile}</S.CurrentFile>}
              {!hasFile && (
                <>
                  <S.ClickOrDragText>
                    <span className="font-semibold">
                      Clique para fazer upload
                    </span>{' '}
                    ou arraste
                  </S.ClickOrDragText>
                  <S.Specifications>{specifications}</S.Specifications>
                </>
              )}
            </S.ContainerIconAndTexts>
            <S.RealInput ref={ref} type="file" {...props} />
          </S.FakeInput>
        </S.ContainerInput>
        {errorMessage && errorMessage()}
      </>
    )
  },
)
