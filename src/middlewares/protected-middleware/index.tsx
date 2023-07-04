'use client'
import type { ProtectedMiddlewareProps } from '@/middlewares/types'
import { useProtectedMiddleware } from '@/middlewares/hooks'

export function ProtectedMiddleware({ children }: ProtectedMiddlewareProps) {
  const { isAuthenticated } = useProtectedMiddleware()
  return (
    <>
      {isAuthenticated && children}
      {!isAuthenticated && null}
    </>
  )
}
