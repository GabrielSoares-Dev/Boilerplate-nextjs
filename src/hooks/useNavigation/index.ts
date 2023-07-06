'use client'
import { useRouter, usePathname } from 'next/navigation'

export function useNavigation() {
  const { push, back, forward } = useRouter()
  const pathName = usePathname()
  const navigate = (path: string) => push(path)
  const navigateBack = () => back()
  const navigateNext = () => forward()

  return {
    pathName,
    navigate,
    navigateBack,
    navigateNext,
  }
}
