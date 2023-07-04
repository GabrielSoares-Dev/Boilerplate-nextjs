import { checkPermissionPerUrl } from '@/functions/check-permission-per-url'
jest.mock('@/functions/check-permission-per-url')

export const mockCheckPermissionPerUrl =
  checkPermissionPerUrl as jest.MockedFunction<typeof checkPermissionPerUrl>
