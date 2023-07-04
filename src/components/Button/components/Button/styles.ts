import tw from 'tailwind-styled-components'

export const Button = tw.button<{
  $disabled: boolean
  $isLoading: boolean
}>`
flex 
w-full 
h-[43px] 
justify-center 
items-center 
gap-2.5 
p-2.5;
rounded
hover:opacity-90

${({ $disabled, $isLoading }) => {
  if ($disabled) {
    return 'cursor-default pointer-events-none'
  }
  if ($disabled || $isLoading) {
    return 'cursor-default pointer-events-none'
  }
}}

 `
