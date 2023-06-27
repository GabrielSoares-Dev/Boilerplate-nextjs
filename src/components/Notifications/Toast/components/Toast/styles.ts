import tw from 'tailwind-styled-components'
import { IoIosClose } from 'react-icons/io'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { RiErrorWarningLine } from 'react-icons/ri'
import { TiWarningOutline } from 'react-icons/ti'

export const Card = tw.div`
w-full 
max-w-xl 
p-6 
mt-auto
ml-auto 
bg-gray-700 
rounded-lg
`

export const Content = tw.div`
flex
items-start 
justify-between
-mx-2
`

export const ContainerTitleIcon = tw.div`
flex 
items-start 
px-2
`

export const ContainerTitle = tw.div`
ml-2
`

export const Title = tw.h5`
text-gray-100
font-semibold

`

export const Description = tw.span`
text-xs 
font-medium
text-gray-300
m-0

`

export const ContainerButtonClose = tw.div`
px-2
`

export const CloseButton = tw(IoIosClose)`
inline-block 
fill-gray-400
hover:fill-gray-300
cursor-pointer
text-3xl
`

export const SpanIcon = tw.span`
flex-shrink-0
`
export const SuccessIcon = tw(AiOutlineCheckCircle)`
fill-green-400
text-xl
`
export const ErrorIcon = tw(RiErrorWarningLine)`
fill-red-500
text-xl


`
export const WarningInfoIcon = tw(TiWarningOutline)<{
  $isWarning: boolean
}>`
${({ $isWarning }) => ($isWarning ? 'fill-yellow-500' : 'fill-blue-600')}
text-xl
`
