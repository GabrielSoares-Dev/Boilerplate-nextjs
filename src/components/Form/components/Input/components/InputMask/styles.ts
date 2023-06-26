import tw from 'tailwind-styled-components'
import ReactInputMask from 'react-input-mask'
export const InputMask = tw(ReactInputMask)<{
  $hasError: boolean
}>`
/* inputs styles */
${({ $hasError }) =>
  $hasError ? 'ring-4 ring-red-600 focus:ring-red-600' : ''}
`

export const ContainerErrorMessage = tw.div`
ml-4
mt-1
`
