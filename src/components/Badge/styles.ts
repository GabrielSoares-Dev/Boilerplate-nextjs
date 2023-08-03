import tw from 'tailwind-styled-components'
import { transformBadgeColor } from './functions'
import type { BadgeColor } from '@components'

export const Badge = tw.span<{ $color?: BadgeColor }>`
text-sm 
font-medium 
mr-2 px-2.5 
py-0.5 rounded
${({ $color }) => transformBadgeColor($color)}
`
