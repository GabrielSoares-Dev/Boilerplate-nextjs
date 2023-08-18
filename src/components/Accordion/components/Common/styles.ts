import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export const Container = tw.div``

export const AccordionButton = tw.button`
flex 
items-center 
justify-between 
w-full 
p-5 
font-medium 
text-left 
border 
border-b-[1px] 
rounded-t-xl 
transition-all
duration-300
hover:opacity-50
`

export const ArrowDown = tw(IoIosArrowDown)`
text-xl

`
export const ArrowUp = tw(IoIosArrowUp)`
text-xl

`

export const Content = tw(motion.div)`
border 
border-t-0
border-b-[1px]

`
