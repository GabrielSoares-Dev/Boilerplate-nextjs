import tw from 'tailwind-styled-components'
import CurrencyInput from 'react-currency-input-field'

export const InputMoney = tw(CurrencyInput)<{
  $hasError: boolean
}>`

${({ $hasError }) =>
  $hasError ? 'ring-4 ring-red-600 focus:ring-red-600' : ''}
`

export const ContainerErrorMessage = tw.div`
ml-4
mt-1
`
