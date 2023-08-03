import tw from 'tailwind-styled-components'

export const PageButton = tw.button<{ $isActive: boolean }>`

${({ $isActive }) => $isActive && 'bg-green'}
`
