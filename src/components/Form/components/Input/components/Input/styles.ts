import tw from 'tailwind-styled-components'

export const Input = tw.input<{
  $hasError: boolean
}>`
/* inputs styles */
${({ $hasError }) =>
  $hasError ? 'ring-4 ring-red-600 focus:ring-red-600' : ''}
`

export const ContainerLabel = tw.div``
export const ContainerErrorMessage = tw.div`
ml-4
mt-1
`
