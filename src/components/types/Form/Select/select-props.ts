import type {
  ReactNode,
  SelectHTMLAttributes,
  OptionHTMLAttributes,
} from 'react'

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  hasError?: boolean
  errorMessage?: () => ReactNode
  label?: () => ReactNode
}

export type SelectOptionProps = OptionHTMLAttributes<HTMLOptionElement> & {}

export type SelectLabelProps = {
  children: ReactNode
}
