'use client'
import { checkPermissionPerUrl } from '@functions'
import { usePathname, notFound } from 'next/navigation'
import type { Paths } from '@/@types/base-types'
import { useEffect } from 'react'

export function usePermissionMiddleware() {
  const pathName = usePathname()

  const hasPermission = checkPermissionPerUrl(pathName as Paths)
  useEffect(() => {
    if (!hasPermission) notFound()
  }, [pathName])

  return {
    hasPermission,
  }
}
