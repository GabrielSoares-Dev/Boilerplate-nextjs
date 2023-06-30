import { checkUserIsAuthenticated } from '@/functions/check-user-is-authenticated'
jest.mock('@/functions/check-user-is-authenticated')

export const mockCheckUserIsAuthenticated =
  checkUserIsAuthenticated as jest.MockedFunction<
    typeof checkUserIsAuthenticated
  >
