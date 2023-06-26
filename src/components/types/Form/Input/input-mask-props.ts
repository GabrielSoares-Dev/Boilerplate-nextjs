import type { InputProps } from './input-props'

export type InputMaskProps = InputProps & {
  mask: string
  maskChar?: string | null
}
