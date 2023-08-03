import tw from 'tailwind-styled-components'

export const Tr = tw.tr<{ $forWhat: 'HEADERS' | 'CONTENT' }>`
${({ $forWhat }) =>
  $forWhat === 'CONTENT' ? 'border-b bg-gray-800 border-gray-700' : ''}

`
