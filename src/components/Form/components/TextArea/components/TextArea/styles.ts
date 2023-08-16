import tw from 'tailwind-styled-components'

export const TextArea = tw.textarea<{
  $resizeDisabled: boolean
  $hasError: boolean
}>`

${({ $hasError }) =>
  $hasError ? 'ring-4 ring-red-600 focus:ring-red-600' : ''}
${({ $resizeDisabled }) => $resizeDisabled && 'resize-none'}
`

export const ContainerErrorMessage = tw.div`
ml-4
mt-1
`
