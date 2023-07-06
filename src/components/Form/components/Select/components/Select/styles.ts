import tw from 'tailwind-styled-components'
export const ContainerSelect = tw.div`
relative
`

export const Select = tw.select<{
  $hasError: boolean
}>`
${({ $hasError }) =>
  $hasError ? 'ring-2 ring-red-600 focus:ring-red-600' : ''}
  `
export const ContainerLabel = tw.div`
mb-[14px]

`
export const ContainerErrorMessage = tw.div`
ml-4
mt-1
`
