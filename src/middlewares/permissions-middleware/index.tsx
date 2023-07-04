'use client'
import type { PermissionsMiddlewareProps } from '@/middlewares/types'
import { usePermissionMiddleware } from '@/middlewares/hooks'

export function PermissionsMiddleware({
  children,
}: PermissionsMiddlewareProps) {
  const { hasPermission } = usePermissionMiddleware()

  return (
    <>
      {!hasPermission && null}
      {hasPermission && children}
    </>
  )
}
