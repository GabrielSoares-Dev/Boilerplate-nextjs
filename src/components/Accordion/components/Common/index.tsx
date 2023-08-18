import type { CommonAccordionProps } from '@components'
import { motion, AnimatePresence } from 'framer-motion'

import * as S from './styles'

export function CommonAccordion({
  title = '',
  isOpen = false,
  children,
  onClick,
}: CommonAccordionProps) {
  return (
    <S.Container>
      <S.AccordionButton onClick={onClick} type="button">
        <span>{title}</span>
        {isOpen ? <S.ArrowUp /> : <S.ArrowDown />}
      </S.AccordionButton>
      <AnimatePresence>
        {isOpen && (
          <S.Content
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </S.Content>
        )}
      </AnimatePresence>
    </S.Container>
  )
}
