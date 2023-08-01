'use client'
import { useNavigation, usePermissions } from '@hooks'
import { usePathname} from 'next/navigation'
import { useEffect } from 'react'
import type { Paths } from '@/@types/base-types'

export function usePermissionMiddleware() {
  const {navigate} = useNavigation()
  const { checkPermissionPerUrl } = usePermissions()
  const pathName = usePathname()

  const hasPermission = checkPermissionPerUrl(pathName as Paths)

  useEffect(() => {
    if (!hasPermission) navigate('/not-found')
  }, [pathName])

  return {
    hasPermission,
  }
}
