import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'
import type { ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
  isLoading?: boolean
  loading?: () => ReactNode
}

export type ButtonIconProps = {
  Icon: IconType
}
