import { create } from 'zustand'
import type { ModalConfirmationState } from '@store'

export const useModalConfirmationStore = create<ModalConfirmationState>(
  (set, get) => ({
    payload: {
      type: 'ERROR',
      isOpen: false,
      text: '',
      description: '',
      buttonLabelAgree: 'Sim',
      buttonLabelDisagree: 'Não',
      onAgree: undefined,
      onDisagree: undefined,
      isLoading: false,
    },
    setOpenModalConfirmation: (payload) =>
      set(() => ({
        payload: {
          isOpen: true,
          type: payload.type,
          text: payload.text,
          description: payload.description,
          buttonLabelAgree: payload.buttonLabelAgree || 'Sim',
          buttonLabelDisagree: payload.buttonLabelDisagree || 'Não',
          isLoading: false,
          onAgree: payload.onAgree,
          onDisagree: payload.onDisagree,
        },
      })),
    setCloseModalConfirmation: () =>
      set(() => ({
        payload: {
          type: 'ERROR',
          isOpen: false,
          text: '',
          description: '',
          buttonLabelAgree: 'Sim',
          buttonLabelDisagree: 'Não',
          onAgree: undefined,
          onDisagree: undefined,
        },
      })),
    setLoading: (isLoading) =>
      set((state) => ({
        payload: {
          ...state.payload,
          isLoading,
        },
      })),
  }),
)
