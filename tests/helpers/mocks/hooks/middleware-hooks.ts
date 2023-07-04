import {
  useProtectedMiddleware,
  usePublicMiddleware,
  usePermissionMiddleware,
} from '@/middlewares/hooks'
jest.mock('@/middlewares/hooks')

export const mockUseProtectedMiddleware =
  useProtectedMiddleware as jest.MockedFunction<typeof useProtectedMiddleware>
export const mockUsePublicMiddleware =
  usePublicMiddleware as jest.MockedFunction<typeof usePublicMiddleware>
export const mockUsePermissionMiddleware =
  usePermissionMiddleware as jest.MockedFunction<typeof usePermissionMiddleware>
