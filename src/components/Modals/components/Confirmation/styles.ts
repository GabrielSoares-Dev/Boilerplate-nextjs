import tw from 'tailwind-styled-components'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineWarning,
} from 'react-icons/ai'
import { Button } from '@components'

export const Content = tw.div`
flex
flex-col
justify-center
items-center
w-[28rem]
h-[20rem]
p-5
gap-5
`

export const ButtonWrapper = tw.div`
w-40

`

export const ContainerText = tw.div``

export const Text = tw.h1`
text-white 
text-center 
text-base 
font-medium 
leading-[normal] 
tracking-[-0.32px]
`

export const Description = tw.p` 
text-sm 
not-italic 
font-normal 
leading-[normal] 
tracking-[-0.28px];


`

export const ContainerIcon = tw.div`


`

export const SuccessIcon = tw(AiOutlineCheckCircle)`
fill-green-600
text-9xl
`

export const ErrorIcon = tw(AiOutlineCloseCircle)`
fill-red-500
text-9xl
`
export const WarningIcon = tw(AiOutlineWarning)`
fill-yellow-500
text-9xl
`

export const ContainerButtons = tw.div`
flex
gap-14

`
export const ButtonCustom = tw(Button)`
text-sm
h-12
`
