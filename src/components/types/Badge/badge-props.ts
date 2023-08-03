import type { ReactNode } from 'react'

export type BadgeColor =
  | 'DEFAULT'
  | 'DARK'
  | 'RED'
  | 'GREEN'
  | 'YELLOW'
  | 'INDIGO'
  | 'PURPLE'
  | 'PINK'

export type BadgeProps = {
  color?: BadgeColor
  children: ReactNode
}
