'use client'
import type { ProtectedRoutesProps } from '@/middlewares/types'
import { useProtectedRoutes } from '@/middlewares/hooks'

export function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { isAuthenticated } = useProtectedRoutes()
  return (
    <>
      {isAuthenticated && children}
      {!isAuthenticated && null}
    </>
  )
}
