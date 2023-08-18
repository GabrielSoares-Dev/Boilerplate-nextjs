import type { ReactNode } from 'react'

export type CommonAccordionProps = {
  title: string
  children: ReactNode
  isOpen?: boolean
  onClick?: () => void
}
