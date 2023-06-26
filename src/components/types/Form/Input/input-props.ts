import { InputHTMLAttributes, ReactNode } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  errorMessage?: () => ReactNode
  hasError?: boolean
}
