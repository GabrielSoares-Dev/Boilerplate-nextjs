import type { Cases } from '@types'

type Payload = {
  type?: Cases
  text?: string
  description?: string
  isOpen?: boolean
  buttonLabelAgree?: string
  buttonLabelDisagree?: string
  isLoading?: boolean
  onAgree?: () => void
  onDisagree?: () => void
}
export type ModalConfirmationState = {
  payload: Payload
  setOpenModalConfirmation: (payload: Payload) => void
  setCloseModalConfirmation: () => void
  setLoading: (isLoading: boolean) => void
}
