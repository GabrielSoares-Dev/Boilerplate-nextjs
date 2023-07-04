import { checkHasPermission } from '@functions'
import type { Paths, Permissions } from '@/@types/base-types'
import { permissionsUrls } from '@constants'

export const checkPermissionPerUrl = (path: Paths) => {
  const permission = permissionsUrls[path] as unknown as Permissions
  return checkHasPermission(permission)
}
