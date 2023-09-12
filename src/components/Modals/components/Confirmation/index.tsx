import { Modal, ButtonLoading } from '@components'
import { useModalConfirmationStore } from '@store'
import * as S from './styles'

export function ConfirmationModal() {
  const { payload, setCloseModalConfirmation } = useModalConfirmationStore()

  const isErrorType = payload.type === 'ERROR'
  const isSuccessType = payload.type === 'SUCCESS'
  const isWarningType = payload.type === 'WARNING'
  return (
    <Modal isOpen={payload.isOpen!} onClose={() => setCloseModalConfirmation()}>
      <S.Content>
        <S.ContainerIcon>
          {isErrorType && <S.ErrorIcon />}
          {isSuccessType && <S.SuccessIcon />}
          {isWarningType && <S.WarningIcon />}
        </S.ContainerIcon>
        <S.ContainerText>
          <S.Text>{payload.text}</S.Text>
        </S.ContainerText>
        <S.Description>{payload.description}</S.Description>
        <S.ContainerButtons>
          <S.ButtonWrapper>
            <S.ButtonCustom
              isLoading={payload.isLoading}
              loading={() => <ButtonLoading  />}
              onClick={payload.onAgree}
            >
              {payload.buttonLabelAgree}
            </S.ButtonCustom>
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <S.ButtonCustom
              loading={() => <ButtonLoading  />}
              onClick={payload.onDisagree}
            >
              {payload.buttonLabelDisagree}
            </S.ButtonCustom>
          </S.ButtonWrapper>
        </S.ContainerButtons>
      </S.Content>
    </Modal>
  )
}
