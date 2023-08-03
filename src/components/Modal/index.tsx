'use client'
import { ModalProps } from '@components'
import { AnimatePresence } from 'framer-motion'
import { BackDrop } from '@components'
import * as S from './styles'

export function Modal({ children, isOpen = false, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <BackDrop isOpen={isOpen}>
          <S.ModalWrapper
            key="modal"
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeIn',
            }}
          >
            <S.ContainerCloseButton>
              <S.CloseButton role="close-button" onClick={onClose} />
            </S.ContainerCloseButton>
            {children}
          </S.ModalWrapper>
        </BackDrop>
      )}
    </AnimatePresence>
  )
}
