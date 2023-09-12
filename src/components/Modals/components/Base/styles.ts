import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'
import { RiCloseCircleLine } from 'react-icons/ri'

export const ModalWrapper = tw(motion.div)` 
w-max
mx-auto
p-6
rounded-xl

`
export const ContainerCloseButton = tw.div`
relative
`

export const CloseButton = tw(RiCloseCircleLine)`
fill-white
text-3xl
absolute
right-0
cursor-pointer
duration-500
`
