import type { InputHTMLAttributes, ReactNode } from 'react'

export type InputFileProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean
  currentFile?: string
  specifications?: string
  errorMessage?: () => ReactNode
  label?: () => ReactNode
}
