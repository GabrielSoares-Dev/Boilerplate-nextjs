import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'
import { RiCloseCircleLine } from 'react-icons/ri'

export const ModalWrapper = tw(motion.div)`
max-w-xl 
w-full
mx-auto
p-6
bg-gray-700
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
hover:fill-gray-800
duration-500
`
