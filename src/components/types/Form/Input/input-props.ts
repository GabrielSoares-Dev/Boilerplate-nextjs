import { InputHTMLAttributes, ReactNode } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: () => ReactNode
  label?: () => ReactNode
  hasError?: boolean
}
