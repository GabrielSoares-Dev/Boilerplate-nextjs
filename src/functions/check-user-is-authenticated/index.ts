import { useAuthStore } from '@store'

export const checkUserIsAuthenticated = () => {
  const { accessToken } = useAuthStore.getState().data
  const token = accessToken.token

  return !!token
}
