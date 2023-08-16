import tw from 'tailwind-styled-components'
import { IoCloudUpload } from 'react-icons/io5'

export const ContainerInput = tw.div`
flex 
items-center 
justify-center 
w-full
relative
`

export const FakeInput = tw.div<{ $hasError: boolean }>`
${({ $hasError }) => ($hasError ? 'border-red-600' : 'border-gray-600')}

`

export const RealInput = tw.input`
opacity-0
w-full
h-full
absolute
cursor-pointer
`
export const ContainerIconAndTexts = tw.div`
flex 
flex-col 
items-center 
justify-center 
pt-5 
pb-6
`
export const UploadIcon = tw(IoCloudUpload)`
text-gray-500
text-4xl
`

export const ClickOrDragText = tw.p`
mb-2 
text-sm 
text-gray-400
`

export const Specifications = tw.p`
text-xs  
text-gray-400
`

export const CurrentFile = tw.p` 
text-base 
text-gray-400
`
