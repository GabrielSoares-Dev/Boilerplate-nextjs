'use client'
import type { PublicRoutesProps } from '@/middlewares/types'
import { usePublicRoutes } from '@/middlewares/hooks'

export function PublicRoutes({ children }: PublicRoutesProps) {
  const { isAuthenticated } = usePublicRoutes()
  return (
    <>
      {!isAuthenticated && children}
      {isAuthenticated && null}
    </>
  )
}
