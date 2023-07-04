import type { Permissions } from '@/@types/base-types'
import { useAuthStore } from '@store'

export const checkHasPermission = (permission: Permissions) => {
  const { user } = useAuthStore.getState().data
  const permissions = user.permissions

  return permissions.includes(permission)
}
