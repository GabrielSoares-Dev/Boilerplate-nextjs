import { useProtectedRoutes, usePublicRoutes } from '@/middlewares/hooks'
jest.mock('@/middlewares/hooks')

export const mockUseProtectedRoutes = useProtectedRoutes as jest.MockedFunction<
  typeof useProtectedRoutes
>
export const mockUsePublicRoutes = usePublicRoutes as jest.MockedFunction<
  typeof useProtectedRoutes
>
