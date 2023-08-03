import tw from 'tailwind-styled-components'
export const Container = tw.section`

`
export const ContainerPreviousButton = tw.div`

`
export const PreviousButton = tw.button`

${({ disabled }) => disabled && 'hover:bg-gray-800'}
`

export const ContainerNextButton = tw.div`

`
export const NextButton = tw.button`

${({ disabled }) => disabled && 'hover:bg-gray-800'}
`
