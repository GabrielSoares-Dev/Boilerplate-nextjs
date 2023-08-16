import type { TextareaHTMLAttributes, ReactNode } from 'react'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean
  resizeDisabled?: boolean
  errorMessage?: () => ReactNode
  label?: () => ReactNode
}

export type TextAreaLabelProps = {
  children: ReactNode
}
